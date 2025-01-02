import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/business-loans/HeroSection";
import { LoanFeatures } from "@/components/business-loans/LoanFeatures";
import { ProcessTimeline } from "@/components/business-loans/ProcessTimeline";
import { Requirements } from "@/components/business-loans/Requirements";
import { WhoCanApply } from "@/components/business-loans/WhoCanApply";
import { CTASection } from "@/components/business-loans/CTASection";
import { Footer } from "@/components/Footer";

const BusinessLoans = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')", // Small business owner
        }}
      />
      <Navbar />
      <HeroSection />
      <LoanFeatures />
      <ProcessTimeline />
      <Requirements />
      <WhoCanApply />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BusinessLoans;