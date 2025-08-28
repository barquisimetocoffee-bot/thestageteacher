
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import CategoryFilters from "@/components/sections/CategoryFilters";

interface PencilSearchSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categories: any[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const PencilSearchSection = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
}: PencilSearchSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-primary/20 shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
          <Search className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t("easyteach.search.findPerfectTool")}
        </h3>
      </div>

      <div className="relative mb-4 sm:mb-6">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
        <Input
          type="text"
          placeholder={t("easyteach.search.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 sm:pl-12 h-12 sm:py-4 text-sm sm:text-base border-2 border-primary/20 focus:border-primary focus:outline-none rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-300"
        />
      </div>

      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
    </div>
  );
};

export default PencilSearchSection;
