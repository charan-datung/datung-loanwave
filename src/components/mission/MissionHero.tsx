import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/images/mission-hero-elder.jpg"
      className="min-h-[80vh] flex items-center justify-center text-white pt-16 font-manrope"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-left animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            On a mission to close the <em className="italic font-serif">MSME finance gap</em>
          </h1>
          <div className="text-xl md:text-2xl opacity-90 max-w-2xl">
            <p>
              Financial inclusion powers economic growth.
            </p>
            <p className="mt-2">
              We're making it accessible to every entrepreneur.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};