import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import discovery from "@/data/business-loan-discovery.json";

const APPLY_URL = "https://datungapply.com/apply";

export const HeroSection = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(0, 77, 77, 0.97) 0%, rgba(0, 179, 122, 0.95) 100%)`,
      }}
    >
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-wrap justify-center mb-8 md:mb-12">
          <div className="text-white/90 text-sm font-medium">Business financing for established Philippine SMEs.</div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
          Business Loans Without Collateral
          <br />
          <span className="font-normal text-accent">
            For Philippine Business Owners
          </span>
        </h1>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
          {discovery.eligibility}
        </p>

        <p className="text-sm md:text-base text-white/90 mb-8 font-medium">
          Business loans go up to ₱10M. Subject to credit approval.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-white/70">
          <span className="font-light">Thousands of Happy Clients</span>
        </div>
        
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full group">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};