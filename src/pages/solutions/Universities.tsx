import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  TrendingUp,
  Brain,
  Laptop,
  CheckCircle,
  GraduationCap,
  BrainCircuit,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

const Universities = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Advanced Research Tools",
      description:
        "Empower faculty and students to push the boundaries of knowledge.",
      feature: [
        "Secure, cloud-based storage for research data and publications.",
        "Collaborative workspaces for cross-department and global partnerships.",
        "Integrated citation and bibliography management tools.",
        "AI-assisted literature reviews and trend analysis to speed up discoveries.",
      ],
    },
    {
      icon: Users,
      title: "Large-Scale Management",
      description: "Handle every aspect of university operations with ease.",
      feature: [
        "Centralized dashboard for overseeing multiple campuses or departments.",
        "Automated workflows for admissions, grading, and scheduling.",
        "Role-based permissions to ensure secure and efficient access control.",
        "Resource allocation and facility management tools to optimize campus assets.",
      ],
    },
    {
      icon: Laptop,
      title: "Digital Campus (LMS)",
      description:
        "Bring the full university experience online without losing the human touch.",
      feature: [
        "Comprehensive Learning Management System for lectures, assignments, and assessments.",
        "Video conferencing integration for live classes and guest lectures.",
        "Self-paced course options for flexible learning pathways.",
        "Mobile-friendly portals for students and faculty to stay connected anywhere.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Make smarter decisions backed by real data.",
      feature: [
        "Student performance tracking across courses and semesters.",
        "Enrollment and retention trend analysis for growth planning.",
        "Research output tracking for institutional rankings and grants.",
        "Customizable reports for accreditation and funding compliance.",
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
                <Award className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Universities{" "}
                <span className="text-gray-800">
                  – Manage, Innovate, and Elevate Higher Education
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Universities face unique challenges — from handling large
                student populations to advancing groundbreaking research. Our
                University Solution is built to manage the complexity, foster
                innovation, and deliver an exceptional campus experience for
                students, faculty, and administrators.
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
                Ready to Revolutionize Higher Education?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join leading universities worldwide in transforming education.
              </p>
              <Button
                size="lg"
                onClick={() => setShowLogin(true)}
                className="w-full md:w-72 icon-bg my-btn text-white p-6"
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

export default Universities;
