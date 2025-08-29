import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Clock, User, Sparkles, Zap, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import ProfileDropdown from "./ProfileDropdown";
import HelpButton from "../common/HelpButton";
import { useOnboarding } from "@/hooks/useOnboarding";

interface AppHeaderProps {
  teacherProfile: any;
}

const AppHeader = ({ teacherProfile }: AppHeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { resetOnboarding } = useOnboarding();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getUserName = () => {
    if (teacherProfile?.name) return teacherProfile.name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.email) return user.email.split("@")[0];
    return "Teacher";
  };

  return (
    <header className="bg-white/98 backdrop-blur-sm border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="hover:bg-primary/10 hover:text-primary rounded-lg p-2 transition-all duration-200 hover:shadow-sm border border-transparent hover:border-primary/20" />
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center shadow-lg">
              <img src="/avatar.png" className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-xl/relaxed font-semibold text-gray-800 mb- capitalize">
                {t("easyteach.welcome.welcomeBack", { name: getUserName() })}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary">
                {t("easyteach.header.saveHours", { hours: "10" })}
              </span>
              <Zap className="h-4 w-4 text-accent" />
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <HelpButton onStartWalkthrough={resetOnboarding} />
              <ProfileDropdown teacherProfile={teacherProfile} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
