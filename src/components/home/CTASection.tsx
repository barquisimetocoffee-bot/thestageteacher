import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Users, Award, Heart } from "lucide-react";

interface CTASectionProps {
  onShowLogin: () => void;
  onJoinWaitlist: (productName: string) => void;
}

const CTASection = ({ onShowLogin, onJoinWaitlist }: CTASectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-gray-600">
          <div className="flex items-center space-x-2">

            <Users className="size-6 md:size-5 text-blue-500" />
            <span className="text-sm font-medium">100,000+ Teachers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="size-6 md:size-5 text-purple-500" />
            <span className="text-sm font-medium">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="size-6 md:size-5 text-pink-500" />
            <span className="text-sm font-medium">Loved by Educators</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-[#2901B3] to-blue-600 bg-clip-text text-transparent">
          Ready to Transform Your Teaching?

        </h2>

        <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {t("cta.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={onShowLogin}
            className="w-full md:w-72 my-btn text-white px-6 py-6 rounded-xl group"
          >

            Get Started for Free
            <ArrowRight className="ml-2 size-6 md:size-5 group-hover:translate-x-1 transition-transform" />

          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onJoinWaitlist("Advanced Features")}
            className="w-full md:w-72 hover:bg-purple-50 hover:text-primary px-6 py-6 rounded-xl group"
          >

            <Sparkles className="mr-2 size-6 md:size-5 group-hover:scale-110 transition-transform" />
            Join Waitlist
          </Button>
        </div>

        {/* Additional messaging */}
        <div className="backdrop-blur-2xl bg-white/60 rounded-2xl p-6">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-purple-700">
              {t("cta.noCreditCard")}
            </span>{" "}
            •<span className="mx-2">{t("cta.freePlan")}</span> •
            <span className="font-semibold text-primary">
              {t("cta.setupTime")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
