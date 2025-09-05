import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WaitlistModal from "@/components/WaitlistModal";
import {
  ArrowLeft,
  GraduationCap,
  Brain,
  BarChart3,
  Users,
  BookOpen,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  Globe,
  Shield,
  Gamepad2,
  Award,
  TrendingUp,
  Bot,
} from "lucide-react";
import aiPersonalizationImg from "@/assets/ai-personalization-professional.jpg";
import aiContentImg from "@/assets/ai-content-professional.jpg";
import smartProctoringImg from "@/assets/smart-proctoring-professional.jpg";
import gamificationImg from "@/assets/gamification-professional.jpg";
import predictiveAnalyticsImg from "@/assets/predictive-analytics-professional.jpg";
import corporateCertificationImg from "@/assets/corporate-certification-professional.jpg";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const AdvancedLMS = () => {
  const [onShowLogin, setOnShowLogin] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleJoinWaitlist = () => {
    setWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setWaitlistModalOpen(false);
  };

  const featureCategories = [
    {
      id: 1,
      title: "AI-Powered Personalization & Adaptive Learning",
      image: aiPersonalizationImg,
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      features: [
        {
          icon: Target,
          title: "Dynamic Course Recommendations",
          description:
            "AI analyzes learning patterns to suggest optimal courses and learning paths",
        },
        {
          icon: MessageSquare,
          title: "AI Tutor (Chatbot Assistant)",
          description:
            "24/7 intelligent tutoring support with personalized explanations",
        },
        {
          icon: BarChart3,
          title: "Real-Time Skill Gap Analysis",
          description:
            "Identifies knowledge gaps and provides targeted learning recommendations",
        },
      ],
    },
    {
      id: 2,
      title: "AI-Generated & Enhanced Content",
      image: aiContentImg,
      icon: BookOpen,
      color: "from-green-500 to-blue-500",
      features: [
        {
          icon: FileText,
          title: "Automated Summaries & Flashcards",
          description:
            "AI creates comprehensive summaries and interactive flashcards from content",
        },
        {
          icon: BookOpen,
          title: "AI-Generated Quizzes",
          description:
            "Automatically generate assessments based on learning materials",
        },
        {
          icon: Globe,
          title: "Multilingual Support (AI Translation & Dubbing)",
          description:
            "Break language barriers with AI-powered translation and voice dubbing",
        },
      ],
    },
    {
      id: 3,
      title: "Smart Proctoring & Auto-Grading",
      image: smartProctoringImg,
      icon: Shield,
      color: "from-red-500 to-pink-500",
      features: [
        {
          icon: Shield,
          title: "AI Proctoring (Anti-Cheating)",
          description:
            "Advanced AI monitoring ensures exam integrity with real-time behavior analysis",
        },
        {
          icon: FileText,
          title: "AI Essay & Code Grading",
          description:
            "Intelligent grading for written assignments and programming tasks",
        },
      ],
    },
    {
      id: 4,
      title: "Gamification & Engagement",
      image: gamificationImg,
      icon: Gamepad2,
      color: "from-yellow-500 to-orange-500",
      features: [
        {
          icon: Target,
          title: "AI-Driven Adaptive Gamification",
          description:
            "Personalized rewards and challenges based on individual learning styles",
        },
        {
          icon: Gamepad2,
          title: "VR/AR Labs (Advanced)",
          description:
            "Immersive virtual and augmented reality learning experiences",
        },
      ],
    },
    {
      id: 5,
      title: "Predictive Analytics & Instructor AI Assistant",
      image: predictiveAnalyticsImg,
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      features: [
        {
          icon: BarChart3,
          title: "Dropout Risk Prediction",
          description:
            "Early warning system identifies at-risk students for intervention",
        },
        {
          icon: Bot,
          title: "AI Teaching Assistant",
          description:
            "Intelligent assistant helps instructors with content creation and student support",
        },
      ],
    },
    {
      id: 6,
      title: "Corporate & Certification Features",
      image: corporateCertificationImg,
      icon: Award,
      color: "from-indigo-500 to-purple-500",
      features: [
        {
          icon: Award,
          title: "Blockchain Certificates",
          description:
            "Secure, verifiable digital certificates using blockchain technology",
        },
        {
          icon: Users,
          title: "LinkedIn Integration",
          description:
            "Seamlessly share achievements and certifications to professional profiles",
        },
      ],
    },
  ];

  const benefits = [
    "50% reduction in administrative tasks",
    "Improved student engagement by 75%",
    "Personalized learning for every student",
    "Real-time progress tracking",
    "Seamless integration with existing systems",
    "AI-powered content creation and delivery",
  ];

  return (
    <>
      <Navigation />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <ScrollInFromBottom delay={0.25}>
                <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                  <GraduationCap className="size-8 md:size-10 text-white" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Advanced
                  <span className="bg-gradient-to-r from-[#2901e3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    AI LMS
                  </span>
                </h1>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.25}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  {t("products.advancedLMSDesc")}
                </p>

                <Button 
                  onClick={handleJoinWaitlist}
                  className="w-full md:w-72 my-btn group text-white p-6 rounded-xl"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Features Categories */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Revolutionary AI-Powered{" "}
              <span className="bg-gradient-to-r from-[#2901e3] to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <div className="space-y-24">
              {featureCategories.map((category, categoryIndex) => (
                <ScrollInFromBottom delay={0.2}>
                  <div
                    key={category.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                        categoryIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content Section - Left for even, Right for odd */}
                      <div
                        className={`space-y-8 ${
                          categoryIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg`}
                          >
                            <category.icon className="size-6 md:size-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                              {category.title}
                            </h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {category.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 p-2 md:p-4 rounded-tr rounded-bl-sm transition-all duration-300 border border-transparent "
                            >
                              <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-xl bg-white shadow-md border group-hover:shadow-lg transition-shadow duration-300">
                                  <feature.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-gray-900 mb-3 ">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Section - Right for even, Left for odd */}
                      <div
                        className={`relative ${
                          categoryIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                          <div className="aspect-[4/3] relative">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          {/* Floating badge */}
                          <div className="absolute top-2 left-2 md:top-6 md:left-6">
                            <div
                              className={`px-4 py-2 rounded-full bg-blue-50 text-[#2901e3] text-sm font-semibold shadow-lg`}
                            >
                              AI-Powered
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollInFromBottom>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
              Transform Your Institution
            </h2>
            <div className="space-y-4 mb-12 grid grid-cols-1 sm:grid-cols-2 place-content-center">
              {benefits.map((benefit, index) => (
                <ScrollInFromBottom delay={index * 0.3}>
                  <div
                    key={index}
                    className="flex items-start md:items-center text-lg text-gray-700 text-start"
                  >
                    <CheckCircle className="mt-1 size-5 md:size-6 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}.
                  </div>
                </ScrollInFromBottom>
              ))}
            </div>
            <Button 
              onClick={handleJoinWaitlist}
              className="w-full md:w-72 my-btn text-white px-8 py-6 rounded-xl"
            >
              Get Early Access
            </Button>
          </div>
        </section>
      </div>
      <Footer />
      
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={closeWaitlistModal}
        productName="Advanced AI LMS"
      />
    </>
  );
};

export default AdvancedLMS;
