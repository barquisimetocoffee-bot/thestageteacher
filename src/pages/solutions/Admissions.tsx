import { Button } from "@/components/ui/button";
import {
  UserCheck,
  FileText,
  CheckCircle,
  Clock,
  BarChart,
  Bot,
  MessageSquare,
  Monitor,
  ArrowRight,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

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
        "Ditch the paperwork and make it easy for students and parents to apply from anywhere, on any device.",
      feature: [
        "Fully customizable forms that match your school’s requirements.",
        "Mobile-friendly design for quick and accessible submissions.",
        "Automatic data capture and secure storage for every applicant.",
        "Instant confirmation emails to keep applicants informed.",
      ],
    },
    {
      icon: CheckCircle,
      title: "Automatic Document Verification",
      description:
        "Say goodbye to tedious manual checks. Our platform automates document validation to save time and reduce errors.",
      feature: [
        "Optical Character Recognition (OCR) technology for instant reading of IDs, transcripts, and certificates.",
        "AI-powered checks for document authenticity and completeness.",
        "Real-time status updates so applicants know exactly where they stand.",
      ],
    },
    {
      icon: Bot,
      title: "AI-Based Student Profiling",
      description:
        "Make smarter admission decisions with deeper insights into each applicant.",
      feature: [
        "Analyze academic history, extracurricular activities, and skill sets.",
        "Predict student success rates based on historical performance data.",
        "Match applicants to suitable programs or courses automatically.",
        "Eliminate unconscious bias with fair, data-driven evaluations.",
      ],
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description:
        "Stay connected with applicants, parents, and staff throughout the admissions process.",
      feature: [
        "Integrated email, SMS, and in-app messaging.",
        "Automated reminders for missing documents or upcoming deadlines.",
        "Personalized communication templates for faster outreach.",
        "Two-way messaging to answer queries in real time.",
      ],
    },
    {
      icon: Monitor,
      title: "Centralized Dashboard",
      description:
        "Manage your entire admissions cycle from a single, intuitive interface.",
      feature: [
        "Track applications, verify documents, and communicate — all in one place.",
        "Real-time analytics to monitor application trends and performance.",
        "Role-based access for staff, ensuring data privacy and security.",
        "Customizable widgets to focus on the metrics that matter most to your school.",
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
                <UserCheck className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Admissions Management{" "}
                <span className="text-gray-800">
                  – Smarter, Faster, and More Connected
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your school’s admissions process into a seamless,
                efficient, and student-friendly experience. From the first
                inquiry to enrollment, our admissions module helps you manage
                every step with speed, accuracy, and insight — all in one place.
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

export default Admissions;
