import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Building2,
  ArrowRight,
  Users,
  Crown,
} from "lucide-react";
import {
  FaCheck,
  FaCrown,
  FaSlideshare,
  FaGoogle,
  FaRobot,
  FaBrain,
  FaLanguage,
  FaGamepad,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

// react-icons/io (Ionicons)
import {
  IoMdInfinite,
  IoIosChatbubbles,
  IoMdNotifications,
} from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

interface ProductsSectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const ProductsSection = ({
  onShowLogin,
  onJoinWaitlist,
}: ProductsSectionProps) => {
  const { t } = useTranslation();
  const { createCheckout } = useSubscription();
  const [upgrading, setUpgrading] = useState(false);

  const handleUpgrade = async () => {
    try {
      setUpgrading(true);
      await createCheckout(); // Use default Pro plan price
    } catch (error) {
      console.error("Error upgrading:", error);
    } finally {
      setUpgrading(false);
    }
  };
  const products = [
    {
      id: "pencil-free",

      name: t("products.easyTeachFree"),
      description:
        "Perfect for getting started with AI-powered teaching tools and basic content generation.",
      longDescription:
        "Get started with essential AI teaching tools including lesson planning, communication assistance, and basic content generation.",
      icon: BookOpen,
      status: "available",
      color: "from-blue-500 to-blue-600",
      price: t("products.freeForever"),
      priceYear: "",
      priceSubtext: "",
      features: [
        { text: t("products.basicLessonPlanning"), reactIcon: FaCheck },
        {
          text: t("products.parentCommunicationTemplates"),
          reactIcon: FaCheck,
        },
        { text: t("products.limitedAIGenerations"), reactIcon: FaCheck },
        { text: t("products.basicBehaviorManagement"), reactIcon: FaCheck },
        { text: t("products.communitySupportText"), reactIcon: FaCheck },
      ],
      users: t("products.teachersCount"),
      action: () => onShowLogin(),
      actionText: t("products.getStartedFree"),
      btnIcon: ArrowRight,
      popular: false,
    },
    {
      id: "pencil-pro",
      name: t("products.easyTeachPro"),
      description: t("products.everythingInFree"),
      longDescription: t("products.exclusiveEarlyAccess"),
      icon: Crown,
      status: "available",
      color: "from-purple-500 to-purple-600",
      price: "$9,99",
      priceYear: "$89",
      priceSubtext: t("products.perMonth"),
      features: [
        { text: t("products.everythingInFree"), reactIcon: FaCheck },
        { text: t("products.unlimitedAIGenerations"), reactIcon: IoMdInfinite },
        {
          text: t("products.continueThreads"),
          reactIcon: IoIosChatbubbles,
        },
        { text: t("products.unlimitedAISlides"), reactIcon: FaSlideshare },
        { text: t("products.exportToGoogleSlides"), reactIcon: FaGoogle },
        { text: t("products.easyTeachForStudents"), reactIcon: FaCheck },
        { text: t("products.lifetimeOutputHistory"), reactIcon: FaCheck },
        { text: t("products.exclusiveEarlyAccess"), reactIcon: FaCheck },
      ],
      users: t("products.mostPopular"),
      action: () => handleUpgrade(),
      actionText: t("products.upgradeToPro"),
      btnIcon: FaCrown,
      popular: true,
    },
    {
      id: "school-admin",
      name: t("products.schoolAdministration"),
      description: t("products.schoolAdminDesc"),
      longDescription: t("products.institutionalReporting"),
      icon: Building2,
      status: "coming-soon",
      color: "from-orange-500 to-orange-600",
      price: t("products.comingSoon"),
      priceYear: "",
      priceSubtext: "",
      features: [
        {
          text: t("products.schoolWideManagement"),
          reactIcon: MdOutlineAutoGraph,
        },
        { text: t("products.aiPoweredAdministrative"), reactIcon: FaRobot },
        {
          text: t("products.studentPerformanceAnalytics"),
          reactIcon: VscGraph,
        },
        {
          text: t("products.staffManagementScheduling"),
          reactIcon: PiUsersThreeFill,
        },
        { text: t("products.parentSchoolCommunication"), reactIcon: FaCheck },
        { text: t("products.institutionalReporting"), reactIcon: FaCheck },
      ],
      users: t("products.comingSoon"),
      action: () => onJoinWaitlist(t("products.schoolAdministration")),
      actionText: t("products.joinWaitlist"),
      btnIcon: IoMdNotifications,
      popular: false,
    },
    {
      id: "lms",
      name: t("products.advancedLMS"),
      description: t("products.advancedLMSDesc"),
      longDescription: t("products.blockchainCertificates"),
      icon: GraduationCap,
      status: "coming-soon",
      color: "from-green-500 to-green-600",
      price: t("products.comingSoon"),
      priceYear: "",
      priceSubtext: "",
      features: [
        {
          text: t("products.aiPersonalizationAdaptive"),
          reactIcon: FaBrain,
        },
        {
          text: t("products.aiGeneratedContentMultilingual"),
          reactIcon: FaLanguage,
        },
        {
          text: t("products.smartProctoringGrading"),
          reactIcon: RiSecurePaymentFill,
        },
        {
          text: t("products.gamificationVRARIntegration"),
          reactIcon: FaGamepad,
        },
        {
          text: t("products.predictiveAnalyticsAssistant"),
          reactIcon: FaCheck,
        },
        {
          text: t("products.blockchainCertificates"),
          reactIcon: FaCheck,
        },
      ],
      users: t("products.comingSoon"),
      action: () => onJoinWaitlist(t("products.advancedLMS")),
      actionText: t("products.enterLMSBeta"),
      btnIcon: FaRocket,
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
              {" "}
              Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("products.planDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3">
          {products.map((product, index) => (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
              key={product.id}
              className={`relative flex flex-col justify-between border border-gray-300 rounded-2xl hover:border-blue-600`}
            >
              <div>
                {/* header */}
                <div
                  className={`flex items-center justify-between bg-[#2901B3]  text-white rounded-t-2xl px-4 py-12 md:py-12
                `}
                >
                  <h1 className="text-lg/6 font-bold text-white">
                    {product.name}
                  </h1>
                  <span
                    className={`text-xs ${
                      product.name.startsWith("School")
                        ? "w-fit md:w-[108px] text-center"
                        : "w-fit"
                    } bg-white rounded-full px-2 py-1 text-blue-600 font-semibold`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* icon */}
                <span
                  className={`absolute left-4 z-10 size-16 p-3 rounded-full bg-accent flex items-center justify-center bg-blue-100 ${
                    product.name.startsWith("School")
                      ? "top-20 md:top-[110px]"
                      : "top-[85px]"
                  }`}
                >
                  <product.icon className={`h-6 w-6 text-blue-600`} />
                </span>
                {/* content goes here */}
                <div className="px-4 flex flex-col gap-2">
                  <h1 className="pt-8 text-2xl font-bold">
                    {product.price}
                    {product.priceSubtext && (
                      <span className="text-gray-600 ml-1 text-sm">/</span>
                    )}
                    <span className="text-sm font-semibold">
                      {product.priceSubtext}
                    </span>
                    {product?.priceYear && (
                      <p className="text-sm text-gray-500 font-normal pb-1 capitalize">
                        {product.priceYear} billed anually
                      </p>
                    )}
                  </h1>
                  <p className="text-sm">{product.description}</p>

                  {/* users */}
                  <div className="mb-4">
                    {product.price === "Free" ? (
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Users className="h-3 w-3 mr-1" />
                        <span className="">{product.users}</span>
                      </div>
                    ) : (
                      <span
                        className={`bg-blue-100 rounded-full px-2 py-1 text-xs font-semibold text-blue-600`}
                      >
                        {product.users}
                      </span>
                    )}
                  </div>
                  {/* <p className="text-sm">{product.longDescription}</p> */}

                  {/* What's included */}
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      What's included:
                    </h3>
                    <div className="flex flex-col gap-2">
                      {product.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <p
                            key={`${product.id}-feature-${featureIndex}`}
                            className={`text-gray-600 flex items-start text-sm ${
                              feature.text.startsWith("Everything in Free")
                                ? "font-semibold"
                                : ""
                            }`}
                          >
                            <feature.reactIcon
                              className={`size-4 mr-2 mt-1 text-blue-600`}
                            />
                            {feature.text}
                          </p>
                        ))}
                      <span className="text-gray-500 italic text-sm">
                        +{product.features.length - 4} features more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className={`p-4`}>
                <Button
                  onClick={product.action}
                  className={`mt-4 py-6 w-full flex items-center justify-center my-btn`}
                >
                  {product.id === "easyteach-pro" && upgrading
                    ? "Opening Checkout..."
                    : product.actionText}{" "}
                  <product.btnIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
