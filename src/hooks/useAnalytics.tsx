import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface AnalyticsData {
  totalUsers: number;
  proUsers: number;
  totalRequests: number;
  toolRanking: Array<{
    name: string;
    type: string;
    count: number;
  }>;
  growth: {
    users: {
      last7Days: number;
      last30Days: number;
    };
    proUsers: {
      last7Days: number;
      last30Days: number;
    };
  };
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchAnalytics = async () => {
    if (!user?.email?.endsWith('@vicerta.com')) {
      setError('Access denied - Vicerta email required');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { data: analyticsData, error: functionError } = await supabase.functions
        .invoke('get-analytics', {
          headers: {
            Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
          }
        });

      if (functionError) {
        throw functionError;
      }

      setData(analyticsData);
    } catch (err) {
      console.error('Error fetching analytics:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  return {
    data,
    loading,
    error,
    refetch: fetchAnalytics
  };
}