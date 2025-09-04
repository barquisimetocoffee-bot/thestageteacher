import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Brain, Target, Lightbulb } from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import FeatureCard from "@/components/FeatureCard";

const SecondarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      image: "/secondary/advanced-learning.jpg",
      title: "Advanced Learning Tools",
      description: null,
      feature: [
        "Curriculum support for grades 7–12 with challenging, real-world content.",
        "Interactive simulations, problem-solving activities, and critical thinking modules.",
        "Adaptive technology that personalizes learning paths.",
      ],
    },
    {
      icon: Target,
      image: "/secondary/career-university.jpg",
      title: "Career & University Prep",
      description: null,
      feature: [
        "Tools for tracking academic requirements for higher education.",
        "Career guidance resources and aptitude assessments.",
        "Digital portfolios to showcase achievements.",
      ],
    },
    {
      icon: Users,
      image: "/secondary/parent-teacher.jpg",
      title: "Parent-Teacher Collaboration",
      description: null,
      feature: [
        "Regular progress updates with clear grading insights.",
        "Secure messaging and meeting scheduling.",
        "Attendance alerts and academic milestone notifications.",
      ],
    },
    {
      icon: Lightbulb,
      image: "/secondary/student-engagement.jpg",
      title: "Student Engagement",
      description: null,
      feature: [
        "Debate clubs, online competitions, and project-based learning spaces.",
        "Gamified assignments to encourage participation.",
        "Peer-to-peer collaboration platforms.",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <ScrollInFromBottom delay={0.2}>
              <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
                <TrendingUp className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>

            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Secondary Schools{" "}
                <span className="text-gray-800">
                  – Empower the Next Generation of Thinkers
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Secondary education is where students prepare for higher
                learning and future careers. Our Secondary School solution helps
                educators deliver advanced lessons, monitor progress, and create
                an environment where teens thrive academically and socially.
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
                Ready to Elevate Secondary Education?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join secondary schools worldwide in preparing students for
                success.
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

export default SecondarySchools;
