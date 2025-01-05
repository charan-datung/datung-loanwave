import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";

export const CallToAction = () => {
  return (
    <PageWrapper
      backgroundImage="https://images.unsplash.com/photo-1527576539890-dfa815648363"
      gradientColors="rgba(0, 77, 77, 0.9), rgba(0, 179, 122, 0.8)"
      className="py-20"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands of Filipino businesses leveraging our financial technology solutions.
        </p>
        <ContactForm 
          defaultType="loan"
          triggerComponent={
            <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
              Get Started Today
            </Button>
          }
        />
      </div>
    </PageWrapper>
  );
};