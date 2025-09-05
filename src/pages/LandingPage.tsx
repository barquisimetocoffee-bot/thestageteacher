import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users2,
  Clock,
  Sparkles,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Target,
  Users,
  Zap,
  Award,
  Shield,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import lessonPlanImage from "@/assets/lesson-plan-generator.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Generate lesson plans in minutes",
      description: "AI-powered planning that adapts to your teaching style and curriculum requirements",
    },
    {
      icon: Target,
      title: "Create differentiated resources",
      description: "Automatically generate materials for every ability level in your classroom",
    },
    {
      icon: CheckCircle,
      title: "Automate quizzes, rubrics, and assessments",
      description: "Build engaging assessments that provide meaningful feedback instantly",
    },
    {
      icon: MessageCircle,
      title: "Draft emails and reports instantly",
      description: "Professional communication with parents and colleagues in seconds",
    },
    {
      icon: Award,
      title: "Keep control over how students use AI",
      description: "Guidance and frameworks for ethical AI use in your classroom",
    },
  ];

  const problems = [
    {
      title: "Endless lesson planning late at night",
      description: "Spending precious personal time creating materials instead of resting",
    },
    {
      title: "Piles of marking and admin",
      description: "Weekends stolen by administrative tasks that could be automated",
    },
    {
      title: "Managing AI tools your students use",
      description: "Often with no guidance on how to use them effectively and ethically",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign up free with your school email",
      description: "Quick verification process designed specifically for educators",
      time: "30 seconds",
    },
    {
      number: "02", 
      title: "Create your first lesson plan or quiz",
      description: "Follow our guided setup to generate your first AI-powered resource",
      time: "Under 2 minutes",
    },
    {
      number: "03",
      title: "Save hours every week",
      description: "Watch as Pencil transforms your workflow and gives you back your evenings",
      time: "Ongoing benefits",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/pencil/logo.jpg" alt="Pencil logo" className="w-8 h-8 rounded" />
              <div>
                <h1 className="text-2xl font-bold text-blue-600">
                  Pencil
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/login#signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-sm font-medium px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Your Personal Teaching Assistant
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pencil
                <span className="block text-gray-800">
                  Less Burnout.
                </span>
                <span className="block text-gray-800">
                  More Teaching.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pencil saves you hours of lesson planning, content crafting, and admin — so you can focus on what matters most: your students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => navigate('/login#signup')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg group"
                >
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-200" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/pencil')}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  20,000+ teachers
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  2-minute setup
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Pencil AI Interface</h3>
                  <p className="mb-6">Create curriculum-aligned lesson plans in minutes</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-left">
                      <p className="text-sm opacity-90 mb-2">📝 Lesson Plan Generator</p>
                      <p className="text-sm opacity-90 mb-2">🎯 Grade: 5th Grade Math</p>
                      <p className="text-sm opacity-90 mb-2">⏱️ Duration: 45 minutes</p>
                      <p className="text-sm opacity-90">📊 Standards: Common Core</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Hours Saved!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                AI-Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Reality of Teaching Today
            </h2>
            <h3 className="text-xl text-gray-600 mb-8">
              We get it — teaching today feels overwhelming.
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You became a teacher to inspire and educate, not to drown in endless administrative tasks and late-night planning sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h4>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "I love teaching, but I'm exhausted by everything else that comes with it."
            </blockquote>
            <cite className="text-gray-600">— Sarah K, Primary School Teacher</cite>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-sm font-medium px-4 py-2 mb-6">
              Meet Your Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Pencil: your Personal co-teacher.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed by educators, for educators. Pencil understands the unique challenges you face and provides AI-powered solutions that actually work in real classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium">
                AI Assistant Active
              </div>
            </div>
            <div className="mb-4">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-lg font-semibold text-gray-900">
                Lesson plan generated in 47 seconds
              </p>
              <p className="text-gray-600">
                Saved you approximately 2.5 hours
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">2.5 hours</div>
              <div className="text-green-700 font-medium">Time Saved!</div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Saving Time Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of teachers who've reclaimed their evenings
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <blockquote className="text-xl text-gray-700 mb-6">
                "Teachers shouldn't burn out just to keep up. Pencil feels like having an assistant who actually gets schools."
              </blockquote>
              <div className="flex items-center">
                <div className="text-3xl mr-4">👩‍🏫</div>
                <div>
                  <div className="font-semibold text-gray-900">Coline G</div>
                  <div className="text-gray-600">Headteacher, UK Pilot Partner</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <blockquote className="text-xl text-gray-700 mb-6">
                "Since implementing Pencil, our teachers report 40% less time spent on admin tasks and significantly improved work-life balance."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Verified UK School</div>
                  <div className="text-gray-600">6 Months Using Pencil</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">150+</div>
                  <div className="text-green-700 text-sm">Teachers Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3 Steps to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              From sign-up to your first saved hour in under 5 minutes. It's that simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="text-sm font-medium text-blue-600">
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to reclaim your evenings?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the 20,000 teachers who've already transformed their workflow with Pencil
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={() => navigate('/login#signup')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/pencil')}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No contracts
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the 20,000 teachers shaping the future of AI in education.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            No credit card. No contracts. Just a tool designed to give teachers their time back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users2 className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Trusted Community</h3>
              <p className="text-blue-100">20,000+ educators worldwide</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-blue-100">Your data stays protected</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Instant Impact</h3>
              <p className="text-blue-100">See results from day one</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <Button
              size="lg"
              onClick={() => navigate('/login#signup')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg mb-4"
            >
              Get Started Free Today
            </Button>
            
            <div className="text-sm text-blue-100 space-y-1">
              <p>Free forever plan available</p>
              <p>Setup takes under 2 minutes</p>
              <p>Cancel anytime</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-lg font-semibold mb-2">Want to see Pencil in action first?</p>
              <Button
                variant="outline"
                onClick={() => navigate('/pencil')}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Schedule a Personal Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <img src="/pencil/logo.jpg" alt="Pencil logo" className="w-8 h-8 rounded" />
            <span className="text-2xl font-bold">Pencil</span>
          </div>
          <p className="text-gray-400 mb-6">
            by Vicerta - Empowering educators worldwide with AI-powered teaching tools.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
