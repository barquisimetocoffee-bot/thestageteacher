import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[TRACK-USAGE] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    logStep("Function started");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Get current month-year
    const now = new Date();
    const monthYear = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    logStep("Current month-year", { monthYear });

    // Check subscription status
    const { data: subscription } = await supabaseClient
      .from("subscribers")
      .select("subscription_tier, subscribed")
      .eq("user_id", user.id)
      .single();

    const isProUser = subscription?.subscribed && subscription?.subscription_tier === 'pro';
    logStep("Subscription status", { isProUser, tier: subscription?.subscription_tier });

    if (isProUser) {
      // Pro users have unlimited usage
      logStep("Pro user - unlimited usage allowed");
      return new Response(JSON.stringify({ 
        success: true, 
        unlimited: true, 
        tier: 'pro' 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // For free users, check and update usage
    const { data: usage } = await supabaseClient
      .from("usage_tracking")
      .select("*")
      .eq("user_id", user.id)
      .eq("month_year", monthYear)
      .single();

    if (!usage) {
      // Create new usage record for this month
      const { error: insertError } = await supabaseClient
        .from("usage_tracking")
        .insert({
          user_id: user.id,
          email: user.email,
          month_year: monthYear,
          generations_used: 1,
          generations_limit: 50,
          last_generation_at: new Date().toISOString(),
        });

      if (insertError) throw insertError;

      logStep("New usage record created", { monthYear, used: 1, limit: 50 });
      return new Response(JSON.stringify({ 
        success: true, 
        used: 1, 
        limit: 50, 
        remaining: 49,
        tier: 'free'
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Check if user has exceeded limit
    if (usage.generations_used >= usage.generations_limit) {
      logStep("Usage limit exceeded", { used: usage.generations_used, limit: usage.generations_limit });
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Usage limit exceeded",
        used: usage.generations_used,
        limit: usage.generations_limit,
        tier: 'free'
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429,
      });
    }

    // Increment usage
    const newUsageCount = usage.generations_used + 1;
    const { error: updateError } = await supabaseClient
      .from("usage_tracking")
      .update({
        generations_used: newUsageCount,
        last_generation_at: new Date().toISOString(),
      })
      .eq("id", usage.id);

    if (updateError) throw updateError;

    logStep("Usage updated", { used: newUsageCount, limit: usage.generations_limit });
    return new Response(JSON.stringify({ 
      success: true, 
      used: newUsageCount, 
      limit: usage.generations_limit,
      remaining: usage.generations_limit - newUsageCount,
      tier: 'free'
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in track-usage", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});