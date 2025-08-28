import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, Edit3, ArrowLeft } from "lucide-react";
import { SubscriptionStatus } from "@/components/SubscriptionStatus";
import TeacherProfile from "@/components/TeacherProfile";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [teacherProfile, setTeacherProfile] = useState(null);

  // Load profile data on mount
  useEffect(() => {
    const loadProfile = () => {
      if (user) {
        const savedProfile = localStorage.getItem(`teacher_profile_${user.id}`);
        if (savedProfile) {
          setTeacherProfile(JSON.parse(savedProfile));
        }
      }
    };
    loadProfile();
  }, [user]);

  // Save profile data when it changes
  const handleSaveProfile = (profileData: any) => {
    if (user) {
      localStorage.setItem(`teacher_profile_${user.id}`, JSON.stringify(profileData));
      setTeacherProfile(profileData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Profile Settings
                </h1>
                <p className="text-muted-foreground">
                  Manage your account and personalization settings
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("/pencil-app")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Pencil</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>Profile Information</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowEditProfile(true)}
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {teacherProfile ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <p className="text-base font-medium">{teacherProfile.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">School</label>
                      <p className="text-base">{teacherProfile.school || "Not specified"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Grade Level</label>
                      <p className="text-base">{teacherProfile.grade}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Subjects</label>
                      <p className="text-base">{teacherProfile.subjects || "Not specified"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Experience</label>
                      <p className="text-base">{teacherProfile.experience || "Not specified"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Communication Style</label>
                      <p className="text-base capitalize">{teacherProfile.tone}</p>
                    </div>
                    {teacherProfile.specialNeeds && (
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground">Special Populations</label>
                        <p className="text-base">{teacherProfile.specialNeeds}</p>
                      </div>
                    )}
                    {teacherProfile.goals && (
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground">Teaching Goals</label>
                        <p className="text-base">{teacherProfile.goals}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Complete Your Profile</h3>
                    <p className="text-muted-foreground mb-4">
                      Help us personalize your experience by completing your teacher profile.
                    </p>
                    <Button 
                      onClick={() => setShowEditProfile(true)}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Set Up Profile
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Subscription Status */}
          <div className="lg:col-span-1">
            <SubscriptionStatus />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <TeacherProfile
          isOpen={showEditProfile}
          onClose={() => setShowEditProfile(false)}
          onSave={handleSaveProfile}
          currentProfile={teacherProfile}
        />
      )}
    </div>
  );
};

export default Profile;