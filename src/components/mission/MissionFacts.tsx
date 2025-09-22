import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    stat: "$491 Billion",
    description: "MSME finance gap in Southeast Asia",
    gradient: "from-rose-400 via-red-500 to-red-600",
    accent: "rose"
  },
  {
    stat: "42 Million+",
    description: "MSMEs in Southeast Asia are excluded from the formal financial system",
    gradient: "from-amber-400 via-orange-500 to-orange-600", 
    accent: "orange"
  },
  {
    stat: "32%",
    description: "Women-owned businesses account for 32% of the MSME finance gap",
    gradient: "from-violet-400 via-purple-500 to-purple-600",
    accent: "purple"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints in Southeast Asia",
    gradient: "from-sky-400 via-blue-500 to-blue-600",
    accent: "blue"
  }
];

export const MissionFacts = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Elegant floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-48 h-48 bg-primary/4 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-56 h-56 bg-accent/4 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary/4 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="transform hover:scale-105 transition-all duration-700 mb-8">
            <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 tracking-tight leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #1f2937 50%, #4b5563 75%, #1f2937 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  letterSpacing: '-0.02em'
                }}>
              Facts we're fighting
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-12"></div>
          <div className="backdrop-blur-sm bg-white/70 rounded-3xl p-10 border border-gray-200/50 shadow-lg transform hover:scale-105 transition-all duration-700">
            <p className="font-manrope text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
              The numbers that drive our mission to close the MSME finance gap
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {facts.map((fact, index) => (
            <div key={index} className="group perspective-1000">
              <Card className="relative overflow-hidden bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-1000 transform hover:scale-110 hover:-translate-y-8 hover:rotate-2">
                {/* Elegant gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.gradient} p-[3px] rounded-2xl`}>
                  <div className="bg-white h-full w-full rounded-2xl"></div>
                </div>
                
                {/* Floating gradient orb */}
                <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${fact.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-125 transition-all duration-1000`}></div>
                
                <CardContent className="relative p-10 text-center">
                  {/* Sophisticated 3D Number */}
                  <div className="mb-8 transform group-hover:scale-125 group-hover:-translate-y-4 transition-all duration-700">
                    <div className={`font-manrope text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br ${fact.gradient} bg-clip-text text-transparent`}
                         style={{
                           filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.15))',
                           textShadow: '0 4px 20px rgba(0,0,0,0.15)',
                           letterSpacing: '-0.02em'
                         }}>
                      {fact.stat}
                    </div>
                  </div>
                  
                  {/* Refined description */}
                  <div className="relative">
                    <p className="font-manrope text-gray-700 font-medium leading-relaxed text-lg tracking-wide transform group-hover:translate-y-2 transition-all duration-700">
                      {fact.description}
                    </p>
                  </div>
                  
                  {/* Elegant bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${fact.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};