import { Button } from "@/components/ui/button";
import {
  Target,
  Award,
  Users,
  Crown,
  CheckCircle,
  Dices,
  Cable,
  IdCard,
  ChartGantt,
  ArrowRight,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

const IndependentSchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Small Class Management",
      description: "Maximize the benefits of personalized learning.",
      feature: [
        "Tailored scheduling tools for small group or one-on-one lessons.",
        "Individualized progress tracking for every student.",
        "Flexible grading and assessment models to suit your pedagogy.",
        "Attendance, participation, and behavior monitoring designed for close-knit classes.",
      ],
    },
    {
      icon: Crown,
      title: "Custom Branding",
      description: "Showcase your school’s identity at every touchpoint.",
      feature: [
        "Fully branded portals for students, parents, and staff.",
        "Personalized certificates, reports, and communications with your school’s logo and colors.",
        "Branded mobile apps to reinforce your identity both on and off campus.",
        "Marketing integrations to promote your school’s unique programs.",
      ],
    },
    {
      icon: Award,
      title: "Scalable Administration",
      description: "Grow without losing your personal touch.",
      feature: [
        "Manage multiple programs or campuses from one dashboard.",
        "Role-based permissions for different staff members.",
        "Custom reports for governance and compliance.",
        "Financial tracking tools for sustainable growth.",
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
                <Target className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Independent Schools{" "}
                <span className="text-gray-800">
                  – Flexible Solutions for Unique Visions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Independent schools thrive on individuality. Our Independent
                School Solution gives you the freedom to run your institution
                your way, with powerful tools that adapt to your vision.
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
                Ready to Enhance Your Independent School?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join elite independent schools in delivering exceptional
                education.
              </p>
              <Button
                size="lg"
                onClick={() => setShowLogin(true)}
                className="w-full md:w-72 my-btn text-white p-6"
              >
                Get Started Today
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

export default IndependentSchools;
