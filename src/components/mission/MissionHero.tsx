import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/7bbbf132-ca47-4088-b3d1-c933a931a68b.png"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative overflow-hidden"
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Clean, elegant title */}
          <div className="mb-20">
            <h1 className="font-manrope text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-16 text-white leading-tight tracking-tight animate-fade-up"
                style={{
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.01em'
                }}>
              On a mission to close the{' '}
              <span className="font-medium">MSME finance gap.</span>
            </h1>
          </div>
          
          {/* Clean content blocks */}
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 transform hover:bg-white/8 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white/90 font-light">
                Datung was founded to address the urgent issue of financial exclusion that leaves millions of small businesses in emerging markets without the capital they need to survive and grow.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 transform hover:bg-white/8 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white/90 font-light">
                We recognize that this financial gap is not just a barrier — it's a deep-rooted injustice that limits opportunities and undermines the dreams of entrepreneurs.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/8 rounded-2xl p-8 md:p-12 border border-white/15 transform hover:bg-white/12 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white font-medium">
                This is more than a mission — it's a movement to unleash the untapped power of millions, and we won't rest until every entrepreneur has the chance to build the future they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};