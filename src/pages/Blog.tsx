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
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";
import Footer from "@/components/home/Footer";
import Navigation from "@/components/home/Navigation";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      title: "AI in Education: Benefits, Challenges, and Best Practices for 2024",
      excerpt:
        "Explore how AI is transforming classrooms with personalized learning experiences, while addressing key challenges like data privacy and the importance of maintaining human connection in education.",
      author: "Dr. Sarah Martinez",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI & Education",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "7 AI Tools Every Teacher Should Know About in 2024",
      excerpt:
        "From automated grading systems to intelligent tutoring platforms, discover the essential AI tools that are helping educators save time and enhance student learning outcomes.",
      author: "Michael Chen",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "EdTech Tools",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Building AI Literacy: A Comprehensive Guide for Educators",
      excerpt:
        "Learn essential strategies for integrating AI education into your curriculum, helping students develop critical thinking skills about artificial intelligence and its societal impact.",
      author: "Dr. Emma Rodriguez",
      date: "November 20, 2024",
      readTime: "10 min read",
      category: "Digital Literacy",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Ethical AI in the Classroom: Navigating Privacy and Bias Concerns",
      excerpt:
        "Understanding the ethical implications of AI in education, including student data protection, algorithmic bias, and creating inclusive learning environments with responsible AI use.",
      author: "Prof. David Kim",
      date: "November 10, 2024",
      readTime: "7 min read",
      category: "AI Ethics",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Personalized Learning at Scale: How AI is Revolutionizing Education",
      excerpt:
        "Discover how artificial intelligence enables truly personalized education experiences, adapting to individual learning styles, pace, and preferences to maximize student success.",
      author: "Jessica Thompson",
      date: "October 25, 2024",
      readTime: "9 min read",
      category: "Personalized Learning",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "The Future of Assessment: AI-Powered Evaluation Methods",
      excerpt:
        "Exploring innovative assessment techniques powered by AI, including real-time feedback systems, automated essay scoring, and competency-based evaluation methods.",
      author: "Dr. Rachel Park",
      date: "October 15, 2024",
      readTime: "6 min read",
      category: "Assessment",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80",
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
                <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                  <BookOpen className="size-8 md:size-10 text-white" />
                </div>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.3}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Education
                  <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Blog
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Insights, tips, and trends from the world of educational
                  technology and modern teaching.
                </p>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {blogPosts.map((post, index) => (
                <ScrollInFromBottom key={index * 0.2}>
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-gray-900  line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 rounded-full size-8 bg-blue-100 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                          <ArrowRight className="h-4 w-4 " />
                        </button>
                      </div>
                    </CardContent>
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

export default Blog;
