import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Crown, Zap, ArrowRight } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";
import LoginModal from "@/components/auth/LoginModal";

interface UsageLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade?: () => void;
}

export function UsageLimitModal({
  isOpen,
  onClose,
  onUpgrade,
}: UsageLimitModalProps) {
  const { usage, createCheckout } = useSubscription();
  const { user, session } = useAuth();
  const [upgrading, setUpgrading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [shouldUpgradeAfterLogin, setShouldUpgradeAfterLogin] = useState(false);

  // Watch for authentication success and proceed with upgrade
  useEffect(() => {
    if (user && session && shouldUpgradeAfterLogin && !showLogin) {
      setShouldUpgradeAfterLogin(false);
      handleUpgradeAfterAuth();
    }
  }, [user, session, shouldUpgradeAfterLogin, showLogin]);

  const handleUpgradeAfterAuth = async () => {
    try {
      setUpgrading(true);
      await createCheckout();
      onUpgrade?.();
      onClose();
    } catch (error) {
      console.error("Error upgrading after login:", error);
    } finally {
      setUpgrading(false);
    }
  };

  const handleUpgrade = async () => {
    // Check if user is authenticated first
    if (!user || !session) {
      setShouldUpgradeAfterLogin(true);
      setShowLogin(true);
      return;
    }

    try {
      setUpgrading(true);
      await createCheckout(); // Use default Pro plan price
      onUpgrade?.();
      onClose(); // Close the modal after successful checkout initiation
    } catch (error) {
      console.error("Error upgrading:", error);
    } finally {
      setUpgrading(false);
    }
  };

  const usagePercentage = usage ? (usage.used / usage.limit) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-w-md mx-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="flex items-center justify-center gap-2 text-xl">
            <Zap className="h-6 w-6 text-yellow-500" />
            Daily Credits Used
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            You've used all your daily credits! Upgrade to Pro for unlimited access and continue creating amazing content.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Usage Progress */}
          <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
            <div className="flex justify-between text-sm font-medium">
              <span>Daily AI Credits Used</span>
              <span className="text-destructive">
                {usage?.used || 0} / {usage?.limit || 50}
              </span>
            </div>
            <Progress value={usagePercentage} className="h-3" />
            <p className="text-xs text-muted-foreground text-center">
              Credits reset every 24 hours • Upgrade for unlimited access
            </p>
          </div>

          {/* Upgrade Benefits */}
          <div className="space-y-4">
            <div className="text-center">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">
                Upgrade to Pencil Pro
              </h3>
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

            <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <div className="text-3xl font-bold text-primary">$89</div>
              <div className="text-sm text-muted-foreground">per year • Just $7.40/month</div>
              <div className="text-xs text-green-600 font-medium mt-1">✨ Best Value</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={handleUpgrade}
              disabled={upgrading}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold"
            >
              {upgrading ? (
                "Opening Checkout..."
              ) : (
                <>
                  {user ? "Upgrade to Pro Now" : "Sign Up & Upgrade to Pro"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
            <Button variant="ghost" onClick={onClose} className="w-full text-muted-foreground">
              I'll wait for credits to reset
            </Button>
          </div>
        </div>
      </DialogContent>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => {
          setShowLogin(false);
          setShouldUpgradeAfterLogin(false);
        }}
      />
    </Dialog>
  );
}
