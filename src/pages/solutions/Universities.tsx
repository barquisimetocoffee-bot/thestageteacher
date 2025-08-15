import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  TrendingUp,
  Brain,
  Laptop,
  CheckCircle,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";

import Footer from "@/components/home/Footer";

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
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <Award className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
              Universities{" "}
              <span className="text-gray-800">
                – Manage, Innovate, and Elevate Higher Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Universities face unique challenges — from handling large student
              populations to advancing groundbreaking research. Our University
              Solution is built to manage the complexity, foster innovation, and
              deliver an exceptional campus experience for students, faculty,
              and administrators.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-[#2901b3] rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Leading Universities Trust Us
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  250,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  University Students
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  150+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Universities
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  95%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Research Efficiency
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
