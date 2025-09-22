import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const EmployeeHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-secondary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-6 mb-12">
            <div className="text-white/90 text-sm font-medium">Fast Approval</div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-white/90 text-sm font-medium">Competitive Rates</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
            Quick, Accessible Loans
            <br />
            <span className="font-normal text-accent">For Employees</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            Get the financial support you need with our fast and flexible loan options
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/70">
            <span className="font-light">6% Monthly Interest</span>
            <span className="font-light">•</span>
            <span className="font-light">24-Hour Approval</span>
            <span className="font-light">•</span>
            <span className="font-light">Flexible Terms</span>
          </div>
          
          <ContactForm 
            defaultType="loan"
            triggerComponent={
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-white/90 font-medium px-12 py-4 text-lg transition-all rounded-full"
              >
                Apply Now
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};