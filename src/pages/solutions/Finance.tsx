import { Button } from "@/components/ui/button";

import {
  DollarSign,
  CreditCard,
  FileBarChart,
  Banknote,
  PieChart,
  CheckCircle,
  ChartCandlestick,
  CircleFadingArrowUp,
  DatabaseZap,
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

const Finance = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: CreditCard,

      title: "Fee Management & Automated Billing",
      description:
        "Make tuition and fee collection effortless for staff, parents, and students.",
      feature: [
        "Set up flexible fee structures for different programs and student categories.",
        "Automate billing cycles and reminders to reduce late payments.",
        "Apply discounts, scholarships, and penalties with just a few clicks.",
        "Track payment status in real time with instant notifications.",
      ],
    },
    {
      icon: FileBarChart,
      title: "Custom Financial Reports",
      description: "Get the numbers you need — in the format you need them.",
      feature: [
        "Generate profit & loss statements, balance sheets, and cash flow reports.",
        "Filter by term, department, or payment category for more precise analysis.",
        "Save and schedule recurring reports for monthly or quarterly reviews.",
        "Export to PDF, Excel, or CSV for easy sharing and record-keeping.",
      ],
    },
    {
      icon: PieChart,
      title: "Budget Planning & Tracking",
      description: "Plan ahead with data-driven financial forecasting.",
      feature: [
        "Set annual or term-based budgets for different departments.",
        "Monitor spending against allocated budgets in real time.",
        "Get alerts for overspending or budget deviations.",
        "Use historical data to plan more accurately for the next academic year.",
      ],
    },
    {
      icon: Banknote,
      title: "Banking & Payment Integration",
      description:
        "Connect your school’s finances to the systems you already use.",
      feature: [
        "Seamless integration with major banks and online payment gateways.",
        "Accept multiple payment methods — credit/debit cards, mobile wallets, and bank transfers.",
        "Instant reconciliation between your bank records and school accounts.",
        "Enhanced transaction security with encryption and fraud detection.",
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
                <DollarSign className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Finance{" "}
                <span className="text-gray-800">
                  – Simplify School Finances, Maximize Transparency
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Managing your school’s finances doesn’t have to be complicated.
                Our Finance module streamlines everything from fee collection to
                budgeting, giving you complete control and real-time visibility
                over your institution’s financial health.
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
                Ready to Optimize Your Finances?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Take control of your school's financial health with intelligent
                tools.
              </p>
              <Button
                size="lg"
                onClick={() => setShowLogin(true)}
                className="w-full md:w-72 my-btn p-6"
              >
                Optimize School Finances
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

export default Finance;
