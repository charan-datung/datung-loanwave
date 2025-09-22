import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export const Hero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/hero-background.jpg"
      gradientColors="rgba(0, 77, 77, 0.4), rgba(0, 179, 122, 0.5)"
      className="pt-20 md:pt-32 pb-0 px-4 min-h-screen"
    >
      <div className="container mx-auto text-center relative z-10 flex items-center justify-center min-h-screen -mt-8 md:-mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
            We are the future of microfinance — powered by AI, driven by community!
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Next-Gen Lending for the 42 million unbanked & underserved businesses in Southeast Asia
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90 w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Apply for a Loan
                </Button>
              }
            />
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10 w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  Partner with Datung
                </Button>
              }
            />
          </div>
        </div>
        
        {/* SEC License Badge */}
        <div className="absolute bottom-8 md:bottom-16 right-4 md:right-8 flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3">
          <span className="text-white/90 text-xs md:text-sm font-medium">Licensed by</span>
          <img 
            src="/sec-logo.png" 
            alt="Securities and Exchange Commission Philippines" 
            className="h-10 md:h-16 w-auto"
          />
        </div>
      </div>
    </PageWrapper>
  );
};