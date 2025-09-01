import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Clock, User, Sparkles, Zap, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import LanguageSelector from "../LanguageSelector";
import ProfileDropdown from "./ProfileDropdown";
import HelpButton from "../common/HelpButton";

interface AppHeaderProps {
  teacherProfile: any;
  onStartWalkthrough: () => void;
}

const AppHeader = ({ teacherProfile, onStartWalkthrough }: AppHeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [profileAvatarUrl, setProfileAvatarUrl] = useState<string>('');

  // Load profile picture from database
  useEffect(() => {
    const loadProfilePicture = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('avatar_url')
          .eq('id', user.id)
          .single();

        if (data && !error && data.avatar_url) {
          setProfileAvatarUrl(data.avatar_url);
        }
      }
    };

    loadProfilePicture();
  }, [user]);

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
            
            <Avatar className="w-10 h-10 ring-2 ring-primary/20">
              <AvatarImage src={profileAvatarUrl || teacherProfile?.avatarUrl} alt="Profile picture" />
              <AvatarFallback className="bg-gradient-to-r from-primary/20 to-secondary/20">
                {getUserName().charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
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
              <HelpButton onStartWalkthrough={onStartWalkthrough} />
              <ProfileDropdown teacherProfile={teacherProfile} profileAvatarUrl={profileAvatarUrl} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
