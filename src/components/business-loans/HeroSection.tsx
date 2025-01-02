import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section 
      className="pt-32 pb-20 px-4 relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.9)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            No Bank Account Required • No Business Permit Needed
          </h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Small Business Loans
          <br />
          <span className="text-accent">For Every Filipino Entrepreneur</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get ₱5,000 to ₱50,000 in just 3 days with minimal requirements
        </p>
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
              Apply Now
            </Button>
          }
        />
      </div>
    </section>
  );
};