import { useTranslation } from "react-i18next";
import { Zap, CheckCircle } from "lucide-react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";

const PartnersIntegrations = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const integrations = [
    {
      name: "Google Workspace",
      description:
        "Seamless integration with Google Classroom, Drive, and Calendar",
      logo: "/partners/google.svg",
      category: "Productivity",
    },
    {
      name: "Microsoft 365",
      description: "Connect with Teams, OneDrive, and Office applications",
      logo: "/partners/microsoft.svg",
      category: "Productivity",
    },
    {
      name: "Zoom",
      description: "Integrated video conferencing for virtual classrooms",
      logo: "/partners/zoom.svg",
      category: "Communication",
    },
    {
      name: "Khan Academy",
      description: "Access to educational content and learning resources",
      logo: "/partners/khan.svg",
      category: "Education",
    },
  ];

  const partners = [
    {
      name: "Educational Technology Alliance",
      description: "Leading consortium of EdTech innovators and advocates",
      type: "Technology Partner",
    },
    {
      name: "Global Schools Network",
      description: "International network of progressive schools",
      type: "Education Partner",
    },
    {
      name: "Teacher Training Institute",
      description: "Professional development and certifications",
      type: "Training Partner",
    },
  ];

  return (
    <>
      <Navigation onShowLogin={() => setShowLogin(true)} />

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
                  <Zap className="size-8 md:size-10 text-white" />
                </div>
              </ScrollInFromBottom>

              <ScrollInFromBottom delay={0.3}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Partners &
                  <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Integrations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Seamlessly connect with the tools you already use and trust.
                  Our extensive network of partners ensures you get the best
                  educational experience.
                </p>
              </ScrollInFromBottom>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-12">
              Platform Integrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {integrations.map((integration, index) => (
                <ScrollInFromBottom delay={index * 0.1} key={index}>
                  <Card
                    key={index}
                    className="border border-gray-100 group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <img
                          src={integration.logo}
                          alt={integration.name}
                          className="w-16 h-16 rounded-lg object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 ">
                        {integration.name}
                      </CardTitle>
                      <div className="text-xs text-[#2901b3] font-medium bg-blue-100 px-2 py-1 rounded-full w-fit mx-auto">
                        {integration.category}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center text-sm">
                        {integration.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollInFromBottom>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Strategic Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {partners.map((partner, index) => (
                <ScrollInFromBottom delay={index * 0.1} key={index}>
                  <Card
                    key={index}
                    className="group border-none hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col justify-between">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {partner.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {partner.description}
                          </p>
                          <div className="flex items-center justify-between pt-4">
                            <span className="text-sm text-[#2901b3] font-medium bg-blue-100 px-3 py-1 rounded-full">
                              {partner.type}
                            </span>
                            <CheckCircle className="size-4 md:size-8 text-blue-500" />
                          </div>
                        </div>
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

export default PartnersIntegrations;
