import { Button } from "@/components/ui/button";
import {
  BookOpen,
  MessageCircle,
  Users,
  Quote,
  Star,
  Heart,
  Zap,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface WelcomeSectionProps {
  teacherProfile: any;
  onQuickAction?: (category: string, toolId: number) => void;
}

const WelcomeSection = ({
  teacherProfile,
  onQuickAction,
}: WelcomeSectionProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  const educationalQuotes = t("easyteach.quotes", {
    returnObjects: true,
  }) as Array<{ text: string; author: string }>;

  // Get actual tools from toolsData, selecting popular ones from each category
  const favoriteTools = [
    {
      name: "Lesson Plan Generator",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      category: "Lesson Planning",
      toolId: 1,
    },
    {
      name: "General Assessment",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      category: "Assessment",
      toolId: 10,
    },
    {
      name: "Parent Email Composer",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      category: "Communication",
      toolId: 18,
    },
    {
      name: "Quiz Creator",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      category: "Assessment",
      toolId: 15,
    },
  ];

  useEffect(() => {
    const randomQuote =
      educationalQuotes[Math.floor(Math.random() * educationalQuotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  return (
    <div className="mb-6">
      {/* Cogitatio - Enhanced with animations and gradients */}
      <div className="bg-gradient-to-br from-blue-50  to-blue-100 backdrop-blur-sm rounded-xl p-6 border border-blue-200 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-full icon-bg shadow-md">
            <Quote className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
            {t("easyteach.welcome.cogitatio")}
          </h2>
          <div className="flex space-x-1 ml-auto">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30 rounded-lg animate-fade-in"></div>
          <blockquote className="text-base text-gray-800 font-medium italic mb-3 leading-relaxed relative z-10">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-sm text-blue-600 font-semibold relative z-10">
            — {currentQuote.author}
          </cite>
        </div>
      </div>

      {/* Your Favorite Tools - More Compact with better spacing */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-4 border border-gray-200">
        <div className="flex items-center space-x-2 mb-3">
          <Heart className="h-4 w-4 text-red-500" />
          <h2 className="text-base font-semibold text-gray-800">
            {t("easyteach.welcome.favoriteTools")}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {favoriteTools.map((tool, index) => (
            <Button
              key={index}
              onClick={() => onQuickAction?.(tool.category, tool.toolId)}
              className={`w-full md:w-[200px] my-btn py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs font-medium cursor-pointer`}
            >
              <tool.icon className="mr-1 h-3 w-3" />
              {tool.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
