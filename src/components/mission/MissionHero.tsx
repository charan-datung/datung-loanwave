import { PageWrapper } from "@/components/PageWrapper";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/lovable-uploads/7bbbf132-ca47-4088-b3d1-c933a931a68b.png"
      className="min-h-screen flex items-center justify-center text-white pt-16 relative overflow-hidden"
    >
      {/* Elegant floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-24 h-24 bg-white/8 rounded-full animate-pulse transform rotate-12 hover:scale-110 transition-all duration-1000 blur-sm"></div>
        <div className="absolute top-48 right-24 w-20 h-20 bg-accent/15 rounded-xl transform rotate-45 animate-bounce hover:rotate-90 transition-all duration-700 blur-sm"></div>
        <div className="absolute bottom-48 left-24 w-28 h-28 bg-secondary/10 rounded-full transform -rotate-12 animate-pulse hover:scale-125 transition-all duration-1000 blur-sm"></div>
        <div className="absolute bottom-24 right-16 w-16 h-16 bg-white/12 rounded-xl transform rotate-30 animate-bounce hover:rotate-45 transition-all duration-700 blur-sm"></div>
      </div>

      {/* Elegant overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Sophisticated 3D Title Effect */}
          <div className="perspective-1000 mb-16">
            <h1 className="font-manrope text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-12 transform-gpu animate-fade-up hover:scale-105 transition-all duration-1000 leading-tight tracking-tight"
                style={{
                  textShadow: '0 8px 32px rgba(0,0,0,0.4), 0 16px 64px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #ffffff 50%, #f1f5f9 75%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.15))',
                  letterSpacing: '-0.02em'
                }}>
              On a mission to close the{' '}
              <span className="block font-medium bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                MSME finance gap.
              </span>
            </h1>
          </div>
          
          {/* Refined content cards with elegant typography */}
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="group backdrop-blur-xl bg-white/12 rounded-3xl p-12 md:p-16 border border-white/25 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 hover:shadow-3xl hover:bg-white/18">
              <p className="font-manrope text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95 font-light tracking-wide">
                Datung was founded to address the urgent issue of financial exclusion that leaves millions of small businesses in emerging markets without the capital they need to{' '}
                <span className="font-medium text-accent">survive and grow</span>. These businesses are the lifeblood of their communities, yet traditional financial systems have failed them, perpetuating cycles of poverty and stifling economic potential.
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-white/8 rounded-3xl p-12 md:p-16 border border-white/15 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 delay-150 hover:shadow-3xl hover:bg-white/15">
              <p className="font-manrope text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95 font-light tracking-wide">
                We recognize that this financial gap is not just a barrier — it's a{' '}
                <span className="font-medium text-secondary">deep-rooted injustice</span>{' '}
                that limits opportunities and undermines the dreams of entrepreneurs. Our mission has evolved into something greater: we are here to challenge the status quo and build a new financial landscape.
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-gradient-to-br from-primary/25 to-accent/20 rounded-3xl p-12 md:p-16 border border-accent/30 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 delay-300 hover:shadow-3xl">
              <p className="font-manrope text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white drop-shadow-lg tracking-wide">
                This is more than a mission — it's a{' '}
                <span className="font-semibold text-accent">movement to unleash</span>{' '}
                the untapped power of millions, and we won't rest until every entrepreneur has the chance to build the future they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};