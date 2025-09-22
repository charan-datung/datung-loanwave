import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/7bbbf132-ca47-4088-b3d1-c933a931a68b.png"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse transform rotate-12 hover:scale-110 transition-all duration-700"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg transform rotate-45 animate-bounce hover:rotate-90 transition-all duration-500"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/15 rounded-full transform -rotate-12 animate-pulse hover:scale-125 transition-all duration-700"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-lg transform rotate-30 animate-bounce hover:rotate-45 transition-all duration-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* 3D Title Effect */}
          <div className="perspective-1000 mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 transform-gpu animate-fade-in hover:scale-105 transition-all duration-700"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.2)',
                  background: 'linear-gradient(135deg, #ffffff, #f0f9ff, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.1))'
                }}>
              On a mission to close the MSME finance gap.
            </h1>
          </div>
          
          {/* Elevated content cards */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-white/95">
                Datung was founded to address the urgent issue of financial exclusion that leaves millions of small businesses in emerging markets without the capital they need to survive and grow. These businesses are the lifeblood of their communities, yet traditional financial systems have failed them, perpetuating cycles of poverty and stifling economic potential.
              </p>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 delay-100 hover:shadow-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-white/95">
                We recognize that this financial gap is not just a barrier — it's a deep-rooted injustice that limits opportunities and undermines the dreams of entrepreneurs. Our mission has evolved into something greater: we are here to challenge the status quo and build a new financial landscape where every small business, no matter how overlooked or underestimated, has the opportunity to rise, grow, and ignite change in their communities.
              </p>
            </div>
            
            <div className="backdrop-blur-lg bg-primary/20 rounded-2xl p-8 md:p-10 border border-primary/30 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 delay-200 hover:shadow-3xl">
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-white drop-shadow-lg">
                This is more than a mission — it's a movement to unleash the untapped power of millions, and we won't rest until every entrepreneur has the chance to build the future they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};