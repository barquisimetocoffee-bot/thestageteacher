import { Button } from "@/components/ui/button";
import {
  Users,
  CreditCard,
  UserPlus,
  ClipboardCheck,
  Shield,
} from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import ScrollInFromBottom from "@/components/animation/ScrollInFromBottom";
import Footer from "@/components/home/Footer";
import FeatureCard from "@/components/FeatureCard";

const HRPayroll = () => {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: UserPlus,
      image: "/hr/digital-staff-onboarding.jpg",
      title: "Digital Staff Onboarding",
      description:
        "Say goodbye to endless forms and in-person processing. Our platform makes hiring and onboarding a fully digital, paperless experience.",
      feature: [
        "Custom Onboarding Portals – Send new hires a secure link to upload documents, fill forms, and sign contracts electronically.",
        "Role-Based Access – Automatically assign system permissions based on position (teachers, administrators, support staff).",
        "Faster Integration – Give new employees instant access to resources, policies, and training materials so they can be productive from day one.",
      ],
    },
    {
      icon: CreditCard,
      image: "/hr/payroll-automation.jpg",
      title: "Payroll Automation",
      description:
        "No more manual calculations, compliance headaches, or last-minute payroll rush.",
      feature: [
        "Automated Salary Processing – Handle full-time, part-time, and hourly payroll with built-in tax and benefits calculations.",
        "Multiple Payment Schedules – Support different pay cycles for teaching and non-teaching staff.",
        "Error-Free Compliance – Ensure every payment meets local labor laws and regulations.",
      ],
    },
    {
      icon: ClipboardCheck,
      image: "/hr/attendance-leave-management.jpg",
      title: "Attendance & Leave Management",
      description:
        "Track attendance and leave requests with precision — no more chasing signatures or juggling calendars.",
      feature: [
        "Smart Clock-In Options – Web, mobile, or biometric attendance tracking.",
        "Real-Time Absence Tracking – View who’s in, who’s out, and approve leave requests instantly.",
        "Automated Reporting – Generate attendance summaries for payroll and compliance.",
      ],
    },
    {
      icon: Users,
      image: "/hr/performance-evaluation.jpg",
      title: "Performance Evaluation",
      description:
        "Support professional growth with structured, fair, and data-backed evaluations.",
      feature: [
        "Custom Evaluation Templates – Tailor performance reviews for teachers, administrators, and support staff.",
        "360° Feedback – Incorporate feedback from peers, students, and supervisors.",
        "Actionable Insights – Identify training needs and track improvement over time.",
      ],
    },
    {
      icon: Shield,
      image: "/hr/compliance-records.jpg",
      title: "Compliance & Records",
      description: "Stay audit-ready without digging through filing cabinets.",
      feature: [
        "Secure Digital Records – Store contracts, certifications, and HR documents in one place.",
        "Automated Alerts – Get notified before certifications expire or compliance deadlines approach.",
        "Role-Based Security – Control who can access sensitive HR data, with full audit logs for transparency.",
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
                <Users className="size-8 md:size-10 text-white" />
              </div>
            </ScrollInFromBottom>
            <ScrollInFromBottom delay={0.3}>
              <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold bg-gradient-to-tr from-[#2901B3] to-blue-600 bg-clip-text text-transparent mb-6">
                HR & Payroll{" "}
                <span className="text-gray-800">
                  – Smarter Workforce Management for Schools
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Managing school staff should be simple, efficient, and accurate
                — not buried in spreadsheets and paperwork. <br />
                Our AI-powered HR & Payroll module streamlines the entire
                employee lifecycle, from digital onboarding to payroll
                automation, so your team can focus on building a thriving school
                environment.
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
                Ready to Modernize Your HR?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Focus on people, not paperwork with automated HR solutions.
              </p>
              <Button
                size="lg"
                onClick={() => setShowLogin(true)}
                className="w-full md:w-72 my-btn text-white p-6"
              >
                Transform HR & Payroll Now
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

export default HRPayroll;
