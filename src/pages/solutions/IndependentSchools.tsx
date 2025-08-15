import { Button } from "@/components/ui/button";
import {
  Target,
  Award,
  BookOpen,
  Users,
  Trophy,
  Star,
  Crown,
  Shield,
  Gem,
  Settings,
  LineChart,
  Users2,
  Calendar,
  MessageCircle,
  Zap,
  CheckCircle,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import independentSchoolsHero from "@/assets/independent-schools-hero.jpg";
import Footer from "@/components/home/Footer";

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
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <Target className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
              Independent Schools{" "}
              <span className="text-gray-800">
                – Flexible Solutions for Unique Visions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Independent schools thrive on individuality. Our Independent
              School Solution gives you the freedom to run your institution your
              way, with powerful tools that adapt to your vision.
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
              Excellence in Independent Education
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  25,000+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Independent Students
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  200+
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Independent Schools
                </div>
              </div>
              <div>
                <div className="text-base/5 md:text-4xl font-bold text-white mb-2">
                  99%
                </div>
                <div className="text-gray-200 text-xs md:text-base">
                  Parent Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
