import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
} from "lucide-react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrConnectivity } from "react-icons/gr";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
interface EcertaShowcaseProps {
  onShowLogin: () => void;
}

const EcertaShowcase = ({ onShowLogin }: EcertaShowcaseProps) => {
  const { t } = useTranslation();

  const ecosystemFeatures = [
    {
      title: t("showcase.consolidatedAI"),
      description: t("showcase.consolidatedAIDesc"),
      image: "./home/showcase1.svg",
      icon: GiArtificialIntelligence,
      features: [
        "Cross-platform learning",
        "Shared intelligence",
        "Continuous improvement",
        "Predictive insights",
      ],
    },
    {
      title: t("showcase.seamlessIntegration"),
      description: t("showcase.seamlessIntegrationDesc"),
      image: "./home/showcase2.svg",
      icon: GrConnectivity,
      features: [
        "Data synchronization",
        "Single sign-on",
        "Unified analytics",
        "Shared resources",
      ],
    },
    {
      title: t("showcase.revolutionaryImpact"),
      description: t("showcase.revolutionaryImpactDesc"),
      image: "./home/showcase3.svg",
      icon: HiOutlineSparkles,
      features: [
        "Industry transformation",
        "Future-ready solutions",
        "Global accessibility",
        "Scalable architecture",
      ],
    },
  ];

  const whyEcerta = [
    {
      icon: FaProjectDiagram,
      title: t("showcase.completeEcosystem"),
      description: t("showcase.completeEcosystemDesc"),
    },
    {
      icon: FaInfinity,
      title: t("showcase.exponentialGrowth"),
      description: t("showcase.exponentialGrowthDesc"),
    },
    {
      icon: FaGraduationCap,
      title: t("showcase.globalTransformation"),
      description: t("showcase.globalTransformationDesc"),
    },
  ];

  return (
    <>
      {/* Ecerta Platform Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("showcase.drivingForce")}
              <span className="bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
                {" "}
                {t("showcase.behindEducation")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("showcase.platformDescription")}
            </p>
          </div>

          <div className="space-y-4 md:space-y-20">
            {ecosystemFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-3 rounded-xl md:bg-transparent md:p-0 md:rounded-none flex flex-col-reverse lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-tr rounded-bl-sm  icon-bg shadow-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2901B3]">
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-lg text-gray-600 leading-relaxed animate-fade-in"
                    style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
                  >
                    {feature.description}
                  </p>
                  <div
                    className="grid grid-cols-2 gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.3 + 0.4}s` }}
                  >
                    {feature.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 "
                      >
                        <CheckCircle
                          className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 "
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-[80%] mx-auto animate-fade-in"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ecerta Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("showcase.whyEcerta").slice(0, 19)}
              <span className="bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
                {t("showcase.whyEcerta").slice(
                  19,
                  t("showcase.whyEcerta").length
                )}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("showcase.whyEcertaDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyEcerta.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-tr rounded-bl-sm icon-bg shadow group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={onShowLogin}
              className="w-full md:w-72 my-btn text-white px-6 py-6 rounded-xl group"
            >
              {t("showcase.experienceFuture")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-200" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcertaShowcase;
