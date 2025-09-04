import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  FileText,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/home/Footer";
import Navigation from "@/components/home/Navigation";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "Lincoln Elementary: 45% Increase in Reading Comprehension",
      school: "Lincoln Elementary School",
      type: "Primary Education - K-5",
      results: "45% improvement in reading scores",
      timeframe: "8 months",
      description:
        "Lincoln Elementary integrated AI-powered reading assessment tools and personalized learning paths. Teachers used predictive analytics to identify at-risk students early and provide targeted interventions, resulting in significant improvements in literacy rates across all grade levels.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Roosevelt High: Reduced Teacher Burnout by 60% with AI Assistance",
      school: "Roosevelt High School",
      type: "Secondary Education - 9-12",
      results: "60% reduction in teacher overtime",
      timeframe: "5 months",
      description:
        "Roosevelt High implemented AI-powered grading systems, automated lesson planning tools, and smart scheduling. Teachers reported significant reduction in administrative workload, allowing more time for student interaction and creative curriculum development.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Brookfield University: 30% Improvement in Student Retention",
      school: "Brookfield University",
      type: "Higher Education",
      results: "30% increase in graduation rates",
      timeframe: "18 months",
      description:
        "Brookfield University deployed AI-driven early warning systems to predict student dropout risk. Combined with personalized learning pathways and automated tutoring systems, they achieved remarkable improvements in student success and retention rates.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Greenwood Charter: Closing the Achievement Gap with Adaptive Learning",
      school: "Greenwood Charter School",
      type: "K-8 Charter School",
      results: "25% reduction in achievement gap",
      timeframe: "12 months",
      description:
        "Greenwood Charter used AI-powered adaptive learning platforms to provide personalized instruction for students from diverse backgrounds. The system adjusted difficulty levels in real-time and provided teachers with actionable insights to support struggling learners.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Valley Community College: Streamlined Administrative Operations",
      school: "Valley Community College",
      type: "Community College",
      results: "40% reduction in processing time",
      timeframe: "6 months",
      description:
        "Valley Community College implemented AI-powered enrollment management, automated transcript processing, and intelligent scheduling systems. This resulted in faster student services and allowed staff to focus on student support and engagement activities.",
      image:
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <>
      <Navigation onShowLogin={() => setOnModelOpen(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <ScrollInFromBottom delay={0.2}>
                <div className="p-4 rounded-tr rounded-bl-sm  icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                  <FileText className="size-8 md:size-10 text-white" />
                </div>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.3}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Case
                  <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Studies
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how schools worldwide are transforming education with
                  Ecerta's innovative solutions.
                </p>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-8">
              {caseStudies.map((study, index) => (
                <ScrollInFromBottom key={index}>
                  <Card
                    key={index}
                    className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 overflow-hidden animate-fade-in border border-gray-100"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3">
                        <img
                          src={study.image}
                          alt={study.school}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-2/3 p-4 md:p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            {study.type}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {study.timeframe}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-4">
                          {study.school}
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {study.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-green-600 font-semibold">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            {study.results}
                          </div>
                          <Button className="my-btn group text-white">
                            Read Full Study
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollInFromBottom>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
