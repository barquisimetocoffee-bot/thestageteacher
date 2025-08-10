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
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  Users,
} from "lucide-react";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/Footer";

const DataProtection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [onModelOpen, setOnModelOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const protections = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description:
        "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption.",
    },
    {
      icon: Lock,
      title: "Secure Access Controls",
      description:
        "Multi-factor authentication and role-based permissions ensure only authorized users access sensitive data.",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description:
        "Our platform is built with privacy as a core principle, minimizing data collection and maximizing protection.",
    },
    {
      icon: FileText,
      title: "GDPR Compliance",
      description:
        "Full compliance with European data protection regulations and international privacy standards.",
    },
    {
      icon: Users,
      title: "Data Minimization",
      description:
        "We only collect data that is necessary for educational purposes and delete it when no longer needed.",
    },
  ];

  const gdprRights = [
    "Right to be informed about data collection and use",
    "Right to access personal data we hold",
    "Right to rectification of inaccurate data",
    "Right to erasure (right to be forgotten)",
    "Right to restrict processing",
    "Right to data portability",
    "Right to object to processing",
    "Rights related to automated decision making",
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="p-4 rounded-3xl icon-bg shadow-lg mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Data Protection &
                <span className="bg-gradient-to-r from-[#2901b3] to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  GDPR
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy and data security are our top priorities. Learn how
                we protect your information and comply with global privacy
                regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              How We Protect Your Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {protections.map((protection, index) => (
                <div
                  key={index}
                  className="group bg-white shadow rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <div className="p-3 icon-bg rounded-lg  group-hover:scale-105 transition-transform duration-300">
                        <protection.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-lg/6 font-bold">
                        {protection.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base/6 pt-2">
                    {protection.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GDPR Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your GDPR Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Under the General Data Protection Regulation (GDPR), you have
                specific rights regarding your personal data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gdprRights.map((right, index) => (
                <div className="flex items-center justify-between bg-white/50 backdrop-blur-2xl p-4 rounded-3xl">
                  <span className="size-8 rounded-full mr-4 bg-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-lg">{right}</p>
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="my-btn text-white p-6 rounded-xl">
                Contact Data Protection Officer
              </Button>
            </div>
          </div>
        </section>
      </div>{" "}
      <Footer />
    </>
  );
};

export default DataProtection;
