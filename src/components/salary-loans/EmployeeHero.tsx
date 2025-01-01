import { Button } from "@/components/ui/button";

export const EmployeeHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/95 to-secondary py-32 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quick, Accessible Loans for Employees
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get the financial support you need with our fast and flexible loan options
          </p>
          <Button 
            size="lg" 
            variant="default"
            className="bg-accent text-black hover:bg-accent/90"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};