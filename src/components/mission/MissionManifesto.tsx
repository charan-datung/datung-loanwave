export const MissionManifesto = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/90"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/15 to-white/8"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5"></div>
      
      {/* Refined 3D geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-40 h-40 bg-white/6 rounded-full transform rotate-45 animate-pulse blur-xl"></div>
        <div className="absolute bottom-24 right-1/3 w-32 h-32 bg-accent/12 rounded-2xl transform -rotate-12 animate-bounce blur-lg"></div>
        <div className="absolute top-1/2 right-16 w-28 h-28 bg-white/8 rounded-full transform rotate-30 blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Elegant 3D title */}
          <div className="mb-20">
            <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-extralight text-white transform hover:scale-110 transition-all duration-700 tracking-tight leading-tight mb-6"
                style={{
                  textShadow: '0 8px 32px rgba(0,0,0,0.5), 0 16px 64px rgba(0,0,0,0.4)',
                  filter: 'drop-shadow(0 6px 25px rgba(255,255,255,0.15))',
                  letterSpacing: '-0.02em'
                }}>
              Manifesto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
          </div>
          
          {/* Sophisticated content blocks */}
          <div className="space-y-16">
            <div className="group backdrop-blur-xl bg-white/12 rounded-[2rem] p-12 md:p-16 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-6 transition-all duration-1000 hover:shadow-3xl hover:bg-white/18">
              <p className="font-manrope text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-light tracking-wide">
                For the businesses that have been{' '}
                <span className="font-medium text-accent">overlooked, underestimated</span>, and left behind. For the entrepreneurs who've been told they can't, or that the system isn't for them. For the{' '}
                <span className="font-medium text-secondary">dreamers who have dared</span>{' '}
                to imagine something greater.
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-white/8 rounded-[2rem] p-12 md:p-16 border border-white/15 shadow-2xl transform hover:scale-105 hover:-translate-y-6 transition-all duration-1000 delay-200 hover:shadow-3xl hover:bg-white/15">
              <p className="font-manrope text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-light tracking-wide">
                We're the{' '}
                <span className="font-medium text-accent">financial force</span>{' '}
                that's rewriting the rules, shifting the power back to where it belongs — into the hands of those who need it most. We're not just asking for change; we're{' '}
                <span className="font-medium text-secondary">demanding it</span>.
              </p>
            </div>
            
            <div className="group backdrop-blur-xl bg-white/8 rounded-[2rem] p-12 md:p-16 border border-white/15 shadow-2xl transform hover:scale-105 hover:-translate-y-6 transition-all duration-1000 delay-400 hover:shadow-3xl hover:bg-white/15">
              <p className="font-manrope text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-light tracking-wide">
                We're the movement that{' '}
                <span className="font-medium text-accent">opens doors</span>{' '}
                for every small business, turning barriers into bridges and dreams into realities. We're here to ensure that every entrepreneur has the chance to{' '}
                <span className="font-medium text-secondary">thrive, to be seen, and to be heard</span>.
              </p>
            </div>
            
            {/* Refined call to action */}
            <div className="mt-20 transform hover:scale-110 transition-all duration-700">
              <div className="backdrop-blur-xl bg-gradient-to-br from-accent/25 to-secondary/20 rounded-[2rem] p-16 border-2 border-accent/30 shadow-2xl hover:shadow-3xl transition-all duration-700">
                <p className="font-manrope text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight"
                   style={{
                     textShadow: '0 8px 32px rgba(0,0,0,0.6), 0 16px 64px rgba(0,0,0,0.5)',
                     filter: 'drop-shadow(0 6px 25px rgba(255,255,255,0.25))',
                     letterSpacing: '-0.01em'
                   }}>
                  <span className="block font-light">Datung.</span>
                  <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent font-semibold">
                    Join the movement.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};