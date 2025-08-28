import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";
import {
  Building2,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import { motion } from "framer-motion";

const SchoolAdministration = () => {
  const [onShowLogin, setOnShowLogin] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleJoinWaitlist = () => {
    setWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setWaitlistModalOpen(false);
  };

  const features = [
    {
      icon: Users,
      title: t("schoolAdmin.features.sis.title"),
      description: t("schoolAdmin.features.sis.description"),
    },
    {
      icon: DollarSign,
      title: t("schoolAdmin.features.financial.title"),
      description: t("schoolAdmin.features.financial.description"),
    },
    {
      icon: Calendar,
      title: t("schoolAdmin.features.scheduling.title"),
      description: t("schoolAdmin.features.scheduling.description"),
    },
    {
      icon: MessageSquare,
      title: t("schoolAdmin.features.communication.title"),
      description: t("schoolAdmin.features.communication.description"),
    },
    {
      icon: BarChart3,
      title: t("schoolAdmin.features.analytics.title"),
      description: t("schoolAdmin.features.analytics.description"),
    },
    {
      icon: Shield,
      title: t("schoolAdmin.features.security.title"),
      description: t("schoolAdmin.features.security.description"),
    },
  ];

  const modules = [
    t("schoolAdmin.modules.admissions"),
    t("schoolAdmin.modules.records"),
    t("schoolAdmin.modules.staff"),
    t("schoolAdmin.modules.financial"),
    t("schoolAdmin.modules.portal"),
    t("schoolAdmin.modules.reporting"),
  ];

  return (
    <>
      <Navigation onShowLogin={() => setOnShowLogin(true)} />
      <div
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <ScrollInFromBottom delay={0.2}>
                <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow-lg mx-auto size-16 md:size-20 flex items-center justify-center mb-6">
                  <Building2 className="size-8 md:size-10 text-white" />
                </div>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.3}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  School
                  <span className=" bg-gradient-to-r from-[#2903b1] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                  </span>
                </h1>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.4}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  {t("products.schoolAdminDesc")}
                </p>
              </ScrollInFromBottom>
              <ScrollInFromBottom delay={0.4}>
                <Button 
                  onClick={handleJoinWaitlist}
                  className="w-full md:w-72 my-btn group text-white p-6 rounded-xl"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Complete Administrative{" "}
              <span className="bg-gradient-to-r from-[#2903b1] to-blue-600 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-4 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                  className="group bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-tr rounded-bl-sm p-8 hover:shadow-lg transition-shadow duration-300"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Integrated Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {modules.map((module, index) => (
                <ScrollInFromBottom delay={index * 0.3}>
                  <div
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="size-5 md:size-6 text-green-500 mr-3 flex-shrink-0" />
                    {module}
                  </div>
                </ScrollInFromBottom>
              ))}
            </div>

            <Button 
              onClick={handleJoinWaitlist}
              className="w-full md:w-72 my-btn text-white p-6 rounded-xl"
            >
              Request Demo
            </Button>
          </div>
        </section>
      </div>
      <Footer />
      
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={closeWaitlistModal}
        productName="School Administration"
      />
    </>
  );
};

export default SchoolAdministration;
