import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Search,
  HelpCircle,
  BookOpen,
  Video,
  FileText,
  MessageCircle,
  ArrowDownRight,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";
import ScrollInFromLeft from "@/components/animation/ScrollInFromLeft";

const KnowledgeBase = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      title: "Getting Started",
      description: "Basic setup and first steps with Ecerta",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      articles: 12,
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: Video,
      color: "from-purple-500 to-purple-600",
      articles: 8,
    },
    {
      title: "Feature Guides",
      description: "Detailed explanations of all features",
      icon: FileText,
      color: "from-green-500 to-green-600",
      articles: 24,
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and answers",
      icon: HelpCircle,
      color: "from-orange-500 to-orange-600",
      articles: 18,
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and problems",
      icon: MessageCircle,
      color: "from-red-500 to-red-600",
      articles: 15,
    },
  ];

  const featureGuides = [
    {
      title: "Lesson Plan Generator",
      purpose:
        "Create comprehensive, curriculum-aligned lesson plans in minutes",
      features: [
        "AI-powered content generation",
        "Curriculum alignment",
        "Multiple format exports",
        "Differentiation suggestions",
      ],
      steps: [
        "Select your grade level and subject",
        "Enter your lesson topic or learning objective",
        "Choose lesson duration and format preferences",
        "Review and customize the generated plan",
        "Export or save to your teaching library",
      ],
    },
    {
      title: "Parent Email Generator",
      purpose:
        "Craft professional, personalized emails to parents about student progress",
      features: [
        "Tone customization",
        "Situation-specific templates",
        "Multiple language support",
        "Progress tracking integration",
      ],
      steps: [
        "Select the type of communication (positive, concern, general update)",
        "Choose the student and relevant details",
        "Customize the tone and key points",
        "Review the generated email",
        "Send directly or copy to your email client",
      ],
    },
    {
      title: "Behavior Plan Generator",
      purpose:
        "Develop effective behavior intervention strategies for individual students",
      features: [
        "Evidence-based strategies",
        "Goal setting",
        "Progress monitoring",
        "Stakeholder collaboration",
      ],
      steps: [
        "Document the target behavior and current patterns",
        "Set specific, measurable goals",
        "Choose intervention strategies",
        "Define success metrics and timeline",
        "Share with relevant stakeholders",
      ],
    },
    {
      title: "AI Text Detector",
      purpose: "Identify AI-generated content in student submissions",
      features: [
        "High accuracy detection",
        "Detailed analysis reports",
        "Bulk processing",
        "Integration with grading systems",
      ],
      steps: [
        "Upload or paste the text to analyze",
        "Select analysis depth and parameters",
        "Review the detection results",
        "Access detailed analysis breakdown",
        "Generate reports for record-keeping",
      ],
    },
    {
      title: "Assessment Builder",
      purpose:
        "Create customized quizzes, tests, and rubrics aligned with learning objectives",
      features: [
        "Question bank integration",
        "Automatic grading",
        "Analytics dashboard",
        "Accessibility options",
      ],
      steps: [
        "Define assessment type and learning objectives",
        "Add questions from bank or create new ones",
        "Set grading criteria and rubrics",
        "Configure timing and accessibility settings",
        "Deploy to students and monitor results",
      ],
    },
    {
      title: "Differentiation Planner",
      purpose:
        "Adapt lessons and activities for diverse learning needs and abilities",
      features: [
        "Learning style accommodations",
        "Multi-level activities",
        "Resource suggestions",
        "IEP integration",
      ],
      steps: [
        "Identify student learning profiles",
        "Select the content or skill to differentiate",
        "Choose differentiation strategies",
        "Generate adapted materials and activities",
        "Track student progress and adjust as needed",
      ],
    },
  ];

  const popularArticles = [
    "How to create your first lesson plan with EasyTeach",
    "Setting up parent communication preferences",
    "Understanding behavior tracking features",
    "Customizing your classroom dashboard",
    "Integrating with existing school systems",
  ];

  return (
    <>
      <Navigation onShowLogin={() => setOnModelOpen(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50  to-blue-100 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <ScrollInFromBottom delay={0.2}>
                <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                  <HelpCircle className="size-8 md:size-10 text-white" />
                </div>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.3}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Knowledge
                  <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Base
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Find answers, tutorials, and guides to help you get the most
                  out of Ecerta's educational platform.
                </p>
              </ScrollInFromBottom>

              {/* Search Bar */}
              <ScrollInFromBottom delay={0.4}>
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search for help articles, guides, or tutorials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none"
                  />
                </div>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="group bg-white shadow rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-lg/6 font-bold">{category.title}</h2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base/6 pt-2">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <ScrollInFromLeft delay={index * 0.2}>
                  <div
                    key={index}
                    className="bg-white/50 backdrop-blur-2xl group border-none hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in p-4 md:p-6 rounded-md md:rounded-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base/6 md:text-lg font-medium md:font-semibold text-gray-900 ">
                        {article}
                      </h3>
                      <div className="text-blue-500  group">
                        <ArrowDownRight
                          size={26}
                          className="group-hover:-rotate-45 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>{" "}
                </ScrollInFromLeft>
              ))}
            </div>
          </div>
        </section>
      </div>{" "}
      <Footer />
    </>
  );
};

export default KnowledgeBase;
