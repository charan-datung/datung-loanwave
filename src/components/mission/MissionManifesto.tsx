export const MissionManifesto = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/20 to-white/10"></div>
      
      {/* 3D geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/5 rounded-full transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-accent/10 rounded-lg transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/10 rounded-full transform rotate-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* 3D title */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white transform hover:scale-110 transition-all duration-500"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)',
                  filter: 'drop-shadow(0 4px 15px rgba(255,255,255,0.1))'
                }}>
              Manifesto
            </h2>
          </div>
          
          {/* Elevated content blocks */}
          <div className="space-y-10">
            <div className="backdrop-blur-lg bg-white/15 rounded-3xl p-10 border border-white/25 shadow-2xl transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 hover:shadow-3xl">
              <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                For the businesses that have been overlooked, underestimated, and left behind. For the entrepreneurs who've been told they can't, or that the system isn't for them. For the dreamers who have dared to imagine something greater.
              </p>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 delay-100 hover:shadow-3xl">
              <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                We're the financial force that's rewriting the rules, shifting the power back to where it belongs — into the hands of those who need it most. We're not just asking for change; we're demanding it. We're creating a new financial landscape where opportunity isn't a privilege, but a right.
              </p>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 delay-200 hover:shadow-3xl">
              <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                We're the movement that opens doors for every small business, turning barriers into bridges and dreams into realities. We're here to ensure that every entrepreneur has the chance to thrive, to be seen, and to be heard.
              </p>
            </div>
            
            {/* Call to action with 3D effect */}
            <div className="mt-16 transform hover:scale-110 transition-all duration-500">
              <div className="backdrop-blur-xl bg-accent/20 rounded-3xl p-12 border-2 border-accent/40 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                   style={{
                     textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 8px 40px rgba(0,0,0,0.4)',
                     filter: 'drop-shadow(0 4px 15px rgba(255,255,255,0.2))'
                   }}>
                  Datung. Join the movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};