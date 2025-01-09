import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";

export const AmbassadorProgram = () => {
  return (
    <PageWrapper
      id="ambassador"
      backgroundImage="/lovable-uploads/3e2787a3-b40b-4df2-8d60-8ebaeb631904.png"
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
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Calculate Your Earnings
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};