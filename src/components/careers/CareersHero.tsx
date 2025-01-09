import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";

export const CareersHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/3cd6b113-dd20-469d-ad46-195e9723307d.png"
      className="min-h-[80vh] flex items-center justify-center text-white pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Mission to Transform Finance
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Build your career or become an ambassador in the future of financial inclusion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('ambassador')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become an Ambassador
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};