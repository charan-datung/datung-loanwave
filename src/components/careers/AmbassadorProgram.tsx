import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const AmbassadorProgram = () => {
  return (
    <PageWrapper
      id="ambassador"
      backgroundImage="/lovable-uploads/04d42990-f313-4eef-b3d9-019e0e419f4f.png"
      className="py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Datung Ambassador
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our network of ambassadors and earn competitive commissions while helping
            businesses access the financial solutions they need
          </p>
          <ContactForm 
            defaultType="ambassador"
            triggerComponent={
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Apply Now
              </Button>
            }
          />
        </div>
      </div>
    </PageWrapper>
  );
};