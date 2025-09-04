import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Building, Sparkles, Trophy, Target } from "lucide-react";
import { MdSchool, MdBusinessCenter, MdFamily } from "react-icons/md";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import ScrollInFromBottom from "../animation/ScrollInFromBottom";

interface CTASectionProps {
  onJoinWaitlist: (productName: string) => void;
}

const CTASection = ({ onJoinWaitlist }: CTASectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="w-full mx-auto text-center relative z-10">
        {/* Trust indicators */}
        <ScrollInFromBottom delay={0.2}>
          <div className="flex justify-center items-center flex-wrap gap-4 space-x-8 mb-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="size-6 md:size-5 text-blue-500" />
              <span className="text-sm font-medium">20+ AI Teaching Tools</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="size-6 md:size-5 text-purple-500" />
              <span className="text-sm font-medium">
                Save up to 15 hours every week
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="size-6 md:size-5 text-pink-500" />
              <span className="text-sm font-medium">
                Works with many languages
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="size-6 md:size-5 text-pink-500" />
              <span className="text-sm font-medium">24/7 AI Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="size-6 md:size-5 text-pink-500" />
              <span className="text-sm font-medium">
                99.9% Uptime Guarantee
              </span>
            </div>
          </div>
        </ScrollInFromBottom>
        <ScrollInFromBottom delay={0.4}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
            Smarter Teaching. Seamless Learning. Effortless School Management.
          </h2>

          <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>
        </ScrollInFromBottom>
        <ScrollInFromBottom delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              asChild
              className="w-full md:w-72 my-btn text-white px-6 py-6 rounded-xl group"
            >
              <Link to="/login">
                Get Started for Free
                <ArrowRight className="ml-2 size-6 md:size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onJoinWaitlist("Advanced Features")}
              className="w-full md:w-72 hover:bg-purple-50 hover:text-primary px-6 py-6 rounded-xl group"
            >
              <Sparkles className="mr-2 size-6 md:size-5 group-hover:scale-110 transition-transform" />
              Join Waitlist
            </Button>
          </div>
        </ScrollInFromBottom>
      </div>
    </section>
  );
};

export default CTASection;
