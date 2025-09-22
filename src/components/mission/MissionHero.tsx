import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/images/mission-hero-child.jpg"
      className="min-h-[80vh] flex items-center justify-center text-white pt-16 font-manrope"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            On a mission to close the MSME finance gap.
          </h1>
          <div className="text-lg md:text-xl opacity-90 space-y-6 max-w-4xl mx-auto">
            <p>
              Datung was founded to address the urgent issue of financial exclusion that leaves millions of small businesses in emerging markets without the capital they need to survive and grow. These businesses are the lifeblood of their communities, yet traditional financial systems have failed them, perpetuating cycles of poverty and stifling economic potential.
            </p>
            <p>
              We recognize that this financial gap is not just a barrier — it's a deep-rooted injustice that limits opportunities and undermines the dreams of entrepreneurs. Our mission has evolved into something greater: we are here to challenge the status quo and build a new financial landscape where every small business, no matter how overlooked or underestimated, has the opportunity to rise, grow, and ignite change in their communities.
            </p>
            <p className="font-semibold">
              This is more than a mission — it's a movement to unleash the untapped power of millions, and we won't rest until every entrepreneur has the chance to build the future they deserve.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};