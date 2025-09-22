import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative bg-cover bg-center min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 77, 77, 0.95) 0%, rgba(0, 179, 122, 0.9) 50%, rgba(0, 214, 143, 0.85) 100%), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')`,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent/80 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center gap-4 mb-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            No Bank Account Required
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            No Business Permit Needed
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Small Business Loans
          <br />
          <span className="text-transparent bg-gradient-to-r from-accent via-white to-accent bg-clip-text animate-pulse">
            For Every Filipino Entrepreneur
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering Filipino entrepreneurs with accessible funding solutions
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-white/90">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Star className="w-5 h-5 text-accent" />
            </div>
            <span className="font-semibold">₱5,000 - ₱50,000</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <span className="font-semibold">3 Days Processing</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <span className="font-semibold">10,000+ Happy Clients</span>
          </div>
        </div>
        
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105">
              Apply Now - Get Started
            </Button>
          }
        />
      </div>
    </section>
  );
};