import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('[ANALYTICS] Function started');

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get the user from the request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.log('[ANALYTICS] No authorization header');
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (userError || !user) {
      console.log('[ANALYTICS] User not authenticated:', userError);
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if user has @vicerta.com email
    if (!user.email?.endsWith('@vicerta.com')) {
      console.log('[ANALYTICS] Access denied - not vicerta email:', user.email);
      return new Response(
        JSON.stringify({ error: 'Access denied' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('[ANALYTICS] Access granted for:', user.email);

    // Get current date and calculate date ranges
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // 1. Total registered users
    const { count: totalUsers, error: usersError } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    if (usersError) {
      console.error('[ANALYTICS] Error getting total users:', usersError);
    }

    // 2. Pro users (active subscribers)
    const { count: proUsers, error: proError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('subscribed', true)
      .gte('subscription_end', now.toISOString());

    if (proError) {
      console.error('[ANALYTICS] Error getting pro users:', proError);
    }

    // 3. Tool usage statistics
    const { data: toolUsage, error: toolError } = await supabase
      .from('generated_content')
      .select('tool_name, tool_type')
      .order('created_at', { ascending: false });

    if (toolError) {
      console.error('[ANALYTICS] Error getting tool usage:', toolError);
    }

    // Process tool usage data
    const toolStats = toolUsage?.reduce((acc: any, item: any) => {
      const toolName = item.tool_name;
      if (!acc[toolName]) {
        acc[toolName] = {
          name: toolName,
          type: item.tool_type,
          count: 0
        };
      }
      acc[toolName].count++;
      return acc;
    }, {}) || {};

    const sortedTools = Object.values(toolStats).sort((a: any, b: any) => b.count - a.count);

    // 4. Growth metrics - Users registered in last 7 and 30 days
    const { count: newUsers7d, error: growth7Error } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo.toISOString());

    const { count: newUsers30d, error: growth30Error } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', thirtyDaysAgo.toISOString());

    // Pro users growth
    const { count: newPro7d, error: prGrowth7Error } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('subscribed', true)
      .gte('created_at', sevenDaysAgo.toISOString());

    const { count: newPro30d, error: proGrowth30Error } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('subscribed', true)
      .gte('created_at', thirtyDaysAgo.toISOString());

    // Total requests made
    const { count: totalRequests, error: requestsError } = await supabase
      .from('generated_content')
      .select('*', { count: 'exact', head: true });

    const analyticsData = {
      totalUsers: totalUsers || 0,
      proUsers: proUsers || 0,
      totalRequests: totalRequests || 0,
      toolRanking: sortedTools,
      growth: {
        users: {
          last7Days: newUsers7d || 0,
          last30Days: newUsers30d || 0
        },
        proUsers: {
          last7Days: newPro7d || 0,
          last30Days: newPro30d || 0
        }
      }
    };

    console.log('[ANALYTICS] Returning analytics data:', analyticsData);

    return new Response(
      JSON.stringify(analyticsData),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('[ANALYTICS] Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});