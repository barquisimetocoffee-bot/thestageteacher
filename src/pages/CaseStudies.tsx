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

const CaseStudies = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "Riverside Elementary: 40% Improvement in Student Engagement",
      school: "Riverside Elementary School",
      type: "Primary Education",
      results: "40% increase in engagement",
      timeframe: "6 months",
      description:
        "How EasyTeach transformed daily classroom activities and parent communication, leading to significant improvements in student participation and academic outcomes.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Metro High School: Reducing Teacher Workload by 15 Hours/Week",
      school: "Metro High School",
      type: "Secondary Education",
      results: "15 hours saved per week",
      timeframe: "3 months",
      description:
        "A comprehensive case study showing how our AI tools streamlined lesson planning, grading, and administrative tasks for a busy high school.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Westfield Academy: Complete Digital Transformation",
      school: "Westfield Academy",
      type: "Independent School",
      results: "100% digital adoption",
      timeframe: "12 months",
      description:
        "From traditional methods to a fully integrated digital ecosystem, see how Westfield Academy revolutionized their approach to education.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80",
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
              <div className="p-4 rounded-3xl icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                <FileText className="size-8 md:size-10 text-white" />
              </div>
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
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-12">
              {caseStudies.map((study, index) => (
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
