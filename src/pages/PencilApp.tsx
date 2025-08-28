
import { useTranslation } from "react-i18next";
import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import AppSidebar from "@/components/layout/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ToolsGrid from "@/components/sections/ToolsGrid";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import { useAuth } from "@/hooks/useAuth";
import LoadingSpinner from "@/components/common/LoadingSpinner";

import {
  useTranslatedTools,
  useTranslatedCategories,
} from "@/hooks/useTranslatedTools";

// Lazy load heavy components
const AIAssistant = lazy(() => import("@/components/AIAssistant"));
const PencilHeader = lazy(() => import("@/components/pencil/PencilHeader"));
const PencilSearchSection = lazy(() => import("@/components/pencil/PencilSearchSection"));

const PencilApp = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const translatedTools = useTranslatedTools();
  const translatedCategories = useTranslatedCategories();

  const categories = [
    {
      name: t("categories.all"),
      icon: "Grid",
      color: "bg-gray-100 text-gray-800",
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: t("categories.lessonPlanning"),
      icon: "BookOpen",
      color: "bg-blue-100 text-blue-800",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: t("categories.contentHub"),
      icon: "FileText",
      color: "bg-green-100 text-green-800",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: t("categories.assessment"),
      icon: "CheckCircle",
      color: "bg-purple-100 text-purple-800",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      name: t("categories.communication") + " & " + t("categories.classroomManagement"),
      icon: "MessageCircle",
      color: "bg-orange-100 text-orange-800",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  // Map translated categories back to English for tool filtering
  const categoryMapping = {
    [t("categories.all")]: "All",
    [t("categories.lessonPlanning")]: "Lesson Planning",
    [t("categories.contentHub")]: "Content Hub",
    [t("categories.assessment")]: "Assessment",
    [t("categories.communication") + " & " + t("categories.classroomManagement")]: "Communication",
  };

  const filteredTools = translatedTools.filter((tool) => {
    const matchesSearch =
      tool.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryMapping[selectedCategory] === "All" ||
      tool.category === categoryMapping[selectedCategory] ||
      (categoryMapping[selectedCategory] === "Communication" &&
        (tool.category === "Communication" || tool.category === "Classroom Management"));
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleQuickAction = (category, toolId) => {
    setSelectedCategory(category);
    const tool = translatedTools.find((tool) => tool.id === toolId);
    if (tool) {
      setSelectedTool(tool);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-72 lg:hidden">
            <AppSidebar />
          </SheetContent>
        </Sheet>

        <div className="flex-1 bg-gradient-to-br from-background via-primary/5 to-secondary/10 min-h-screen">
          {/* Mobile Header */}
          <Suspense fallback={<div className="h-16 lg:hidden" />}>
            <PencilHeader onMenuToggle={() => setSidebarOpen(true)} />
          </Suspense>

          {/* Desktop Header */}
          <div className="hidden lg:block">
            <AppHeader teacherProfile={teacherProfile} />
          </div>

          <div className="container-responsive section-responsive">
            <div className="mb-6">
              <WelcomeSection
                teacherProfile={teacherProfile}
                onQuickAction={handleQuickAction}
              />
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="tools" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-blue-50 border border-gray-300 mb-6 sm:mb-8 h-14">
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-[#2901b3] data-[state=active]:text-white text-sm sm:text-base"
                >
                  {t("easyteach.tabs.teachingTools")}
                </TabsTrigger>
                <TabsTrigger
                  value="ai-assistant"
                  className="data-[state=active]:bg-[#2901b3] data-[state=active]:text-white text-sm sm:text-base"
                >
                  <Bot className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {t("easyteach.tabs.kribiAssistant")}
                  </span>
                  <span className="sm:hidden">{t("easyteach.tabs.ai")}</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tools" className="space-y-6 sm:space-y-8">
                <Suspense fallback={<LoadingSpinner />}>
                  <PencilSearchSection
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                </Suspense>

                <ToolsGrid
                  tools={filteredTools}
                  categories={categories}
                  onToolClick={handleToolClick}
                  searchTerm={searchTerm}
                />
              </TabsContent>

              <TabsContent value="ai-assistant">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/20 shadow-lg">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="subheading-responsive bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                        {t("easyteach.aiAssistant.title")}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {t("easyteach.aiAssistant.description")}
                    </p>
                  </div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAssistant
                      tools={translatedTools}
                      onToolRecommend={handleToolClick}
                    />
                  </Suspense>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Modals */}
          {showProfile && (
            <TeacherProfile
              isOpen={showProfile}
              onClose={() => setShowProfile(false)}
              onSave={handleSaveProfile}
              currentProfile={teacherProfile}
            />
          )}

          {selectedTool && (
            <ToolModal
              tool={selectedTool}
              isOpen={!!selectedTool}
              onClose={() => setSelectedTool(null)}
              teacherProfile={teacherProfile}
            />
          )}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PencilApp;
