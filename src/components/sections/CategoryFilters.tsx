import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
  Grid,
} from "lucide-react";

interface CategoryFiltersProps {
  categories: any[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const iconMap = {
  Grid,
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
};

const CategoryFilters = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) => {
  const activeCategory = categories.find((c) => c.name === selectedCategory);
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3" data-onboarding="categories">
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon];
        const isSelected = selectedCategory === category.name;
        return (
          <button
            key={category.name}

            onClick={() => onCategorySelect(category.name)}
            className={`flex items-center space-x-1 sm:space-x-2 rounded-2xl px-3 sm:px-6 py-2 sm:py-3 transition-all duration-200 text-xs sm:text-sm font-medium ${category.name === selectedCategory ? "my-btn" : "bg-blue-50"

              }`}
          >
            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
