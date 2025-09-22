import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export const Hero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/5e26ea34-8dbc-4edb-a080-174866d2a27d.png"
      gradientColors="rgba(0, 77, 77, 0.85), rgba(0, 179, 122, 0.9)"
      className="pt-32 pb-20 px-4"
    >
      <div className="container mx-auto text-center relative z-10">
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
      </div>
    </PageWrapper>
  );
};