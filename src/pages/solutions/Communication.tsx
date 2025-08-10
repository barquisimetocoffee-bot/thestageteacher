import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Megaphone, Bell, Globe, Users, ArrowRight, Target, Zap, Video, Send } from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";

import communicationHero from "@/assets/solutions/communication-hero.jpg";

import Footer from "@/components/home/Footer";

const Communication = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Megaphone,

      title: "Mass Announcements",
      description:
        "Send announcements via email, SMS, or in-app notifications instantly",
    },
    {
      icon: Bell,
      title: "Automated Alerts",
      description:
        "Smart alerts for attendance, grades, deadlines, and important events",
    },
    {
      icon: MessageSquare,
      title: "Two-Way Communication",
      description:
        "Direct communication portals between teachers, parents, and students",
    },
    {
      icon: Globe,
      title: "Language & Accessibility",
      description:
        "Built-in translation and accessibility features for inclusive communication",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-full mb-6">
              <MessageSquare className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Communication Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect every member of your school community with intelligent,
              real-time communication tools.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-base/6 pt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why it Matters Section */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Build stronger relationships between school and home. Effective
            communication ensures that no one is left out of the loop and every
            stakeholder stays informed, engaged, and empowered.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Connected School Community
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <Megaphone className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Instant
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Mass Communication
                </p>
              </div>
              <div>
                <Bell className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Smart
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Automated Alerts
                </p>
              </div>
              <div>
                <Users className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Inclusive
                </h3>
                <p className="text-gray-200 text-xs md:text-base">
                  Multi-Language Support
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed">
              {t("solutions.communication.whyItMatters.description")}
            </p>
          </div>


          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Connect Your Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Build stronger relationships with powerful communication tools.
            </p>
            <Button
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full md:w-72 my-btn p-6"
            >
              Improve School Communication
            </Button>
          </div>
        </div>

        {showLogin && (
          <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Communication;
