import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const CareersHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/04d42990-f313-4eef-b3d9-019e0e419f4f.png"
      className="min-h-[80vh] flex items-center justify-center text-white pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Mission to Transform Finance
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Become an ambassador in the future of financial inclusion
          </p>
          <ContactForm 
            defaultType="ambassador"
            triggerComponent={
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Become an Ambassador
              </Button>
            }
          />
        </div>
      </div>
    </PageWrapper>
  );
};