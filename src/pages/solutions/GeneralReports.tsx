import { Button } from "@/components/ui/button";
import {
  BarChart3,
  FileSpreadsheet,
  Download,
  Brain,
  TrendingUp,
  CheckCircle,
  CircleGauge,
  Goal,
  ClockArrowUp,
  ArrowRight,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";

import Footer from "@/components/home/Footer";
import FeatureCard from "@/components/FeatureCard";

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
      description: "Visualize your school’s performance at a glance.",
      feature: [
        "Interactive dashboards that update in real time.",
        "Track key metrics such as attendance, grades, finances, and admissions.",
        "Drill down into department-specific data for deeper analysis.",
        "Customize layouts to show only the KPIs that matter most to your role.",
      ],
    },
    {
      icon: FileSpreadsheet,
      title: "Custom Report Builder",
      description: "Create reports your way — no coding required.",
      feature: [
        "Drag-and-drop interface for building reports in minutes.",
        "Combine data from multiple departments into a single view.",
        "Save report templates for recurring use.",
        "Schedule automated reports to be sent directly to your inbox.",
      ],
    },
    {
      icon: Download,
      title: "Export Flexibility",
      description: "Share insights without compatibility headaches.",
      feature: [
        "Export reports in PDF, Excel, or CSV formats.",
        "One-click sharing with team members or stakeholders.",
        "Integration-ready for third-party analytics tools.",
        "Mobile-friendly exports for on-the-go access.",
      ],
    },
    {
      icon: Brain,
      title: "AI-Assisted Insights",
      description: "Let AI uncover trends you might miss.",
      feature: [
        "Predict academic performance and enrollment trends.",
        "Identify potential risks such as declining attendance or low engagement.",
        "Get actionable recommendations for improving student outcomes.",
        "Natural language summaries so anyone can understand the data — no analyst required.",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <ScrollInFromBottom delay={0.2}>
              <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
                <BarChart3 className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                General Reporting{" "}
                <span className="text-gray-800">
                  – Turn School Data into Actionable Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Make faster, smarter decisions with real-time reporting that’s
                built for modern schools. Our General Report module transforms
                complex data into easy-to-understand dashboards and custom
                reports — so you can focus on improvement, not manual data
                crunching.
              </p>
            </ScrollInFromBottom>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4 mb-16">
            {features.map((feature, index) => (
              <FeatureCard index={index} cardData={feature} />
            ))}
          </div>

          {/* CTA Section */}
          <ScrollInFromBottom delay={0.3}>
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
          </ScrollInFromBottom>
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
