import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/7bbbf132-ca47-4088-b3d1-c933a931a68b.png"
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