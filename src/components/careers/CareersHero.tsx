import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const CareersHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/04d42990-f313-4eef-b3d9-019e0e419f4f.png"
      className="min-h-screen flex items-center justify-center text-white pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Build the Future of Finance
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Join a world-class team that's democratizing access to capital 
            for millions of underbanked businesses across emerging markets
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                >
                  View Open Roles
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => document.getElementById('why-join-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Why Datung?
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};