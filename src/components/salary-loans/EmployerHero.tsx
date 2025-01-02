import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const EmployerHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/95 to-primary pt-32 pb-32 text-white mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empower Your Workforce with Zero-Interest Loans
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Partner with us to provide financial wellness benefits that drive productivity and retention
          </p>
          <ContactForm 
            defaultType="partnership"
            triggerComponent={
              <Button 
                size="lg" 
                variant="default"
                className="bg-accent text-black hover:bg-accent/90"
              >
                Partner With Us
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};