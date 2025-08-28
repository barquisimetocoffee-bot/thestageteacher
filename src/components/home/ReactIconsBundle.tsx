
import { Button } from "@/components/ui/button";
import { Users, Crown } from "lucide-react";
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
import {
  IoMdInfinite,
  IoIosChatbubbles,
  IoMdNotifications,
} from "react-icons/io";
import { MdOutlineAutoGraph } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

const iconMap = {
  FaCheck,
  FaCrown,
  FaSlideshare,
  FaGoogle,
  FaRobot,
  FaBrain,
  FaLanguage,
  FaGamepad,
  FaRocket,
  IoMdInfinite,
  IoIosChatbubbles,
  IoMdNotifications,
  MdOutlineAutoGraph,
  VscGraph,
  PiUsersThreeFill,
  RiSecurePaymentFill,
};

interface ReactIconsBundleProps {
  product: any;
  upgrading: boolean;
}

const ReactIconsBundle = ({ product, upgrading }: ReactIconsBundleProps) => {
  const getReactIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || FaCheck;
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between bg-[#2901B3] text-white rounded-t-2xl px-4 py-12 md:py-12">
          <h1 className="text-lg/6 font-bold text-white">{product.name}</h1>
          <span className={`text-xs ${
            product.name.startsWith("School") ? "w-fit md:w-[108px] text-center" : "w-fit"
          } bg-white rounded-full px-2 py-1 text-blue-600 font-semibold`}>
            {product.status}
          </span>
        </div>

        <span className={`absolute left-4 z-10 size-16 p-3 rounded-full bg-accent flex items-center justify-center bg-blue-100 ${
          product.name.startsWith("School") ? "top-20 md:top-[110px]" : "top-[85px]"
        }`}>
          <product.icon className="h-6 w-6 text-blue-600" />
        </span>

        <div className="px-4 flex flex-col gap-2">
          <h1 className="pt-8 text-2xl font-bold">
            {product.price}
            {product.priceSubtext && <span className="text-gray-600 ml-1 text-sm">/</span>}
            <span className="text-sm font-semibold">{product.priceSubtext}</span>
            {product?.priceYear && (
              <p className="text-sm text-gray-500 font-normal pb-1 capitalize">
                {product.priceYear} billed anually
              </p>
            )}
          </h1>
          <p className="text-sm">{product.description}</p>

          <div className="mb-4">
            {product.price === "Free" ? (
              <div className="flex items-center text-xs text-gray-500 mb-3">
                <Users className="h-3 w-3 mr-1" />
                <span>{product.users}</span>
              </div>
            ) : (
              <span className="bg-blue-100 rounded-full px-2 py-1 text-xs font-semibold text-blue-600">
                {product.users}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-1">What's included:</h3>
            <div className="flex flex-col gap-2">
              {product.features.slice(0, 4).map((feature: any, featureIndex: number) => {
                const IconComponent = getReactIcon(feature.icon);
                return (
                  <p key={`${product.id}-feature-${featureIndex}`} className={`text-gray-600 flex items-start text-sm ${
                    feature.text.startsWith("Everything in Free") ? "font-semibold" : ""
                  }`}>
                    <IconComponent className="size-4 mr-2 mt-1 text-blue-600" />
                    {feature.text}
                  </p>
                );
              })}
              <span className="text-gray-500 italic text-sm">
                +{product.features.length - 4} features more
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Button
          onClick={product.action}
          className="mt-4 py-6 w-full flex items-center justify-center my-btn"
          disabled={product.id === "pencil-pro" && upgrading}
        >
          {product.id === "pencil-pro" && upgrading ? "Opening Checkout..." : product.actionText}
          <product.btnIcon className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </>
  );
};

export default ReactIconsBundle;
