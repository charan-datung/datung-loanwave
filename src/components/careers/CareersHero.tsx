import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const CareersHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/04d42990-f313-4eef-b3d9-019e0e419f4f.png"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main headline with mixed typography like the reference */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
              Join us in Building the World's Largest & Most{' '}
              <span className="font-light italic">Innovative</span>{' '}
              Microfinance Company
            </h1>
          </div>
          
          {/* Subtitle with elegant spacing */}
          <div className="mb-12 max-w-3xl">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              We're democratizing access to capital for millions of underbanked businesses.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              Help us create meaningful change across emerging markets.
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-medium"
                >
                  Join Our Team
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 font-medium"
              onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Roles
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};