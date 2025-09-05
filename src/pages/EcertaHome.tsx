import { useState } from "react";
import Navigation from "@/components/home/Navigation";
import HeroSection from "@/components/home/HeroSection";
import VicertaVision from "@/components/home/VicertaVision";
import VideoShowcase from "@/components/home/VideoShowcase";
import EcertaShowcase from "@/components/home/EcertaShowcase";
import ProductsSection from "@/components/home/ProductsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import FAQ from "@/components/home/FAQ";

const EcertaHome = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistProduct, setWaitlistProduct] = useState("");

  const handleJoinWaitlist = (productName: string) => {
    setWaitlistProduct(productName);
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
      <Navigation />

      <HeroSection />

      <VideoShowcase />

      <EcertaShowcase />

      <ProductsSection
        onJoinWaitlist={handleJoinWaitlist}
      />

      <FAQ />

      <VicertaVision />

      <CTASection
        onJoinWaitlist={handleJoinWaitlist}
      />

      <Footer />

      {/* Modals */}
      {showWaitlist && (
        <WaitlistModal
          isOpen={showWaitlist}
          onClose={() => setShowWaitlist(false)}
          productName={waitlistProduct}
        />
      )}
    </div>
  );
};

export default EcertaHome;
