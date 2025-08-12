import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  FileSpreadsheet,
  Download,
  Brain,
  TrendingUp,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import reportsHero from "@/assets/solutions/reports-hero.jpg";

import Footer from "@/components/home/Footer";

const GeneralReports = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BarChart3,

      title: "Dynamic Dashboards",
      description:
        "Real-time academic, behavioral, and operational data visualization",
    },
    {
      icon: FileSpreadsheet,
      title: "Custom Report Builder",
      description:
        "Create tailored reports for attendance, grades, performance, and more",
    },
    {
      icon: Download,
      title: "Export Flexibility",
      description:
        "Export reports to Excel, PDF, or send directly to stakeholders",
    },
    {
      icon: Brain,
      title: "AI-Assisted Insights",
      description:
        "Intelligent trends analysis and predictive insights for better decisions",
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
              <BarChart3 className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              General Reports
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Access real-time, data-driven insights that help you lead with
              confidence.
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

          {/* Why it Matters Section */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Turn your school's data into actionable insights. Our system
            empowers leadership teams to make faster, evidence-based decisions
            and identify areas of improvement across departments.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Data-Driven Decision Making
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <TrendingUp className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Live Data Updates
                </p>
              </div>
              <div>
                <Brain className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  AI-Powered
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Predictive Analytics
                </p>
              </div>
              <div>
                <FileSpreadsheet className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Custom
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Tailored Reports
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Make evidence-based decisions with powerful insights.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn text-white p-6"
            >
              See Insights in Action
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

export default GeneralReports;
