import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            Join thousands of Filipino entrepreneurs who have transformed their businesses
          </p>
          
          <ContactForm 
            defaultType="loan"
            triggerComponent={
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full">
                Start Your Application
              </Button>
            }
          />
          
          <p className="text-white/60 text-sm mt-8 font-light">
            Free consultation • No hidden fees • Quick approval
          </p>
        </div>
      </div>
    </section>
  );
};