import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Wand2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ToolsGridProps {
  tools: any[];
  categories: any[];
  onToolClick: (tool: any) => void;
  searchTerm: string;
}

const ToolsGrid = ({
  tools,
  categories,
  onToolClick,
  searchTerm,
}: ToolsGridProps) => {
  const { t } = useTranslation();

  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">
          {t("easyteach.search.noToolsFound", { searchTerm })}
        </h3>
        <p className="text-lg text-gray-500">
          {t("easyteach.search.tryDifferentSearch")}
        </p>
      </div>
    );
  }

  const handleToolClick = (tool: any, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Tool clicked:", tool.name, tool.id);
    onToolClick(tool);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
      {tools.map((tool) => {
        const IconComponent = tool.icon;
        const categoryInfo = categories.find(
          (cat) => cat.name === tool.category
        );

        return (
          <Card
            key={tool.id}
            className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/95 backdrop-blur-md border border-primary/20 hover:border-primary/40 rounded-2xl"
            onClick={(e) => handleToolClick(tool, e)}
          >
            <CardHeader className="pb-4 relative">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-2xl icon-bg group-hover:scale-110 transition-transform duration-200 shadow-md`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 ">
                      {tool.name}
                    </CardTitle>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{tool.timesSaved}</span>
                </div>

                {/* {tool.timesSaved && (
                  <div className="flex items-center space-x-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium">{tool.timesSaved}</span>
                  </div>
                )} */}
              </div>

              <div className="flex items-center justify-between mt-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary border-primary/20 font-medium"
                >
                  {tool.category}
                </Badge>

                {tool.estimatedTime && (
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                    ✓{" "}
                    {t("easyteach.tools.readyIn", { time: tool.estimatedTime })}
                  </span>
                )}
              </div>
            </CardHeader>

            <CardContent className="relative pt-0">
              <CardDescription className="text-muted-foreground leading-relaxed text-sm mb-2 line-clamp-3 min-h-[4.5rem]">
                {tool.description}
              </CardDescription>

              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                  ✓ {t("easyteach.tools.readyIn", { time: tool.estimatedTime })}
                </span>
                <button
                  className="rounded-full bg-blue-100 hover:bg-blue-200 text-sm text-[#2901b3] py-1 px-3"
                  onClick={(e) => handleToolClick(tool, e)}
                >
                  {t("easyteach.tools.useToolButton")}
                </button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
