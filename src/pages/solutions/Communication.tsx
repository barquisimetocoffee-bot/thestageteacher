import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Megaphone,
  Bell,
  Globe,
  Users,
  CheckCircle,
} from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";
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
        <UniversalHeader onShowLogin={() => setShowLogin(true)} />

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="p-3 icon-bg rounded-tr rounded-bl-sm  group-hover:scale-105 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-lg/6 font-bold">{feature.title}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-base/6 pt-2">
                  {feature.description}
                </p>

                {
                  // Feature List
                  feature.feature && (
                    <ul className="mt-4 space-y-2">
                      {feature.feature.map((item, index) => (
                        <li key={index} className="text-gray-600 text-base/6">
                          <CheckCircle
                            className="inline-block mr-2 text-green-600"
                            size={16}
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
              </motion.div>
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
          <ScrollInFromBottom delay={0.2}>
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
          </ScrollInFromBottom>

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
