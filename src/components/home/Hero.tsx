import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export const Hero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/hero-background.jpg"
      gradientColors="rgba(0, 77, 77, 0.4), rgba(0, 179, 122, 0.5)"
      className="pt-32 pb-8 px-4 min-h-[100vh]"
    >
      <div className="container mx-auto text-center relative z-10 flex items-center justify-center min-h-[calc(100vh-8rem)] -mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            We are the future of microfinance — powered by AI, driven by community!
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Next-Gen Lending for the 42 million unbanked & underserved businesses in Southeast Asia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
                  Get Started
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* SEC License Badge */}
        <div className="absolute bottom-1 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
          <span className="text-white/90 text-sm font-medium">Licensed by</span>
          <img 
            src="/sec-logo.png" 
            alt="Securities and Exchange Commission Philippines" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </PageWrapper>
  );
};