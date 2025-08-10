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

const EasyTeachPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { t } = useTranslation();

  // Custom Dashboard Mockup Components
  const LessonPlanDashboard = () => (
    <div className="relative mx-auto max-w-lg">
      <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
        <div className="bg-gray-900 rounded-lg p-2 mb-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
              easyteach.ai/lesson-planner
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden aspect-video relative">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 w-16 h-full bg-white border-r border-purple-100 flex flex-col items-center py-3 space-y-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                <BookText className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <PenTool className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Calculator className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-16 p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800">
                  Lesson Plan Generator
                </h3>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  AI Ready
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-2 mb-3">
                <div className="bg-white rounded-lg p-2 border border-blue-200">
                  <div className="text-xs text-gray-600 mb-1">Subject</div>
                  <div className="text-xs font-medium text-blue-600">
                    Mathematics
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-purple-200">
                  <div className="text-xs text-gray-600 mb-1">Grade Level</div>
                  <div className="text-xs font-medium text-purple-600">
                    5th Grade
                  </div>
                </div>
              </div>

              {/* Floating Tooltips */}
              <div className="absolute top-16 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">
                <Sparkles className="h-2 w-2 inline mr-1" />
                Generate Plan
              </div>
              <div className="absolute bottom-8 left-20 bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Curriculum Aligned
              </div>
            </div>

            {/* AI Status */}
            <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                  <Sparkles className="h-1 w-1 text-white" />
                </div>
                <span className="text-xs text-gray-800 font-medium">
                  AI Generating...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-6 rounded-b-2xl mx-4 shadow-lg"></div>
      <div className="bg-gray-600 h-2 rounded-b-lg mx-8 shadow-md"></div>
    </div>
  );

  const CommunicationDashboard = () => (
    <div className="relative mx-auto max-w-lg">
      <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
        <div className="bg-gray-900 rounded-lg p-2 mb-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
              easyteach.ai/communication
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden aspect-video relative">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 w-16 h-full bg-white border-r border-green-100 flex flex-col items-center py-3 space-y-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-16 p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800">
                  Parent Communication
                </h3>
                <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Smart Draft
                </div>
              </div>

              {/* Email Draft Preview */}
              <div className="bg-white rounded-lg p-2 border border-green-200 mb-2">
                <div className="text-xs text-gray-600 mb-1">To: Parent</div>
                <div className="text-xs text-gray-800">
                  Subject: Emma's Progress Update
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Dear Mr. & Mrs. Johnson...
                </div>
              </div>

              {/* Floating Features */}
              <div className="absolute top-12 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Auto-Generate
              </div>
              <div className="absolute bottom-6 left-20 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Professional Tone
              </div>
            </div>

            {/* AI Assistant */}
            <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded flex items-center justify-center">
                  <Zap className="h-1 w-1 text-white" />
                </div>
                <span className="text-xs text-gray-800 font-medium">
                  Writing Assistant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-6 rounded-b-2xl mx-4 shadow-lg"></div>
      <div className="bg-gray-600 h-2 rounded-b-lg mx-8 shadow-md"></div>
    </div>
  );

  const AnalyticsDashboard = () => (
    <div className="relative mx-auto max-w-lg">
      <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
        <div className="bg-gray-900 rounded-lg p-2 mb-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
              easyteach.ai/analytics
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden aspect-video relative">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 w-16 h-full bg-white border-r border-purple-100 flex flex-col items-center py-3 space-y-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-16 p-4 h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800">
                  Student Analytics
                </h3>
                <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Real-time
                </div>
              </div>

              {/* Analytics Cards */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-white rounded-lg p-2 border border-purple-200">
                  <div className="text-xs text-purple-600 font-bold">85%</div>
                  <div className="text-xs text-gray-600">Engagement</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-pink-200">
                  <div className="text-xs text-pink-600 font-bold">92%</div>
                  <div className="text-xs text-gray-600">Performance</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-white rounded-lg p-2 border border-purple-100">
                <div className="flex items-end space-x-1 h-8">
                  <div
                    className="w-2 bg-purple-400 rounded-t"
                    style={{ height: "60%" }}
                  ></div>
                  <div
                    className="w-2 bg-purple-500 rounded-t"
                    style={{ height: "80%" }}
                  ></div>
                  <div
                    className="w-2 bg-purple-600 rounded-t"
                    style={{ height: "100%" }}
                  ></div>
                  <div
                    className="w-2 bg-pink-400 rounded-t"
                    style={{ height: "70%" }}
                  ></div>
                  <div
                    className="w-2 bg-pink-500 rounded-t"
                    style={{ height: "90%" }}
                  ></div>
                </div>
              </div>

              {/* Floating Insights */}
              <div className="absolute top-16 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Smart Insights
              </div>
              <div className="absolute bottom-8 left-20 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                Predictive Data
              </div>
            </div>

            {/* AI Badge */}
            <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <Brain className="h-1 w-1 text-white" />
                </div>
                <span className="text-xs text-gray-800 font-medium">
                  AI Insights
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-6 rounded-b-2xl mx-4 shadow-lg"></div>
      <div className="bg-gray-600 h-2 rounded-b-lg mx-8 shadow-md"></div>
    </div>
  );

  // EasyTeach specific showcase features
  const easyteachFeatures = [
    {
      title: "AI-Powered Lesson Planning",
      description:
        "Generate comprehensive lesson plans in minutes with our advanced AI that understands curriculum standards and learning objectives.",
      component: LessonPlanDashboard,
      features: [
        "Curriculum-aligned content",
        "Differentiated instruction",
        "Assessment integration",
        "Real-time collaboration",
      ],
    },
    {
      title: "Smart Communication Hub",
      description:
        "Streamline parent communication with AI-generated emails, progress reports, and behavioral updates that maintain professional tone.",
      component: CommunicationDashboard,
      features: [
        "Automated parent emails",
        "Progress tracking",
        "Behavioral reports",
        "Multi-language support",
      ],
    },
    {
      title: "Intelligent Analytics Dashboard",
      description:
        "Get deep insights into student performance, engagement patterns, and learning outcomes with our comprehensive analytics suite.",
      component: AnalyticsDashboard,
      features: [
        "Performance analytics",
        "Engagement tracking",
        "Predictive insights",
        "Custom reporting",
      ],
    },
  ];

  const platformStats = [
    { number: "50+", label: "AI-Powered Tools", icon: Brain },
    { number: "15", label: "Hours Saved Weekly", icon: Clock },
    { number: "100K+", label: "Educators Worldwide", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "AI Assistant Available", icon: Zap },
    { number: "30+", label: "Languages Supported", icon: Target },
  ];

  const whyChooseEasyTeach = [
    {
      icon: Target,
      title: "Purpose-Built for Education",
      description:
        "Unlike generic AI tools, EasyTeach is specifically designed for educators, understanding the unique challenges and requirements of the education sector.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Over 100,000 educators have saved 15+ hours weekly while improving student outcomes and engagement through our platform.",
    },
    {
      icon: Shield,
      title: "Privacy & Security First",
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
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl icon-bg shadow-lg">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">
            <CheckCircle className="h-3 w-3 mr-1" />
            Available Now
          </Badge>
          <div className="w-full text-center flex items-center justify-center">
            <h1 className="lg:w-[70%] text-center text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              EasyTeach: AI-Powered Teaching
              <span className="bg-gradient-to-r from-[#3101e3] to-blue-600 bg-clip-text text-transparent">
                {" "}
                Revolution
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your teaching experience with smart lesson planning,
            instant communication tools, behavior support, and personalized
            learning resources that save you 15+ hours every week.
          </p>
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
            <div className="grid grid-cols-6 lg:grid-cols-6">
              {platformStats.map((stat, index) => (
                <div
                  key={index}
                  className="mr-4 md:mr-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-lg icon-bg">
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

      {/* Feature Showcase with Dashboard Mockups */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Most Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#3101e3] to-blue-600 bg-clip-text text-transparent">
                AI Teaching Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lesson planning to student analytics, EasyTeach provides
              everything educators need in one powerful, AI-driven platform
            </p>
          </div>

          <div className="space-y-20">
            {easyteachFeatures.map((feature, index) => (
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
                  <feature.component />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EasyTeach Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why EasyTeach is the
              <span className="bg-gradient-to-r from-[#2901e3] to-blue-600 bg-clip-text text-transparent">
                {" "}
                Educator's Choice
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by educators, for educators. We understand your challenges
              and provide solutions that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseEasyTeach.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 md:p-4 rounded-2xl icon-bg shadow-lg group-hover:scale-110 transition-transform duration-200">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400">
        <div className="max-w-6xl mx-auto text-center *:text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="">Teaching</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 100,000+ educators who are already saving 15+ hours weekly with
            EasyTeach
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 *:w-full *:md:w-72">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-white">
                Save 15+ Hours Weekly
              </h3>
              <p className="text-sm text-gray-100">
                Automate lesson planning and communication
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-white">
                Join 100K+ Educators
              </h3>
              <p className="text-sm text-gray-100">
                Be part of the teaching revolution
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[300px] h-[200px] flex flex-col items-center justify-center">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-white">
                Improve Student Outcomes
              </h3>
              <p className="text-sm text-gray-100">
                Data-driven insights for better teaching
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setShowLogin(true)}
            className="w-full md:w-72 bg-white *:text-[#2901e3] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 hover:text-[#2901e3]"
          >
            <span>Start Teaching Smarter Today</span>
            <Sparkles className="ml-3 h-6 w-6 text-[#2901e3]" />
          </Button>

          <p className="text-sm opacity-80 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
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

export default EasyTeachPage;
