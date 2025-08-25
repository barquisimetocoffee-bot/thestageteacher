import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Wand2,
  Bot,
  History,
  BrainCircuit,
  Star,
  Heart,
  GraduationCap,
  BarChart3,
  Sparkles,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";

const AppSidebar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  // Check if user has Vicerta email address
  const isVicertaUser = user?.email?.includes("@vicerta") || false;

  const sidebarItems = [
    {
      name: t("easyteach.sidebar.wizardTools"),
      icon: Wand2,
      href: "/wizard-tools",
      description: t("easyteach.sidebar.wizardToolsDesc"),
      gradient: "from-primary to-secondary",
    },
    {
      name: t("easyteach.sidebar.kribiChatbot"),
      icon: Bot,
      href: "/ai-chatbot",
      description: t("easyteach.sidebar.kribiChatbotDesc"),
      gradient: "from-secondary to-accent",
    },
    {
      name: t("easyteach.sidebar.outputHistory"),
      icon: History,
      href: "/output-history",
      description: t("easyteach.sidebar.outputHistoryDesc"),
      gradient: "from-primary to-accent",
    },
    {
      name: t("easyteach.sidebar.toolsSuggestions"),
      icon: BrainCircuit,
      href: "/tools-suggestions",
      description: t("easyteach.sidebar.toolsSuggestionsDesc"),
      gradient: "from-accent to-secondary",
    },
    // Only show feedback dashboard for Vicerta users
    ...(isVicertaUser
      ? [
          {
            name: t("easyteach.sidebar.feedbackDashboard"),
            icon: BarChart3,
            href: "/feedback-dashboard",
            description: t("easyteach.sidebar.feedbackDashboardDesc"),
            gradient: "from-emerald-500 to-teal-500",
            isVicertaOnly: true,
          },
        ]
      : []),
  ];

  return (
    <Sidebar className="border-0 shadow-2xl bg-white/98 backdrop-blur-xl w-64">
      <SidebarHeader className="p-4 bg-gradient-to-br from-blue-500/10 via-green-500/10 to-purple-500/10 border-b border-blue-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2901b3] to-blue-500 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-blue-500/20">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-[#2901b3] to-blue-500 bg-clip-text text-transparent">
              Pencil
            </h2>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">
              by Vicerta • AI Assistant
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-background via-primary/2 to-secondary/3 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.03),transparent)] pointer-events-none" />

        <SidebarGroup className="px-3 py-8 relative z-10">
          <SidebarGroupLabel className="text-foreground/70 font-bold text-sm mb-6 flex items-center space-x-3 tracking-wide uppercase">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Star className="h-3 w-3 text-white" />
            </div>
            <span>Quick Access</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item, index) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild className="group">
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 px-2 py-8 rounded-lg bg-white backdrop-blur-sm hover:bg-white/30 hover:shadow-xl hover:scale-105 relative overflow-hidden transition-all duration-300"
                    >
                      <div
                        className={`p-3 rounded-xl icon-bg shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                      >
                        <item.icon className="size-4 text-white" />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <span className="text-xs font-bold text-gray-900 leading-tight mb-1 truncate">
                          {item.name}
                        </span>
                        <span className="text-xs text-gray-500 leading-tight line-clamp-2">
                          {item.description}
                        </span>
                        {(item as any).isVicertaOnly && (
                          <span className="inline-flex text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 rounded-full font-bold mt-2 shadow-sm self-start">
                            Vicerta Team
                          </span>
                        )}
                      </div>

                      {/* Hover arrow indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 border-r-2 border-t-2 border-primary rotate-45"></div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-3 py-6 relative z-10">
          <div className="bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 rounded-2xl p-5 border border-primary/20 backdrop-blur-sm relative overflow-hidden shadow-lg">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.1),transparent)] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg shadow-md">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-foreground text-sm tracking-wide">
                  {t("easyteach.sidebar.trustedByEducators")}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "{t("easyteach.sidebar.testimonial")}"
              </p>
              <div className="flex items-center mt-4 justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-amber-500 fill-current drop-shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  Sarah M.
                </span>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-5 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-primary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.05)_50%,transparent_75%)] pointer-events-none" />

        <div className="relative z-10 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-md">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-wide">
              {t("easyteach.sidebar.empoweringEducators")}
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs text-muted-foreground font-medium">
              Powered by
            </span>
            <div className="relative">
              <span className="text-sm font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-wider">
                VICERTA
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
