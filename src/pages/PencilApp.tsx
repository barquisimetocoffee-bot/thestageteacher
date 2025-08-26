import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Bot, Menu } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppSidebar from "@/components/layout/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CategoryFilters from "@/components/sections/CategoryFilters";
import ToolsGrid from "@/components/sections/ToolsGrid";
import TeacherProfile from "@/components/TeacherProfile";
import ToolModal from "@/components/ToolModal";
import AIAssistant from "@/components/AIAssistant";

import GradeSystemSelector from "@/components/GradeSystemSelector";
import LanguageSelector from "@/components/LanguageSelector";

import {
  useTranslatedTools,
  useTranslatedCategories,
} from "@/hooks/useTranslatedTools";

import { tools } from "@/lib/toolsData";

const PencilApp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));
  const [showProfile, setShowProfile] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      name:
        t("categories.communication") +
        " & " +
        t("categories.classroomManagement"),
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
    [t("categories.communication") +
    " & " +
    t("categories.classroomManagement")]: "Communication",
  };

  const filteredTools = translatedTools.filter((tool) => {
    const matchesSearch =
      tool.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryMapping[selectedCategory] === "All" ||
      tool.category === categoryMapping[selectedCategory] ||
      (categoryMapping[selectedCategory] === "Communication" &&
        (tool.category === "Communication" ||
          tool.category === "Classroom Management"));
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleQuickAction = (category, toolId) => {
    setSelectedCategory(category);
    // Find the specific tool by ID
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
          {/* Mobile Header with Menu Button */}
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-primary/20 p-4 flex items-center justify-between shadow-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden hover:bg-primary/10 text-primary"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Pencil
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  by Vicerta
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/profile')}
              className="p-2 hover:bg-primary/10 text-primary"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block">
            <AppHeader
              teacherProfile={teacherProfile}
              onProfileClick={() => navigate('/profile')}
            />
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
                {/* Enhanced Search Section */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-primary/20 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {t("easyteach.search.findPerfectTool")}
                    </h3>
                  </div>

                  {/* Search Bar */}
                  <div className="relative mb-4 sm:mb-6">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
                    <Input
                      type="text"
                      placeholder={t("easyteach.search.searchPlaceholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 sm:pl-12 h-12 sm:py-4 text-sm sm:text-base border-2 border-primary/20 focus:border-primary focus:outline-none rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-300"
                    />
                  </div>

                  {/* Category Filters */}
                  <CategoryFilters
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                </div>

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
                  <AIAssistant
                    tools={translatedTools}
                    onToolRecommend={handleToolClick}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Modals */}
          {showProfile && (
            <TeacherProfile
              isOpen={showProfile}
              onClose={() => setShowProfile(false)}
              onSave={setTeacherProfile}
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
