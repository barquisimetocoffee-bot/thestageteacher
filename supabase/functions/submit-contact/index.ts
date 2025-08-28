import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  institute?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { name, email, institute, subject, message }: ContactRequest = await req.json();

    // Save to database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        institute,
        subject,
        message,
      });

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send notification email if Resend is configured
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      
      try {
        // Send confirmation email to user
        await resend.emails.send({
          from: "Vicerta <onboarding@resend.dev>",
          to: [email],
          subject: "We received your message!",
          html: `
            <h1>Thank you for contacting us, ${name}!</h1>
            <p>We have received your message about "${subject}" and will get back to you as soon as possible.</p>
            <p>Your message: "${message}"</p>
            <p>Best regards,<br>The Vicerta Team</p>
          `,
        });

        // Send notification to admin
        await resend.emails.send({
          from: "Vicerta <onboarding@resend.dev>",
          to: ["info@vicerta.com"],
          subject: `New Contact Form: ${subject}`,
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Institute:</strong> ${institute || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);