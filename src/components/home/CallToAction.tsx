import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            Join thousands of Filipino businesses leveraging our financial technology solutions.
          </p>
          
          <ContactForm 
            defaultType="loan"
            triggerComponent={
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                Get Started Today
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};