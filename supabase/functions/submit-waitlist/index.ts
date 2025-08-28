import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  message?: string;
  productName: string;
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

    const { name, email, organization, role, message, productName }: WaitlistRequest = await req.json();

    // Save to database
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({
        name,
        email,
        organization,
        role,
        message,
        product_name: productName,
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
          subject: `Welcome to the ${productName} waitlist!`,
          html: `
            <h1>Thank you for joining the waitlist!</h1>
            <p>Hi ${name},</p>
            <p>We've received your request to join the waitlist for <strong>${productName}</strong>.</p>
            <p>We'll notify you as soon as it's available. Thank you for your patience!</p>
            <p>Best regards,<br>The Vicerta Team</p>
          `,
        });

        // Send notification to admin
        await resend.emails.send({
          from: "Vicerta <onboarding@resend.dev>",
          to: ["info@vicerta.com"],
          subject: `New Waitlist Signup: ${productName}`,
          html: `
            <h1>New Waitlist Signup</h1>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
            <p><strong>Role:</strong> ${role || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message || 'No message'}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Successfully joined waitlist" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-waitlist function:", error);
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