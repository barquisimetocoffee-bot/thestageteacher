import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  CheckCircle,
  Users2,
  Lightbulb,
  Sparkles,
  Clock,
  Zap,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Users,
  Target,
  Award,
  Globe,
  Shield,
} from "lucide-react";
import LoginModal from "@/components/auth/LoginModal";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Smart Lesson Planning",
      description:
        "AI-powered lesson plans that adapt to your teaching style and student needs.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Instant Communication",
      description:
        "Generate parent emails, student feedback, and administrative reports in seconds.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Behavior Support",
      description:
        "Tools to manage classroom behavior and create positive learning environments.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description:
        "Differentiate instruction for every student with AI-driven insights.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "5th Grade Teacher",
      content:
        "EasyTeach has completely transformed my workflow. I save 15+ hours every week!",
      rating: 5,
      avatar: "👩‍🏫",
    },
    {
      name: "David Chen",
      role: "High School Math",
      content:
        "The lesson planning tools are incredible. My students are more engaged than ever.",
      rating: 5,
      avatar: "👨‍🏫",
    },
    {
      name: "Emily Rodriguez",
      role: "Elementary Principal",
      content:
        "Our entire teaching staff uses EasyTeach. The efficiency gains are remarkable.",
      rating: 5,
      avatar: "👩‍💼",
    },
  ];

  const stats = [
    { number: "100,000+", label: "Teachers Worldwide", icon: Users2 },
    { number: "15+", label: "Hours Saved Weekly", icon: Clock },
    { number: "50+", label: "AI-Powered Tools", icon: Sparkles },
    { number: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/favicon.png" alt="logo" className="w-8" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                  EasyTeach
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="text-gray-700 hover:text-purple-600 hover:scale-105">
                Features
              </button>
              <button className="text-gray-700 hover:text-purple-600 hover:scale-105">
                Pricing
              </button>
              <Button
                onClick={() => setShowLogin(true)}
                className="my-btn text-white hidden md:block"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-purple-200 text-sm font-medium px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by 100,000+ educators worldwide
            </Badge>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Teaching Made
            <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent block">
              Effortless with AI
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your teaching experience with AI-powered tools that save
            you 15+ hours every week. Create engaging lessons, communicate
            effectively, and focus on what matters most - your students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-60 my-btn group text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Teaching Smarter
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-60 text-black hover:bg-gray-50 hover:text-[#2901B3] px-6 py-6 rounded-xl group"
            >
              <Play className="mr-2 size-5 group-hover:scale-[1.04] transition-all duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-blue-100 p-3 lg:p-8 rounded-md"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-2xl bg-blue-200">
                    <stat.icon className="h-6 w-6 text-[#2901B3]" />
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                {" "}
                Excel
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed specifically for educators, by
              educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      <feature.icon className="size-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 ">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Loved by Teachers
              <Heart className="inline-block h-10 w-10 text-red-500 ml-3 animate-pulse" />
            </h2>
            <p className="text-xl text-gray-600">
              See what educators are saying about EasyTeach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-[#2901B3]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl mb-12 opacity-90 text-gray-200">
            Join thousands of educators who are already saving time and creating
            better learning experiences.
          </p>
          <Button
            size="lg"
            onClick={() => setShowLogin(true)}
            className="bg-white text-purple-600 hover:bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started for Free
            <Sparkles className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold">EasyTeach</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering educators worldwide with AI-powered teaching tools.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default LandingPage;
