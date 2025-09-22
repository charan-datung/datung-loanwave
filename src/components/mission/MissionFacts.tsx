import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    stat: "$491B",
    description: "MSME finance gap in Southeast Asia",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    shadowColor: "shadow-emerald-500/25",
    bgGlow: "from-emerald-50 to-teal-50"
  },
  {
    stat: "42M+",
    description: "MSMEs excluded from formal financial systems",
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    shadowColor: "shadow-violet-500/25",
    bgGlow: "from-violet-50 to-purple-50"
  },
  {
    stat: "32%",
    description: "Women-owned businesses in the finance gap",
    gradient: "from-rose-400 via-pink-500 to-red-600",
    shadowColor: "shadow-rose-500/25",
    bgGlow: "from-rose-50 to-pink-50"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    shadowColor: "shadow-amber-500/25",
    bgGlow: "from-amber-50 to-orange-50"
  }
];

export const MissionFacts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-3xl md:text-4xl font-light mb-4 text-primary tracking-tight">
            Facts we're fighting
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-8"></div>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto font-light">
            The numbers that drive our mission
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {facts.map((fact, index) => (
            <div key={index} className="group perspective-1000">
              <Card className={`relative overflow-hidden bg-white border-0 ${fact.shadowColor} shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2`}>
                {/* Elegant gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Floating gradient orb for depth */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${fact.gradient} opacity-15 rounded-full blur-xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-700`}></div>
                
                {/* 3D border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.gradient} p-[2px] rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="bg-white h-full w-full rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-6 text-center">
                  {/* 3D elevated number */}
                  <div className="mb-4 transform group-hover:scale-115 group-hover:-translate-y-2 transition-all duration-500">
                    <div className={`text-3xl md:text-4xl font-light bg-gradient-to-br ${fact.gradient} bg-clip-text text-transparent font-manrope`}
                         style={{
                           filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                           textShadow: '0 2px 8px rgba(0,0,0,0.1)'
                         }}>
                      {fact.stat}
                    </div>
                  </div>
                  
                  {/* Enhanced description */}
                  <p className="text-gray-700 text-sm font-light leading-relaxed font-manrope transform group-hover:translate-y-1 transition-all duration-500">
                    {fact.description}
                  </p>
                  
                  {/* Elegant bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${fact.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};