import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/dd96d75d-501e-498b-b362-6a931f88b332.png"
      className="min-h-[80vh] flex items-center justify-center text-white pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Financial Access, Empowering Communities
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Transforming lives through innovative financial solutions in the Philippines
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};