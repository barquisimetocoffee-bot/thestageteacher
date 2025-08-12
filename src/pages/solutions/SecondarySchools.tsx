import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  BookOpen,
  Brain,
  Target,
  Lightbulb,
  GraduationCap,
  LineChart,
  Users2,
  Calendar,
  MessageCircle,
  Trophy,
  Zap,
  Star,
} from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import secondarySchoolsHero from "@/assets/secondary-schools-hero.jpg";

import Footer from "@/components/home/Footer";

const SecondarySchools = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Advanced Learning Paths",
      description:
        "Personalized curriculum designed for teenage learners and career preparation",
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description:
        "Comprehensive tools for standardized tests and university entrance exams",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Group projects and peer-to-peer learning environments",
    },
    {
      icon: Lightbulb,
      title: "STEM Focus",
      description:
        "Advanced science, technology, engineering, and mathematics programs",
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
              <TrendingUp className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Secondary Schools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prepare students for higher education and careers with our
              comprehensive secondary education platform designed for grades
              6-12.
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
                    <div className="p-3 icon-bg  rounded-tr rounded-bl-sm group-hover:scale-105 transition-transform duration-300">
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

          {/* Statistics */}
          <div className="bg-[#2901B3] rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Empowering Secondary Education
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  50,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Secondary Students
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  300+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  High Schools
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold  mb-2 text-white">
                  85%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  University Acceptance
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
