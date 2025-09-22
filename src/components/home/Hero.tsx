import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight tracking-tight">
            Change the way you{" "}
            <span className="block">handle money</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Next-Gen Lending for the 42 million unbanked & underserved businesses in Southeast Asia. Move freely between countries and currencies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover-lift"
                >
                  Apply for a Loan
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={() => navigate("/mission")}
            >
              Join our Mission
            </Button>
          </div>
        </div>
        
        {/* SEC License Badge */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 animate-gentle-float">
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-sm font-medium">Licensed by</span>
            <img 
              src="/sec-logo.png" 
              alt="Securities and Exchange Commission Philippines" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};