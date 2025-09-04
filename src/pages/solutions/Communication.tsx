import { Button } from "@/components/ui/button";
import { MessageSquare, Megaphone, Bell, Globe } from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import Footer from "@/components/home/Footer";
import FeatureCard from "@/components/FeatureCard";

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
      image: "/communication/mass-announcements.jpg",
      title: "Mass Announcements",
      description:
        "Deliver important updates instantly across your school community.",
      feature: [
        "Send messages to all students, parents, and staff in one click.",
        "Choose channels — email, SMS, mobile app notifications, or all at once.",
        "Schedule announcements in advance for planned events or reminders.",
        "Track delivery and open rates to ensure your message is received.",
      ],
    },
    {
      icon: Bell,
      image: "/communication/automated-alerts.jpg",
      title: "Automated Alerts",
      description:
        "Let the system handle routine notifications so you don’t have to.",
      feature: [
        "Instant alerts for attendance issues, upcoming deadlines, or fee payments.",
        "Customize triggers for specific events or student activities.",
        "Send emergency notifications without delay.",
        "Reduce communication gaps between departments, parents, and students.",
      ],
    },
    {
      icon: MessageSquare,
      image: "/communication/two-way-communication.jpg",
      title: "Two-Way Communication",
      description:
        "Move beyond one-sided announcements — create real conversations.",
      feature: [
        "Allow parents to respond directly to teachers or administrators.",
        "Enable students to communicate securely with approved school channels.",
        "Centralize all messages in one platform for easy tracking.",
        "Maintain full privacy and control over who can initiate or reply.",
      ],
    },
    {
      icon: Globe,
      image: "/communication/language-accessibility.jpg",
      title: "Language & Accessibility",
      description:
        "Make sure every message is understood and accessible to all.",
      feature: [
        "Automatic translation into multiple languages for diverse school communities.",
        "Text-to-speech and speech-to-text support for accessibility needs.",
        "Mobile-friendly layouts for better readability on any device.",
        "Compliance with accessibility standards for inclusive communication.",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <UniversalHeader />

        <div className="container mx-auto px-4 py-6 md:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <ScrollInFromBottom delay={0.2}>
              <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
                <MessageSquare className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                Communication{" "}
                <span className="text-gray-800">
                  – Keep Your School Connected, Anytime, Anywhere
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Seamless communication is the heartbeat of a successful school.
                Our Communication module ensures that important information
                reaches the right people at the right time — whether you’re
                making an urgent announcement or keeping parents updated on
                student progress.
              </p>
            </ScrollInFromBottom>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4 mb-16">
            {features.map((feature, index) => (
              <FeatureCard index={index} cardData={feature} />
            ))}
          </div>

          {/* CTA Section */}
          <ScrollInFromBottom delay={0.3}>
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
          </ScrollInFromBottom>
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
