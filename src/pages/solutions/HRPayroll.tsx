import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  CreditCard,
  UserPlus,
  ClipboardCheck,
  Shield,
  ArrowRight,
  Target,
  Zap,
  Calendar,
  FileSearch,
  CheckCircle,
} from "lucide-react";

import UniversalHeader from "@/components/layout/UniversalHeader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "@/components/auth/LoginModal";
import hrHero from "@/assets/solutions/hr-payroll-hero.jpg";
import Footer from "@/components/home/Footer";

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
            <div className="inline-flex items-center justify-center size-16 md:size-20 icon-bg rounded-tr rounded-bl-sm mb-6">
              <Users className="size-8 md:size-10 text-white" />
            </div>
            <h1 className="text-3xl w-full md:w-[80%] md:mx-auto md:block md:text-5xl font-bold text-gray-900 mb-6">
              HR & Payroll – Smarter Workforce Management for Schools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Managing school staff should be simple, efficient, and accurate —
              not buried in spreadsheets and paperwork. <br />
              Our AI-powered HR & Payroll module streamlines the entire employee
              lifecycle, from digital onboarding to payroll automation, so your
              team can focus on building a thriving school environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
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
                    <ul className="mt-4 space-y-2 *:text-gray-600 *:text-sm">
                      {feature.feature.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 text-base/6 flex gap-2"
                        >
                          <span>
                            <CheckCircle
                              className="inline-block mt-1 text-green-600"
                              size={16}
                            />
                          </span>
                          <p> {item}</p>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </div>
            ))}
          </div>

          {/* Why it Matters Section */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why it Matters
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Streamline HR operations while staying compliant with regulatory
            standards. Automating payroll and personnel records frees up time
            for your team to focus on people, not paperwork.
          </p>
        </div> */}

          {/* Benefits */}
          <div className="bg-[#2901b3] rounded-2xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Streamlined HR Operations
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              <div>
                <CreditCard className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Automated
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Payroll Processing
                </p>
              </div>
              <div>
                <Shield className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  100%
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Compliance Ready
                </p>
              </div>
              <div>
                <ClipboardCheck className="size-8 md:size-12 text-white mx-auto mb-4" />
                <h3 className="text-base/5 md:text-xl font-semibold mb-2 text-white">
                  Digital
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Record Management
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
