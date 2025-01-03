import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const CallToAction = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(249, 115, 22, 0.8)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands of Filipino businesses leveraging our financial technology solutions.
        </p>
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
          }
        />
      </div>
    </section>
  );
};