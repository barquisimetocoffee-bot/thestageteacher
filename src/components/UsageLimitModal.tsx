import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Crown, Zap, ArrowRight } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

interface UsageLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade?: () => void;
}

export function UsageLimitModal({ isOpen, onClose, onUpgrade }: UsageLimitModalProps) {
  const { usage, createCheckout } = useSubscription();
  const [upgrading, setUpgrading] = useState(false);

  const handleUpgrade = async () => {
    try {
      setUpgrading(true);
      await createCheckout(); // Use default Pro plan price
      onUpgrade?.();
    } catch (error) {
      console.error('Error upgrading:', error);
    } finally {
      setUpgrading(false);
    }
  };

  const usagePercentage = usage ? (usage.used / usage.limit) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Monthly Limit Reached
          </DialogTitle>
          <DialogDescription>
            You've used all {usage?.limit || 50} of your free AI generations this month.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Usage Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>AI Generations Used</span>
              <span>{usage?.used || 0} / {usage?.limit || 50}</span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
          </div>

          {/* Upgrade Benefits */}
          <div className="space-y-4">
            <div className="text-center">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Upgrade to EasyTeach Pro</h3>
              <p className="text-sm text-muted-foreground">
                Get unlimited AI generations and exclusive features
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Unlimited AI Generations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Continue threads with Kribi Chatbot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Unlimited AI Slides generation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Early access to new features</span>
              </div>
            </div>

            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
              <div className="text-2xl font-bold text-primary">$89</div>
              <div className="text-sm text-muted-foreground">per year</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Maybe Later
            </Button>
            <Button 
              onClick={handleUpgrade} 
              disabled={upgrading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {upgrading ? (
                "Opening Checkout..."
              ) : (
                <>
                  Upgrade Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}