export const MissionManifesto = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with decorative quote */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl text-primary/20 font-serif mb-4">"</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
              Our <span className="font-serif italic text-primary">Manifesto</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          {/* Manifesto content */}
          <div className="space-y-8 md:space-y-12">
            <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-center max-w-4xl mx-auto">
              <p className="mb-8 opacity-90">
                For the businesses that have been <span className="text-primary font-medium">overlooked</span>, 
                <span className="text-secondary font-medium"> underestimated</span>, and left behind.
              </p>
              <p className="mb-8 opacity-90">
                For the entrepreneurs who've been told they <em className="italic">can't</em>, 
                or that the system isn't for them.
              </p>
              <p className="mb-8 opacity-90">
                For the dreamers who have dared to imagine <span className="text-primary font-medium">something greater</span>.
              </p>
            </div>
            
            {/* Central statement */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 transform hover:scale-105 transition-all duration-300">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-light">
                We're the <span className="text-primary font-semibold">financial force</span> that's rewriting the rules, 
                shifting the power back to where it belongs — into the hands of those who need it most.
              </p>
            </div>
            
            <div className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-center max-w-4xl mx-auto space-y-8">
              <p className="opacity-90">
                We're not just asking for change; we're <span className="text-secondary font-semibold">demanding it</span>. 
                We're creating a new financial landscape where opportunity isn't a privilege, but a <span className="text-primary font-semibold">right</span>.
              </p>
              <p className="opacity-90">
                We're the movement that opens doors for every small business, 
                turning <span className="text-red-400">barriers</span> into <span className="text-green-400">bridges</span> and 
                dreams into <span className="text-primary font-semibold">realities</span>.
              </p>
            </div>
            
            {/* Call to action */}
            <div className="text-center pt-12">
              <div className="inline-block">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Datung
                </div>
                <div className="text-xl md:text-2xl font-light tracking-wider opacity-90">
                  Join the movement
                </div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative quote */}
      <div className="absolute bottom-8 right-8 text-6xl md:text-8xl text-primary/20 font-serif">"</div>
    </section>
  );
};