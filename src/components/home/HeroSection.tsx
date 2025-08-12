import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/ui/animated-counter";
import { GiEmptyHourglass } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import { GrIntegration } from "react-icons/gr";
import {
  Users,
  TrendingUp,
  Shield,
  Globe,
  Star,
  Sparkles,
  ArrowRight,
  Contact,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onShowLogin: () => void;
}

const HeroSection = ({ onShowLogin }: HeroSectionProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const messages = [
    t("hero.subtitle1"),
    t("hero.subtitle2"),
    t("hero.subtitle3"),
    t("hero.subtitle4"),
    t("hero.subtitle5"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-t from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Hero Section Content */}
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="w-full md:w-[60%]">
            <div className="flex justify-center md:justify-start mb-4">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-purple-200 text-sm font-medium px-4 py-2 ">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse " />
                {t("hero.transformingEducation")}
              </Badge>
            </div>

            <h1 className="text-center md:text-start text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight animate-scale-in">
              {t("hero.title")}
              <span className="bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent block transition-all duration-1000 animate-fade-in pb-2">
                {messages[currentMessageIndex]}
              </span>
            </h1>

            <p className="text-center md:text-start text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
              {t("hero.description")}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 animate-fade-in">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">
                  {t("hero.socCompliant")}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">
                  {t("hero.availableWorldwide")}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">
                  {t("hero.userRating")}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={onShowLogin}
                className="w-full md:w-72 my-btn text-white px-6 py-6 rounded-xl group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-72 text-black hover:bg-gray-50 hover:text-[#2901B3] px-6 py-6 rounded-xl group"
                onClick={() => navigate("/contact-us")}
              >
                <Contact className="mr-2 size-5 group-hover:scale-[1.04] transition-all duration-300" />
                Contact Us
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/hero/hero.svg"
              alt=""
              className="md:w-[500px] lg:w-[450px]"
            />
          </div>
        </div>

        {/* Hero Section Cards */}
        <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mb-4 animate-fade-in px-4 md:px-8">
          <div className=" bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:scale-105  transition-all duration-300 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-tr rounded-bl-sm icon-bg shadow-lg">
                <LiaUsersSolid className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#2901B3] mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-gray-700 font-medium mb-2">
              {t("hero.activeEducators")}
            </div>
            <div className="text-sm text-gray-500">
              {t("hero.acrossAllPlatforms")}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:scale-105  transition-all duration-300 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-tr rounded-bl-sm icon-bg shadow-lg">
                <GrIntegration className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#2901B3] mb-2">
              <AnimatedCounter end={3} />
            </div>
            <div className="text-gray-700 font-medium mb-2">
              {t("hero.integratedProducts")}
            </div>
            <div className="text-sm text-gray-500">
              {t("hero.completeEcosystem")}
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:scale-105  transition-all duration-300 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-tr rounded-bl-sm icon-bg shadow-lg">
                <GiEmptyHourglass className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-[#2901B3] mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-gray-700 font-medium mb-2">
              {t("hero.hoursSavedMonthly")}
            </div>
            <div className="text-sm text-gray-500">
              {t("hero.perInstitution")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
