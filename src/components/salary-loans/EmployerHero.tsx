import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const EmployerHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-primary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-6 mb-12">
            <div className="text-white/90 text-sm font-medium">Zero Interest</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-white/90 text-sm font-medium">Employee Benefit</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
            Empower Your Workforce
            <br />
            <span className="font-normal text-accent">with Zero-Interest Loans</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            Partner with us to provide financial wellness benefits that drive productivity and retention
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/70">
            <span className="font-light">0% Interest for Employees</span>
            <span className="font-light">•</span>
            <span className="font-light">Boost Employee Satisfaction</span>
            <span className="font-light">•</span>
            <span className="font-light">Easy Implementation</span>
          </div>
          
          <ContactForm 
            defaultType="partnership"
            triggerComponent={
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full"
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