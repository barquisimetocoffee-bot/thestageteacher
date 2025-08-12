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
      title: "The Future of AI in Education: What Teachers Need to Know",
      excerpt:
        "Exploring how artificial intelligence is reshaping the classroom and what educators should prepare for in the coming years.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Education",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "10 Ways to Reduce Teacher Burnout with Technology",
      excerpt:
        "Practical strategies and tools that can help educators save time, reduce stress, and focus on what matters most - teaching.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Teacher Wellness",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title:
        "Building Stronger Parent-Teacher Relationships in the Digital Age",
      excerpt:
        "How modern communication tools are helping create more meaningful connections between home and school.",
      author: "Emma Rodriguez",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Communication",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Personalized Learning: Making Every Student Count",
      excerpt:
        "Discover how adaptive technology is helping teachers meet the individual needs of every learner in their classroom.",
      author: "Prof. David Kim",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Personalized Learning",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
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
              <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                <BookOpen className="size-8 md:size-10 text-white" />
              </div>
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
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {blogPosts.map((post, index) => (
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
