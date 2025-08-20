import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import {
  BookOpen,
  GraduationCap,
  Building2,
  Heart,
  TrendingUp,
  Award,
  Target,
  UserCheck,
  FileBarChart,
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  HelpCircle,
  Zap,
  Shield,
  Mail,
} from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onShowLogin: () => void;
}

const MobileNavigation = ({
  isOpen,
  onClose,
  onShowLogin,
}: MobileNavigationProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const products = [
    {
      id: "pencil",
      name: "Pencil",
      path: "/pencil",
    },
    {
      id: "lms",
      name: "Advanced AI LMS",
      path: "/advanced-lms",
    },
    {
      id: "admin",
      name: "School Administration",
      path: "/school-administration",
    },
  ];

  const solutionsByCategory = [
    {
      title: "Primary Schools",
      path: "/solutions/primary-schools",
    },
    {
      title: "Secondary Schools",
      path: "/solutions/secondary-schools",
    },
    { title: "Universities", path: "/solutions/universities" },
    {
      title: "Independent Schools",
      path: "/solutions/independent-schools",
    },
  ];

  const solutionsByDepartment = [
    { title: "Admissions", path: "/solutions/admissions" },

    {
      title: "General Report",
      path: "/solutions/reporting",
    },
    { title: "HR & Payroll", path: "/solutions/hr-payroll" },
    { title: "Finance", path: "/solutions/finance" },
    {
      title: "Communication",
      path: "/solutions/communication",
    },
  ];

  const resources = [
    { title: "Case Studies", path: "/case-studies" },
    { title: "Blog", path: "/blog" },
    { title: "Knowledge Base", path: "/knowledge-base" },
  ];

  const about = [
    {
      title: "Partners & Integrations",
      path: "/partners-integrations",
    },
    { title: "Data Protection & GDPR", path: "/data-protection" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  if (!isOpen) return null;

  const handlePricing = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // wait a bit for navigation to finish

    onClose();
  };

  return (
    <div className="fixed left-0 top-0 w-full lg:hidden">
      {/* Backdrop */}
      {/* <div className="fixed inset-0 bg-black/50" onClick={onClose} /> */}

      {/* Menu Panel */}
      <div className="w-full h-screen bg-background shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Products */}
            <div>
              <button
                onClick={() => toggleSection("products")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.products")}

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "products" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedSection === "products" && (
                <div className="ml-4 mt-2 space-y-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleNavigate(product.path)}
                      className="py-3 flex items-center  w-full px-4 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-blue-100 rounded-lg"
                    >
                      <span>{product.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleSection("solutions")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.solutions")}

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "solutions" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedSection === "solutions" && (
                <div className="ml-4 mt-2 space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {t("navigation.byCategory")}
                    </h4>
                    <div className="space-y-1">
                      {solutionsByCategory.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate(solution.path)}
                          className="flex items-center  w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
                        >
                          <span>{solution.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {t("navigation.byDepartment")}
                    </h4>
                    <div className="space-y-1">
                      {solutionsByDepartment.map((solution, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate(solution.path)}
                          className="flex items-center  w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
                        >
                          <span>{solution.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <button
              className="flex items-center  w-full px-4 py-3 text-left text-base font-semibold text-gray-800 hover:text-foreground hover:bg-accent/10 rounded-lg"
              onClick={handlePricing}
            >
              <span>Pricing</span>
            </button>

            {/* Resources */}
            <div>
              <button
                onClick={() => toggleSection("resources")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.resources")}

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "resources" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedSection === "resources" && (
                <div className="ml-4 mt-2 space-y-2">
                  {resources.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(item.path)}
                      className="flex items-center  w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
                    >
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <div>
              <button
                onClick={() => toggleSection("about")}
                className="flex items-center justify-between w-full p-3 text-left font-medium text-foreground hover:bg-accent/10 rounded-lg"
              >
                {t("navigation.aboutUs")}

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    expandedSection === "about" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedSection === "about" && (
                <div className="ml-4 mt-2 space-y-2">
                  {about.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate(item.path)}
                      className="flex items-center  w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg"
                    >
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-border space-y-2">
            <Button
              onClick={() => handleNavigate("/contact-us")}
              variant="outline"
              className="w-full p-6"
            >
              {t("navigation.contact")}
            </Button>
            <Button
              onClick={() => {
                onShowLogin();
                onClose();
              }}
              className="w-full my-btn p-6"
            >
              {t("navigation.login")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
