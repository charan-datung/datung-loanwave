import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const Hero = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.9)), url('https://images.unsplash.com/photo-1573697610008-4c72b4e9508f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empowering Filipino Businesses Through Finance and Technology
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Innovative financial solutions powered by AI technology for MSMEs and professionals across the Philippines
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
              }
            />
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};