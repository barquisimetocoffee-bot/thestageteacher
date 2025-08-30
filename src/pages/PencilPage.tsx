import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Brain,
  Zap,
  Target,
  Award,
  Shield,
  Sparkles,
  TrendingUp,
  PenTool,
  BookText,
  MessageSquare,
  FileText,
  Calculator,
  Globe,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const PencilPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { t } = useTranslation();
  // Pencil specific showcase features
  const PencilFeatures = [
    {
      title: "AI-Powered Lesson Planning",
      description:
        "Create curriculum-aligned lesson plans in minutes with structured prompts and ready-to-use content.",
      image: "/pencil/1.svg",
      features: [
        "Standards-aware prompts",
        "Differentiation options",
        "Assessment suggestions",
        "Export ready",
      ],
    },
    {
      title: "AI Writing Help for Parent Updates",
      description:
        "Draft clear, professional updates without the stress. Let AI polish tone, grammar, and flow so you can hit 'send' with confidence.",
      image: "/pencil/2.svg",
      features: [
        "Professional tone",
        "Grammar & clarity",
        "Multi-draft suggestions",
        "Copy-paste ready",
      ],
    },
    {
      title: "Fast Quizzes & Questions",
      description:
        "Save time on assessments with instant quiz and question generators that adapt to different levels of learning.",
      image: "/pencil/3.svg",
      features: [
        "Depth of Knowledge (DOK) levels",
        "Text-based questions",
        "Multiple-choice & short-answer",
        "Auto-generated answer keys.",
      ],
    },
    {
      title: "24/7 Classroom Coach AI",
      description:
        "Need quick answers, fresh activity ideas, or behavior strategies? The Classroom Coach AI is your always-available teaching assistant.",
      image: "/pencil/4.svg",
      features: [
        "Instant teaching advice",
        "Activity & resource suggestions",
        "Guidance on differentiation",
        "Always available when you need it",
      ],
    },
  ];

  const platformStats = [
    { number: "20+", label: "AI Teaching Tools", icon: Brain },
    { number: "15", label: "Hours Saved Weekly", icon: Clock },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "AI Assistant", icon: Zap },
    { number: "30+", label: "Works with many languages", icon: Target },
  ];

  const whyChoosePencil = [
    {
      icon: Target,
      title: "Purpose-built for education",
      description:
        "Unlike generic AI tools, Pencil is specifically designed for educators, understanding the unique challenges and requirements of the education sector.",
    },
    {
      icon: Award,
      title: "Save up to 15 hours every week",
      description:
        "Over 100,000 educators have saved 15+ hours weekly while improving student outcomes and engagement through our platform.",
    },
    {
      icon: Shield,
      title:
        "Privacy-first (aligned with FERPA best practices), Evolving with you.",
      description:
        "FERPA compliant with enterprise-grade security. Your data and your students' information are protected with the highest standards.",
    },
    {
      icon: Sparkles,
      title: "Continuous Innovation",
      description:
        "Our AI models are constantly updated with the latest educational research and teaching methodologies to provide cutting-edge solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navigation onShowLogin={() => setShowLogin(true)} />

      {/* Hero Section */}
      <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollInFromBottom delay={0.2}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-tr rounded-bl-sm bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg">
                <img 
                  src="/lovable-uploads/358be6b8-0039-4648-9ee5-146f8b809942.png" 
                  alt="Pencil by Vicerta Logo" 
                  className="h-12 w-12"
                />
              </div>
            </div>
          </ScrollInFromBottom>
          <ScrollInFromBottom delay={0.2}>
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
              <CheckCircle className="h-3 w-3 mr-1" />
              Available Now
            </Badge>
            <div className="w-full text-center flex items-center justify-center">
              <h1 className="lg:w-[80%] text-center text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Pencil by Vicerta: Your AI Co-teacher for
                <span className="bg-gradient-to-r from-[#3101e3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Planning & Assessment
                </span>
              </h1>
            </div>
          </ScrollInFromBottom>
          <ScrollInFromBottom delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate lesson plans, quizzes, and classroom materials in
              minutes—so you can spend more time teaching, not stuck on prep.
            </p>
          </ScrollInFromBottom>
          <ScrollInFromBottom delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => setShowLogin(true)}
                className="w-full md:w-72 my-btn group text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Teaching Smarter
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </div>
          </ScrollInFromBottom>
          <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
            <Users className="h-4 w-4 mr-2" />
            100,000+ Teachers Worldwide
          </div>
        </div>
      </section>

      {/* Platform Stats Grid */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Marquee className="mb-8" speed={50} gradient={false} autoFill>
            <div className="grid grid-cols-5 lg:grid-cols-5">
              {platformStats.map((stat, index) => (
                <div
                  key={index}
                  className="mr-4 md:mr-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-tr rounded-bl icon-bg">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Pencil by Vicerta Vision */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollInFromBottom>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The Pencil by Vicerta Vision
              </h2>
              
              <div className="space-y-6 text-xl md:text-2xl text-white font-bold leading-relaxed">
                <p>
                  The education system is strained. Teachers face burnout from heavy workloads while students need more personalized attention. Vicerta was created to solve this. Our vision is to empower educators by reducing administrative tasks, so they can focus on what's truly important: their students.
                </p>
                
                <p>
                  <span className="text-white font-bold">Pencil</span> is our first step in this revolution, designed to free up your time. Join us and experience the beginning of a new era in education.
                </p>
              </div>
            </div>
          </ScrollInFromBottom>
        </div>
      </section>

      {/* Feature Showcase with Dashboard Mockups */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <ScrollInFromBottom delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Most Comprehensive{" "}
                <span className="bg-gradient-to-r from-[#3101e3] to-blue-600 bg-clip-text text-transparent">
                  AI Teaching Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From lesson planning to student analytics, Pencil provides
                everything educators need in one powerful, AI-driven platform
              </p>
            </div>
          </ScrollInFromBottom>

          <div className="space-y-20">
            {PencilFeatures.map((feature, index) => (
              <ScrollInFromBottom delay={0.3} key={index}>
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.features.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => setShowLogin(true)}
                      className="w-full md:w-72 my-btn text-white px-6 py-6 group rounded-xl"
                    >
                      Explore This Feature
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                  </div>

                  {/* Custom Dashboard Mockup */}
                  <div className="flex-1 relative">
                    {
                      <div className="p-8">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto"
                        />
                      </div>
                    }
                  </div>
                </div>
              </ScrollInFromBottom>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pencil Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollInFromBottom delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why educators choose Pencil powered by
                <span className="bg-gradient-to-r from-[#2901e3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Vicerta
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We’ve built Pencil with input from real teachers to ensure it
                solves real classroom challenges.
              </p>
            </div>
          </ScrollInFromBottom>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoosePencil.map((item, index) => (
              <ScrollInFromBottom delay={index * 0.15}>
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 md:p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <item.icon className="size-6 md:size-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 ">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollInFromBottom>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollInFromBottom delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your <span className="">Teaching</span>?
            </h2>
          </ScrollInFromBottom>
          <ScrollInFromBottom delay={0.2}>
            <p className="text-xl mb-8 opacity-90 text-white">
              Join educators already transforming their work with the help of
              AI. Try it free and see how much time you’ll save.
            </p>
          </ScrollInFromBottom>

          <ScrollInFromBottom delay={0.2}>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 *:w-full *:md:w-72">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">
                  Save 15+ Hours Weekly
                </h3>
                <p className="text-sm text-gray-100">
                  Automate lesson planning and communication
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">
                  Join 20K+ Educators
                </h3>
                <p className="text-sm text-gray-100">
                  Be part of the teaching revolution
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-2 text-white">
                  Improve Student Outcomes
                </h3>
                <p className="text-sm text-gray-100">
                  Data-driven insights for better teaching
                </p>
              </div>
            </div>
          </ScrollInFromBottom>

          <ScrollInFromBottom delay={0.2}>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 bg-white *:text-[#2901e3] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 hover:text-[#2901e3]"
            >
              <span>Start Teaching Smarter Today</span>
              <Sparkles className="ml-3 h-6 w-6 text-[#2901e3]" />
            </Button>

            <p className="text-sm opacity-80 mt-6 text-white">
              Save up to 15 hours every week • Free version • Cancel anytime
            </p>
          </ScrollInFromBottom>
        </div>
      </section>

      <Footer />

      {/* Login Modal */}
      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default PencilPage;
