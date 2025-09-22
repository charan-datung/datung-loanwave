import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(0, 77, 77, 0.97) 0%, rgba(0, 179, 122, 0.95) 100%)`,
      }}
    >
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center gap-6 mb-12">
          <div className="text-white/90 text-sm font-medium">No Bank Account Required</div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="text-white/90 text-sm font-medium">No Business Permit Needed</div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
          Small Business Loans
          <br />
          <span className="font-normal text-accent">
            For Every Filipino Entrepreneur
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
          Simple, fast, and accessible funding for Filipino entrepreneurs
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/70">
          <span className="font-light">₱5,000 - ₱50,000</span>
          <span className="font-light">•</span>
          <span className="font-light">3 Days Processing</span>
          <span className="font-light">•</span>
          <span className="font-light">Thousands of Happy Clients</span>
        </div>
        
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full">
              Apply Now
            </Button>
          }
        />
      </div>
    </section>
  );
};