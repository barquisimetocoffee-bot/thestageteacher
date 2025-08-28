import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

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

    // Send emails using Supabase's transactional email
    try {
      // Send confirmation email to user
      await supabase.auth.admin.inviteUserByEmail(email, {
        data: {
          name: name,
          subject: subject,
          message: message,
          type: 'contact_confirmation'
        }
      });

      console.log("Contact form submitted and emails sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails
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