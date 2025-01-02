import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/business-loans/HeroSection";
import { LoanFeatures } from "@/components/business-loans/LoanFeatures";
import { WhoCanApply } from "@/components/business-loans/WhoCanApply";
import { Requirements } from "@/components/business-loans/Requirements";
import { ProcessTimeline } from "@/components/business-loans/ProcessTimeline";
import { SuccessStories } from "@/components/SuccessStories";
import { CTASection } from "@/components/business-loans/CTASection";

const BusinessLoans = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd')", // Local business scene
        }}
      />
      <Navbar />
      <HeroSection />
      <LoanFeatures />
      <WhoCanApply />
      <Requirements />
      <ProcessTimeline />
      <SuccessStories />
      <CTASection />
    </div>
  );
};

export default BusinessLoans;