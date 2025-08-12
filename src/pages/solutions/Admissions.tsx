import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UserCheck,
  FileText,
  Users,
  CheckCircle,
  Clock,
  BarChart,
  Bot,
  MessageSquare,
  Monitor,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import admissionsHero from "@/assets/solutions/admissions-hero.jpg";

import Footer from "@/components/home/Footer";
const Admissions = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Online Application Forms",
      description:
        "Customizable fields that adapt to your school's specific requirements",
    },
    {
      icon: CheckCircle,
      title: "Automatic Document Verification",
      description:
        "Automated verification and comprehensive applicant tracking system",
    },
    {
      icon: Bot,
      title: "AI-Based Student Profiling",
      description:
        "Faster evaluations through intelligent student profiling algorithms",
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Direct communication channels with parents and applicants",
    },
    {
      icon: Monitor,
      title: "Centralized Dashboard",
      description: "Monitor every stage of enrollment from a single interface",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <UserCheck className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Admissions Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Simplify and streamline your entire admissions process with our
              intuitive, AI-assisted platform.
            </p>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-tr rounded-bl-sm  group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-base/6 pt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* Why it Matters Section
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Cut down administrative time and reduce errors by automating
            repetitive tasks. Offer prospective families a smooth and responsive
            admissions journey that reflects your school's professionalism.
          </p>
        </div> */}
          {/* Benefits */}
          <div className="bg-[#2903b1] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Transform Your Admissions Process
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  75% Faster
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Processing Time Reduction
                </p>
              </div>
              <div>
                <CheckCircle className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  99% Accuracy
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Document Verification
                </p>
              </div>
              <div>
                <BarChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Analytics & Reporting
                </p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Modernize Your Admissions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join institutions worldwide in streamlining their admission
              process.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn p-6 rounded-xl"
            >
              Streamline Admissions Today
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admissions;
