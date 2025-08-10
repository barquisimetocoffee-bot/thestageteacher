import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: 'free' | 'pro';
  subscription_end?: string;
}

interface UsageData {
  used: number;
  limit: number;
  remaining: number;
  unlimited?: boolean;
  tier: 'free' | 'pro';
}

interface SubscriptionContextType {
  subscription: SubscriptionData | null;
  usage: UsageData | null;
  loading: boolean;
  checkSubscription: () => Promise<void>;
  createCheckout: (priceId?: string) => Promise<void>;
  openCustomerPortal: () => Promise<void>;
  trackUsage: () => Promise<boolean>;
  refreshUsage: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user, session } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [usage, setUsage] = useState<UsageData | null>(null);
  const [loading, setLoading] = useState(false);

  const checkSubscription = useCallback(async () => {
    if (!session) return;

    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (error) throw error;
      setSubscription(data);
    } catch (error) {
      console.error('Error checking subscription:', error);
    } finally {
      setLoading(false);
    }
  }, [session]);

  const refreshUsage = useCallback(async () => {
    if (!session) return;

    try {
      // Get current usage without incrementing
      const { data: currentUsage } = await supabase
        .from('usage_tracking')
        .select('*')
        .eq('user_id', user?.id)
        .eq('month_year', `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`)
        .single();

      const { data: subscriptionData } = await supabase
        .from('subscribers')
        .select('subscription_tier, subscribed')
        .eq('user_id', user?.id)
        .single();

      const isProUser = subscriptionData?.subscribed && subscriptionData?.subscription_tier === 'pro';

      if (isProUser) {
        setUsage({
          used: 0,
          limit: 0,
          remaining: 0,
          unlimited: true,
          tier: 'pro'
        });
      } else if (currentUsage) {
        setUsage({
          used: currentUsage.generations_used,
          limit: currentUsage.generations_limit,
          remaining: currentUsage.generations_limit - currentUsage.generations_used,
          tier: 'free'
        });
      } else {
        setUsage({
          used: 0,
          limit: 50,
          remaining: 50,
          tier: 'free'
        });
      }
    } catch (error) {
      console.error('Error refreshing usage:', error);
    }
  }, [session, user?.id]);

  const createCheckout = useCallback(async (priceId?: string) => {
    if (!session) throw new Error('Not authenticated');

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId },
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (error) throw error;
      
      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  }, [session]);

  const openCustomerPortal = useCallback(async () => {
    if (!session) throw new Error('Not authenticated');

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (error) throw error;
      
      // Open customer portal in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error opening customer portal:', error);
      throw error;
    }
  }, [session]);

  const trackUsage = useCallback(async (): Promise<boolean> => {
    if (!session) return false;

    try {
      const { data, error } = await supabase.functions.invoke('track-usage', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (error) throw error;

      if (data.success) {
        setUsage(data);
        return true;
      } else {
        setUsage(data);
        return false;
      }
    } catch (error) {
      console.error('Error tracking usage:', error);
      return false;
    }
  }, [session]);

  // Check subscription on mount and auth change
  useEffect(() => {
    if (user) {
      checkSubscription();
      refreshUsage();
    } else {
      setSubscription(null);
      setUsage(null);
    }
  }, [user, checkSubscription, refreshUsage]);

  const value = {
    subscription,
    usage,
    loading,
    checkSubscription,
    createCheckout,
    openCustomerPortal,
    trackUsage,
    refreshUsage,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}