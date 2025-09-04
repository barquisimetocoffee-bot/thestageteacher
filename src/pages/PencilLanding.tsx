import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  BookOpen,
  Brain,
  Target,
  CheckCircle
} from "lucide-react";

const PencilLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/public/pencil/logo.jpg" alt="Pencil" className="h-8 w-8 rounded-md" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                Pencil
              </span>
              <span className="text-sm text-gray-500 font-medium">by Vicerta</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/pencil">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Learn More
                </Button>
              </Link>
              <Link to="/login#signin">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Sign In
                </Button>
              </Link>
              <Link to="/login#signup">
                <Button className="bg-gradient-to-r from-[#2901b3] to-blue-600 text-white hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Teaching Revolution
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Teaching with{" "}
              <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                AI Magic
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Pencil empowers educators to create engaging lessons, personalized content, and interactive materials in minutes, not hours. 
              Join the AI teaching revolution today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/login#signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#2901b3] to-blue-600 text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Creating Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pencil">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn more about Pencil
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">20K+</div>
                <div className="text-sm text-gray-600">Active Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-600">Lessons Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Teachers Love Pencil
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make lesson planning effortless and teaching more engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#2901b3] to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Lesson Generator</h3>
              <p className="text-gray-600">
                Create comprehensive lesson plans in seconds. Just describe your topic and grade level, and let AI do the heavy lifting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Content</h3>
              <p className="text-gray-600">
                Adapt materials to different learning styles and abilities. Create inclusive content that reaches every student.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Worksheets</h3>
              <p className="text-gray-600">
                Generate engaging worksheets, quizzes, and activities tailored to your curriculum in minutes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Aligned</h3>
              <p className="text-gray-600">
                All content is automatically aligned with educational standards, saving you compliance headaches.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Tools</h3>
              <p className="text-gray-600">
                Share resources with colleagues, build department libraries, and collaborate on lesson planning.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Suggestions</h3>
              <p className="text-gray-600">
                Get AI-powered recommendations for improving engagement, differentiation, and learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-[#2901b3] to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reclaim Your Evenings and Weekends
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Stop spending hours on lesson prep. Pencil reduces planning time by 95%, 
            giving you more time for what matters most - your students and your life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">5 mins</div>
              <div className="opacity-90">Average lesson creation time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">20+ hrs</div>
              <div className="opacity-90">Saved per week</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Curriculum compliant</div>
            </div>
          </div>

          <Link to="/login#signup">
            <Button 
              size="lg" 
              className="bg-white text-[#2901b3] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Vicerta Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The Vicerta Vision
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Today's education system is at a breaking point. Teachers are stretched thin, juggling overwhelming workloads, large class sizes, and the risk of burnout. At the same time, every student needs a personalized approach to truly thrive—a demand that often exceeds a teacher's available time and resources.
            </p>
            
            <p>
              Vicerta was founded to solve this challenge. We're not just a platform; we're the driving force behind a new era of educational innovation. Our mission is to empower educators by reducing time-consuming administrative tasks, allowing them to focus on what matters most: inspiring and engaging their students.
            </p>
            
            <p>
              With our first tool, Pencil, you can get a glimpse of this revolution. Join us as a teacher and experience the beginning of a future where technology supports human connection. Stay tuned for all the new products and tools we have planned.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of educators who've already discovered the power of AI-assisted teaching. 
            Start your free trial today – no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login#signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#2901b3] to-blue-600 text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pencil">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/public/pencil/logo.jpg" alt="Pencil" className="h-8 w-8 rounded-md" />
              <span className="text-xl font-bold">Pencil</span>
              <span className="text-sm text-gray-400">by Vicerta</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Vicerta. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PencilLanding;