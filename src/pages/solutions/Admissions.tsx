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
  Check,
} from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";

import Footer from "@/components/home/Footer";
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
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <UserCheck className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold text-gray-900 mb-6">
              Admissions Management – Smarter, Faster, and More Connected
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your school’s admissions process into a seamless,
              efficient, and student-friendly experience. From the first inquiry
              to enrollment, our admissions module helps you manage every step
              with speed, accuracy, and insight — all in one place.
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
          {/* Why it Matters Section
        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Cut down administrative time and reduce errors by automating
            repetitive tasks. Offer prospective families a smooth and responsive
            admissions journey that reflects your school's professionalism.
          </p>
        </div> */}
          {/* Benefits */}
          <div className="bg-[#2903b1] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Transform Your Admissions Process
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  75% Faster
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Processing Time Reduction
                </p>
              </div>
              <div>
                <CheckCircle className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  99% Accuracy
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Document Verification
                </p>
              </div>
              <div>
                <BarChart className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Real-time
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Analytics & Reporting
                </p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
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
