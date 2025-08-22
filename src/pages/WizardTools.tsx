import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ToolModal from "@/components/ToolModal";
import { useTranslatedTools } from "@/hooks/useTranslatedTools";

const WizardTools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const translatedTools = useTranslatedTools();

  const filteredTools = translatedTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/pencil-app">
              <Button
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-100 hover:text-black"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Wizard Tools</h1>
              <p className="text-gray-600">All AI-powered tools in one place</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search all tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 border-2 border-blue-100 focus:border-blue-300 rounded-xl"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon;

            return (
              <div
                key={tool.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 bg-white border border-gray-200 p-4 rounded-2xl"
                onClick={() => handleToolClick(tool)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 rounded-2xl icon-bg text-white group-hover:scale-110 transition-transform duration-200 shadow-md`}
                    >
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-gray-900">
                        {tool.name}
                      </h1>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 font-medium"
                      >
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-amber-600">
                    <Clock className="h-4 w-4" />
                    <span>{tool.timesSaved}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      ✓ Ready in {tool.estimatedTime}
                    </span>
                    <Button
                      size="sm"
                      className="rounded-full hover:bg-blue-700 bg-[#2901b3]"
                    >
                      Try it →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tools found for "{searchTerm}"
            </h3>
            <p className="text-gray-500">Try a different search term.</p>
          </div>
        )}
      </div>

      {/* Tool Modal */}
      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          teacherProfile={null}
        />
      )}
    </div>
  );
};

export default WizardTools;
