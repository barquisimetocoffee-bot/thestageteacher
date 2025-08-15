import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Users2,
  BookOpen,
  Shield,
  Star,
  Gamepad2,
  CheckCircle,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

import Footer from "@/components/home/Footer";

const PrimarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Heart,
      title: "Age-Appropriate Learning",
      description: "Content and tools built for young learners.",
      feature: [
        "Curriculum-aligned lesson plans tailored for ages 5–11.",
        "Fun, easy-to-understand activities that match developmental stages.",
        "Adaptive learning tools that adjust to each child’s pace.",
        "Balanced screen time for healthy digital engagement.",
      ],
    },
    {
      icon: Users2,
      title: "Parent Engagement",
      description: "Bring parents into the learning journey.",
      feature: [
        "Dedicated parent portal for progress updates, homework, and events.",
        "Easy two-way communication between teachers and parents.",
        "Automated notifications for attendance, achievements, and concerns.",
        "Transparent academic and behavioral reporting.",
      ],
    },
    {
      icon: BookOpen,
      title: "Interactive Content",
      description: "GTurn lessons into experiences students love.",
      feature: [
        "Gamified quizzes, puzzles, and storytelling modules.",
        "Animated, visual-based learning for complex concepts.",
        "Real-time classroom polls and interactive whiteboards.",
        "Activity tracking to measure engagement.",
      ],
    },
    {
      icon: Shield,
      title: "Child Safety",
      description: "Peace of mind for parents and staff.",
      feature: [
        "Secure logins and role-based access for students, teachers, and parents.",
        "Content filtering to block inappropriate materials.",
        "Safe messaging features to protect children from external contact.",
        "Compliance with child data protection regulations.",
      ],
    },
    {
      icon: Gamepad2,
      title: "Educational Gaming",
      description: "Learning through play — the smart way.",
      feature: [
        "Curriculum-based games that reinforce classroom learning.",
        "Reward systems to motivate participation.",
        "Multiplayer collaboration games for teamwork skills.",
        "Progress tracking to align playtime with educational goals.",
      ],
    },
    {
      icon: Star,
      title: "Creative Expression",
      description: "Give every child the tools to explore their imagination.",
      feature: [
        "Digital art boards, music tools, and storytelling apps.",
        "Safe spaces for students to share projects with peers and teachers.",
        "Guided creative assignments to boost confidence.",
        "Portfolios to showcase student growth over time.",
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
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <Heart className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
              Primary Schools{" "}
              <span className="text-gray-800">
                – Build Bright Futures from the Start
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Early education is where curiosity takes root and lifelong
              learning begins. Our Primary School solution is designed to
              nurture young minds while making teaching and school management
              simple, secure, and engaging.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-tr rounded-bl-sm  group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                  </div>
                </div>

                <p className="text-gray-800 text-base/6 pt-1">
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
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-[#2901B3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Trusted by Primary Schools Worldwide
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  15,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Young Learners
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Primary Schools
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Teacher Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Primary Education?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Join thousands of primary schools already using our platform.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn text-white p-6"
            >
              Get Started Today
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

export default PrimarySchools;
