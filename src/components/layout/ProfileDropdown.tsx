import { User, LogOut, Settings, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProfileDropdownProps {
  teacherProfile: any;
}

const ProfileDropdown = ({ teacherProfile }: ProfileDropdownProps) => {
  const { user, signOut } = useAuth();
  const { subscription, usage } = useSubscription();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const getUserName = () => {
    if (teacherProfile?.name) return teacherProfile.name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.email) return user.email.split("@")[0];
    return "Teacher";
  };

  const isPro = subscription?.subscription_tier === 'pro';
  const usedCredits = usage?.used || 0;
  const totalCredits = isPro ? 'Unlimited' : (usage?.limit || 10);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center bg-blue-50 hover:bg-blue-100 hover:text-black capitalize transition-all duration-200 text-xs text-gray-800 font-medium"
        >
          <User className="h-4 w-4" />
          <span className="max-w-20 truncate">
            {getUserName()}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4">
          {/* User Info */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {getUserName()}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  {isPro ? 'Pro Plan' : 'Free Plan'}
                </span>
              </div>
              {isPro && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                  PRO
                </span>
              )}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">AI Credits</span>
                <span className="font-medium">
                  {isPro ? 'Unlimited' : `${usedCredits}/${totalCredits}`}
                </span>
              </div>
              {!isPro && (
                <div className="w-full bg-background rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                    style={{ width: `${(usedCredits / (totalCredits as number)) * 100}%` }}
                  />
                </div>
              )}
            </div>
          </div>

          <Separator className="mb-2" />

          {/* Actions */}
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-left"
              onClick={handleProfileClick}
            >
              <Settings className="h-4 w-4 mr-3" />
              Profile Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-left text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropdown;