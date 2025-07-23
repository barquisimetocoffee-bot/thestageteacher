import { useState } from "react";
import Navigation from "@/components/home/Navigation";
import HeroSection from "@/components/home/HeroSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import EcertaShowcase from "@/components/home/EcertaShowcase";
import ProductsSection from "@/components/home/ProductsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import LoginModal from "@/components/auth/LoginModal";
import WaitlistModal from "@/components/WaitlistModal";

const EcertaHome = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistProduct, setWaitlistProduct] = useState("");

  const handleJoinWaitlist = (productName: string) => {
    setWaitlistProduct(productName);
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50">
      <Navigation onShowLogin={() => setShowLogin(true)} />

      <HeroSection onShowLogin={() => setShowLogin(true)} />

      <VideoShowcase />

      <EcertaShowcase onShowLogin={() => setShowLogin(true)} />

      <ProductsSection
        onShowLogin={() => setShowLogin(true)}
        onJoinWaitlist={handleJoinWaitlist}
      />

      <CTASection
        onShowLogin={() => setShowLogin(true)}
        onJoinWaitlist={handleJoinWaitlist}
      />

      <Footer />

      {/* Modals */}
      {showLogin && (
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}

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
