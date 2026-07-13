import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(0, 77, 77, 0.97) 0%, rgba(0, 179, 122, 0.95) 100%)`,
      }}
    >
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-white/90 text-sm font-medium">Micro Loans: ₱5K – ₱50K</div>
          <div className="hidden md:block w-px h-4 bg-white/30"></div>
          <div className="text-white/90 text-sm font-medium">SME Working Capital: ₱100K – ₱500K</div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
          Business Loans
          <br />
          <span className="font-normal text-accent">
            For Every Filipino Entrepreneur
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
          From micro-merchant group loans to larger-ticket SME working capital, we have a funding option that fits your business stage.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/70">
          <span className="font-light">₱5,000 – ₱500,000</span>
          <span className="font-light">•</span>
          <span className="font-light">48-Hour Approval</span>
          <span className="font-light">•</span>
          <span className="font-light">Thousands of Happy Clients</span>
        </div>
        
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full group">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          }
        />
      </div>
    </section>
  );
};