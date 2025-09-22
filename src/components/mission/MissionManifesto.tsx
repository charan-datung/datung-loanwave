export const MissionManifesto = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal elegant title */}
          <div className="mb-16">
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight"
                style={{
                  letterSpacing: '-0.01em'
                }}>
              Manifesto
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
          </div>
          
          {/* Clean content blocks */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 md:p-10 border border-white/10 hover:bg-white/8 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white/95 font-light">
                For the businesses that have been overlooked, underestimated, and left behind. For the entrepreneurs who've been told they can't, or that the system isn't for them. For the dreamers who have dared to imagine something greater.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 md:p-10 border border-white/10 hover:bg-white/8 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white/95 font-light">
                We're the financial force that's rewriting the rules, shifting the power back to where it belongs — into the hands of those who need it most. We're not just asking for change; we're demanding it.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 md:p-10 border border-white/10 hover:bg-white/8 transition-all duration-500">
              <p className="font-manrope text-lg md:text-xl leading-relaxed text-white/95 font-light">
                We're the movement that opens doors for every small business, turning barriers into bridges and dreams into realities. We're here to ensure that every entrepreneur has the chance to thrive, to be seen, and to be heard.
              </p>
            </div>
            
            {/* Clean call to action */}
            <div className="mt-12 pt-8">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-10 border border-white/20">
                <p className="font-manrope text-2xl md:text-3xl font-medium text-white">
                  Datung. <span className="font-light">Join the movement.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};