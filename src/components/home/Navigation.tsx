import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import MobileNavigation from "./MobileNavigation";
import { RiMenuLine } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Building2,
  Sparkles,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Award,
  Target,
  FileText,
  HelpCircle,
  Shield,
  Mail,
  UserCheck,
  FileBarChart,
  DollarSign,
  MessageSquare,
  School,
  HamIcon,
} from "lucide-react";

interface NavigationProps {
  onShowLogin: () => void;
}

const Navigation = ({ onShowLogin }: NavigationProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      id: "pencil",
      name: "Pencil",
      description: "AI-powered teaching tools",
      icon: BookOpen,
      status: "available",
      color: "from-blue-500 to-blue-600",
      onClick: () => navigate("/pencil"),
    },
    {
      id: "lms",
      name: "Advanced AI LMS",
      description: "Next-generation learning management",
      icon: GraduationCap,
      status: "coming-soon",
      color: "from-purple-500 to-purple-600",
      onClick: () => navigate("/advanced-lms"),
    },
    {
      id: "admin",
      name: "School Administration",
      description: "Comprehensive school management",
      icon: Building2,
      status: "coming-soon",
      color: "from-green-500 to-green-600",
      onClick: () => navigate("/school-administration"),
    },
  ];

  const solutionsByCategory = [
    {
      title: "Primary Schools",
      icon: Heart,
      desc: "Engage young learners with simple, intuitive tools",
      color: "from-pink-500 to-rose-500",
      onClick: () => navigate("/solutions/primary-schools"),
    },
    {
      title: "Secondary Schools",
      icon: TrendingUp,
      desc: "Empower educators, engage students, and simplify operations",
      color: "from-blue-500 to-cyan-500",
      onClick: () => navigate("/solutions/secondary-schools"),
    },
    {
      title: "Universities",
      icon: Award,
      desc: "Streamline academic workflows and enhance student experience",
      color: "from-purple-500 to-indigo-500",
      onClick: () => navigate("/solutions/universities"),
    },
    {
      title: "Independent Schools",
      icon: Target,
      desc: "Flexible, tailored solutions for unique learning models",
      color: "from-green-500 to-emerald-500",
      onClick: () => navigate("/solutions/independent-schools"),
    },
  ];

  const solutionsByDepartment = [
    {
      title: "Admissions",
      icon: UserCheck,
      desc: "Attract, manage, and enroll students with zero hassle",
      color: "from-blue-500 to-cyan-500",
      onClick: () => navigate("/solutions/admissions"),
    },
    {
      title: "General Report",
      icon: FileBarChart,
      desc: "Real-time insights for smarter decision-making",
      color: "from-purple-500 to-indigo-500",
      onClick: () => navigate("/solutions/general-reports"),
    },
    {
      title: "HR & Payroll",
      icon: Users,
      desc: "Effortless staff management, from hiring to payroll",
      color: "from-green-500 to-emerald-500",
      onClick: () => navigate("/solutions/hr-payroll"),
    },
    {
      title: "Finance",
      icon: DollarSign,
      desc: "Stay on top of budgets, fees, and payments in real time",
      color: "from-yellow-500 to-orange-500",
      onClick: () => navigate("/solutions/finance"),
    },
    {
      title: "Communication",
      icon: MessageSquare,
      desc: "Keep everyone connected in one hub",
      color: "from-pink-500 to-rose-500",
      onClick: () => navigate("/solutions/communication"),
    },
  ];

  const resourcesMenu = [
    {
      title: "Case Studies",
      icon: FileText,
      onClick: () => navigate("/case-studies"),
    },
    {
      title: "Blog",
      icon: BookOpen,
      onClick: () => navigate("/blog"),
    },
    {
      title: "Knowledge Base",
      icon: HelpCircle,
      onClick: () => navigate("/knowledge-base"),
    },
  ];

  const aboutMenu = [
    {
      title: "Partners & Integrations",
      icon: Zap,
      onClick: () => navigate("/partners-integrations"),
    },
    {
      title: "Data Protection & GDPR",
      icon: Shield,
      onClick: () => navigate("/data-protection"),
    },
    {
      title: "Contact Us",
      icon: Mail,
      onClick: () => navigate("/contact-us"),
    },
  ];

  const handleBookDemo = () => {
    navigate("/contact-us");
  };

  const handlePricing = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // wait a bit for navigation to finish
  };

  return (
    <nav className="bg-background/90 backdrop-blur-sm border-b border-border shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 animate-scale-in cursor-pointer">
            <div className="flex items-center gap-2">
              {/* Mobile Menu Icon */}
              <button
                className="block md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <RiMenuLine size={28} />
              </button>

              {/* Desktop Logo */}
              <img
                src="/logos/brand.svg"
                alt="Website Logo"
                className="h-8 hidden md:block"
                onClick={() => navigate("/")}
              />

              {/* Mobile Logo */}
              <img
                src="/favicon.png"
                alt="Mobile logo"
                className="h-8 md:hidden"
                onClick={() => navigate("/")}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-[70%]">
            <div className="w-full space-x-6 flex items-center justify-center ">
              <div className="relative group">
                <span className="text-foreground hover-link hover:text-primary px-3 py-2 rounded-md cursor-pointer">
                  {t("navigation.products")}
                </span>

                <div className="absolute left-0 top-8 hidden group-hover:block bg-background shadow-xl border border-border p-4 min-w-96 animate-fade-in duration-700 rounded-2xl z-50">
                  <div className="space-y-3">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:text-white transition-colors cursor-pointer"
                        onClick={product.onClick}
                      >
                        <div className={`p-1.5 rounded-lg`}>
                          <product.icon className="size-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-sm text-black">
                              {product.name}
                            </h4>
                            {product.status === "available" ? (
                              <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                                {t("navigation.available")}
                              </Badge>
                            ) : (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">
                                {t("navigation.comingSoon")}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <span className="text-foreground hover-link hover:text-primary px-3 py-2 rounded-md cursor-pointer">
                  {t("navigation.solutions")}
                </span>

                <div className="absolute left-0 top-8 hidden group-hover:block bg-background shadow-xl border border-border p-6 w-[600px] animate-fade-in rounded z-50">
                  <div className="grid grid-cols-2 gap-6">
                    {/* By Category */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        {t("navigation.byCategory")}
                      </h3>
                      <div className="">
                        {solutionsByCategory.map((solution, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                            onClick={solution.onClick}
                          >
                            <div className={`p-1.5 rounded-lg`}>
                              <solution.icon className="size-6 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-black">
                                {solution.title}
                              </span>
                              <span className="text-xs text-gray-600">
                                {solution.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* By Department */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        {t("navigation.byDepartment")}
                      </h3>
                      <div className="">
                        {solutionsByDepartment.map((solution, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                            onClick={solution.onClick}
                          >
                            <div className={`p-1.5 rounded-lg`}>
                              <solution.icon className="size-6 text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">
                                {solution.title}
                              </span>
                              <span className="text-xs text-gray-600">
                                {solution.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      onClick={handleBookDemo}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm w-full"
                    >
                      {t("navigation.bookDemo")}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span
                  className="text-foreground hover-link hover:text-primary px-3 py-2 rounded-md cursor-pointer"
                  onClick={() => handlePricing()}
                >
                  Pricing
                </span>
              </div>

              {/* resources */}
              <div className="relative group">
                <span className="text-foreground hover-link hover:text-primary px-3 py-2 rounded-md cursor-pointer">
                  {t("navigation.resources")}
                </span>
                <div className="absolute left-0 top-6 hidden group-hover:block bg-background shadow-xl border border-border p-4 w-64 animate-fade-in rounded-2xl z-50">
                  <div className="space-y-1">
                    {resourcesMenu.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={item.onClick}
                      >
                        <div className={`p-1.5 rounded-lg`}>
                          <item.icon className="size-6 text-blue-600" />
                        </div>
                        <span className="font-medium text-sm text-black">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <span className="text-foreground hover-link hover:text-primary px-3 py-2 rounded-md cursor-pointer">
                  {t("navigation.aboutUs")}
                </span>
                <div className="absolute left-0 top-6 hidden group-hover:block bg-background shadow-xl border border-border p-4 w-64 animate-fade-in rounded-2xl z-50">
                  <div className="space-y-1">
                    {aboutMenu.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={item.onClick}
                      >
                        <div className={`p-1.5 rounded-lg`}>
                          <item.icon className="size-6 text-blue-600" />
                        </div>
                        <span className="font-medium text-sm text-black hover:text-slate-700 transition-colors">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <LanguageSelector />
              <Button
                variant="outline"
                className="text-primary border-border hover:bg-gray-100 hover:text-primary/90 transition-all duration-200"
                onClick={handleBookDemo}
              >
                {t("navigation.contact")}
              </Button>
              <Button
                onClick={onShowLogin}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white transition-all duration-200"
              >
                {t("navigation.login")}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              onClick={onShowLogin}
              size="sm"
              className="my-btn text-white text-sm px-4"
            >
              Login
            </Button>
            <span className="size-9 rounded-md bg-blue-50 flex items-center justify-center">
              <LanguageSelector />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onShowLogin={onShowLogin}
      />
    </nav>
  );
};

export default Navigation;
