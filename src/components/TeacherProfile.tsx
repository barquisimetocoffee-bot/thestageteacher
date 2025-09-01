import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ProfilePictureUpload from "./ProfilePictureUpload";
import MultiSelectGradeLevels from "./MultiSelectGradeLevels";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const TeacherProfile = ({ isOpen, onClose, onSave, currentProfile }) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: currentProfile?.name || "",
    school: currentProfile?.school || "",
    grade: currentProfile?.grade || "",
    gradeLevels: currentProfile?.gradeLevels || [],
    subjects: currentProfile?.subjects || "",
    experience: currentProfile?.experience || "",
    tone: currentProfile?.tone || "friendly",
    specialNeeds: currentProfile?.specialNeeds || "",
    goals: currentProfile?.goals || "",
    avatarUrl: currentProfile?.avatarUrl || "",
  });

  // Load profile from database on mount
  useEffect(() => {
    const loadDatabaseProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (data && !error) {
          setProfile(prev => ({
            ...prev,
            name: data.name || prev.name,
            avatarUrl: data.avatar_url || prev.avatarUrl,
            gradeLevels: data.grade_levels || prev.gradeLevels,
          }));
        }
      }
    };
    
    if (isOpen) {
      loadDatabaseProfile();
    }
  }, [user, isOpen]);

  const handleSave = async () => {
    if (!profile.name || profile.gradeLevels.length === 0) {
      toast({
        title: "Please fill in required fields",
        description: "Name and at least one grade level are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Save to Supabase database
      if (user) {
        const { error } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            name: profile.name,
            email: user.email,
            avatar_url: profile.avatarUrl,
            grade_levels: profile.gradeLevels,
            updated_at: new Date().toISOString()
          });

        if (error) {
          console.error('Database save error:', error);
          toast({
            title: "Save failed",
            description: "Failed to save profile to database. Changes saved locally.",
            variant: "destructive",
          });
        }
      }

      // Save to localStorage (for backward compatibility)
      onSave(profile);
      
      toast({
        title: "Profile saved! 🎉",
        description: "Your tools will now be personalized for your classroom.",
      });
      onClose();
    } catch (error) {
      console.error('Unexpected error saving profile:', error);
      toast({
        title: "Save failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-600">
            Let's Personalize Your Experience! ✨
          </DialogTitle>
          <p className="text-center text-gray-600 mt-2">
            Tell us about yourself so we can create content that fits your
            classroom perfectly.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Profile Picture Section */}
          <div className="flex justify-center pb-4 border-b">
            <ProfilePictureUpload
              currentAvatarUrl={profile.avatarUrl}
              onAvatarUpdate={(url) => setProfile({ ...profile, avatarUrl: url })}
              size="lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Your Name *
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                placeholder="Ms. Johnson"
                className="mt-1 focus:outline-none py-5"
              />
            </div>

            <div>
              <Label htmlFor="school" className="text-sm font-medium">
                School Name
              </Label>
              <Input
                id="school"
                value={profile.school}
                onChange={(e) =>
                  setProfile({ ...profile, school: e.target.value })
                }
                placeholder="Sunshine Elementary"
                className="mt-1 focus:outline-none py-5"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="gradeLevels" className="text-sm font-medium">
                Grade Levels *
              </Label>
              <MultiSelectGradeLevels
                selectedGrades={profile.gradeLevels}
                onGradesChange={(grades) => setProfile({ ...profile, gradeLevels: grades })}
                required={true}
              />
              <p className="text-xs text-gray-500 mt-1">
                Select all grade levels you teach or work with.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="subjects" className="text-sm font-medium">
                Main Subjects
              </Label>
              <Input
                id="subjects"
                value={profile.subjects}
                onChange={(e) =>
                  setProfile({ ...profile, subjects: e.target.value })
                }
                placeholder="Math, Science, Reading"
                className="mt-1 focus:outline-none py-5"
              />
            </div>

            <div>
              <Label htmlFor="experience" className="text-sm font-medium">
                Years Teaching
              </Label>
              <Select
                value={profile.experience}
                onValueChange={(value) =>
                  setProfile({ ...profile, experience: value })
                }
              >
                <SelectTrigger className="mt-1 focus:outline-none py-5">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-year">First Year</SelectItem>
                  <SelectItem value="1-3">1-3 Years</SelectItem>
                  <SelectItem value="4-10">4-10 Years</SelectItem>
                  <SelectItem value="11-20">11-20 Years</SelectItem>
                  <SelectItem value="20+">20+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="tone" className="text-sm font-medium">
                Preferred Communication Style
              </Label>
              <Select
                value={profile.tone}
                onValueChange={(value) =>
                  setProfile({ ...profile, tone: value })
                }
              >
                <SelectTrigger className="mt-1 focus:outline-none py-5">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly & Warm</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual & Fun</SelectItem>
                  <SelectItem value="direct">Direct & Clear</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="specialNeeds" className="text-sm font-medium">
              Special Populations (Optional)
            </Label>
            <Input
              id="specialNeeds"
              value={profile.specialNeeds}
              onChange={(e) =>
                setProfile({ ...profile, specialNeeds: e.target.value })
              }
              placeholder="ELL students, Special Ed, Gifted, etc."
              className="mt-1 focus:outline-none py-5"
            />
            <p className="text-xs text-gray-500 mt-1">
              This helps us suggest appropriate accommodations and strategies.
            </p>
          </div>

          <div>
            <Label htmlFor="goals" className="text-sm font-medium">
              What's your biggest teaching goal this year?
            </Label>
            <Textarea
              id="goals"
              value={profile.goals}
              onChange={(e) =>
                setProfile({ ...profile, goals: e.target.value })
              }
              placeholder="e.g., Help struggling readers catch up, make math more engaging, improve parent communication..."
              className="mt-1 focus:outline-none"
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={onClose}
            className="hover:bg-gray-100 hover:text-black"
          >
            Skip for Now
          </Button>
          <Button onClick={handleSave} className="my-btn">
            Save My Profile 🎯
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherProfile;