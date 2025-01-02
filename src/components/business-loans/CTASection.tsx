import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(10, 36, 99, 0.85)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join thousands of Filipino entrepreneurs who have grown their businesses with our support
        </p>
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
              Start Your Application
            </Button>
          }
        />
      </div>
    </section>
  );
};