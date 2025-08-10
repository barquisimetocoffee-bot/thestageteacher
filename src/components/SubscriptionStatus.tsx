import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Crown, Zap, Settings, RefreshCw } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { UsageLimitModal } from './UsageLimitModal';

interface SubscriptionStatusProps {
  className?: string;
}

export function SubscriptionStatus({ className = "" }: SubscriptionStatusProps) {
  const { subscription, usage, loading, checkSubscription, openCustomerPortal, refreshUsage } = useSubscription();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await Promise.all([checkSubscription(), refreshUsage()]);
    setRefreshing(false);
  };

  const handleManageSubscription = async () => {
    try {
      await openCustomerPortal();
    } catch (error) {
      console.error('Error opening customer portal:', error);
    }
  };

  const usagePercentage = usage && !usage.unlimited 
    ? (usage.used / usage.limit) * 100 
    : 0;

  const isPro = subscription?.subscribed && subscription?.subscription_tier === 'pro';

  return (
    <>
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-2">
              {isPro ? (
                <>
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <span>EasyTeach Pro</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Active
                  </Badge>
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span>Free Plan</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                disabled={refreshing || loading}
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              </Button>
              {isPro && (
                <Button variant="ghost" size="sm" onClick={handleManageSubscription}>
                  <Settings className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Usage Information */}
          {!loading && usage && (
            <div className="space-y-3">
              {usage.unlimited ? (
                <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                  <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-semibold text-yellow-800">Unlimited AI Generations</p>
                  <p className="text-sm text-yellow-600">No monthly limits</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between text-sm">
                    <span>AI Generations This Month</span>
                    <span className="font-medium">{usage.used} / {usage.limit}</span>
                  </div>
                  <Progress value={usagePercentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{usage.remaining} remaining</span>
                    <span>{usagePercentage.toFixed(0)}% used</span>
                  </div>
                  
                  {usage.remaining <= 5 && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800 font-medium">
                        ⚠️ Running low on generations
                      </p>
                      <p className="text-xs text-orange-600 mt-1">
                        Consider upgrading to Pro for unlimited access
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            {!isPro && (
              <Button 
                onClick={() => setShowUpgradeModal(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Crown className="h-4 w-4 mr-2" />
                Upgrade to Pro
              </Button>
            )}
            
            {isPro && subscription?.subscription_end && (
              <div className="text-xs text-muted-foreground text-center">
                Renews on {new Date(subscription.subscription_end).toLocaleDateString()}
              </div>
            )}
          </div>

          {loading && (
            <div className="text-center text-sm text-muted-foreground">
              Checking subscription status...
            </div>
          )}
        </CardContent>
      </Card>

      <UsageLimitModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={() => setShowUpgradeModal(false)}
      />
    </>
  );
}