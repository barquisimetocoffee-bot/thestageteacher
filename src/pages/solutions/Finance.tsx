import { Button } from "@/components/ui/button";

import {
  DollarSign,
  CreditCard,
  FileBarChart,
  Banknote,
  PieChart,
  CheckCircle,
} from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";

import Footer from "@/components/home/Footer";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
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

                {
                  // Feature List
                  feature.feature && (
                    <ul className="mt-4 space-y-2 *:text-gray-600 *:text-sm">
                      {feature.feature.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 text-base/6 flex gap-2"
                        >
                          <span>
                            <CheckCircle
                              className="inline-block mt-1 text-green-600"
                              size={16}
                            />
                          </span>
                          <p> {item}</p>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </motion.div>
            ))}
          </div>

          {/* Why it Matters Section */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Whether you're managing tuition payments, operational budgets, or
            vendor accounts, our platform makes financial workflows simpler,
            more secure, and completely transparent.
          </p>
        </div> */}

          {/* Benefits */}
          <ScrollInFromBottom delay={0.2}>
            <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                Complete Financial Control
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
                <div>
                  <CreditCard className="size-8 md:size-12 text-white mx-auto mb-4" />
                  <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                    Automated
                  </h3>
                  <p className="text-gray-200 text-xs md:text-base">
                    Billing & Payments
                  </p>
                </div>
                <div>
                  <FileBarChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                  <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                    Transparent
                  </h3>
                  <p className="text-gray-200 text-xsmd:text-base">
                    Financial Reporting
                  </p>
                </div>
                <div>
                  <PieChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                  <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                    Real-time
                  </h3>
                  <p className="text-gray-200 text-xs md:text-base">
                    Budget Tracking
                  </p>
                </div>
              </div>
            </div>
          </ScrollInFromBottom>

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
