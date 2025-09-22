import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    stat: "$491 Billion",
    description: "MSME finance gap in Southeast Asia",
    gradient: "from-red-500 to-red-600"
  },
  {
    stat: "42 Million+",
    description: "MSMEs in Southeast Asia are excluded from the formal financial system",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    stat: "32%",
    description: "Women-owned businesses account for 32% of the MSME finance gap",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints in Southeast Asia",
    gradient: "from-blue-500 to-blue-600"
  }
];

export const MissionFacts = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary/5 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform hover:scale-105 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #1f2937, #374151, #1f2937)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
            Facts we're fighting
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The numbers that drive our mission to close the MSME finance gap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="group perspective-1000">
              <Card className="relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1">
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${fact.gradient} p-[2px] rounded-lg`}>
                  <div className="bg-white h-full w-full rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-8 text-center">
                  {/* 3D Number */}
                  <div className="mb-6 transform group-hover:scale-110 transition-all duration-500">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br ${fact.gradient} bg-clip-text text-transparent`}
                         style={{
                           filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.1))',
                           textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                         }}>
                      {fact.stat}
                    </div>
                  </div>
                  
                  {/* Description with 3D effect */}
                  <div className="relative">
                    <p className="text-gray-700 font-semibold leading-relaxed transform group-hover:translate-z-4 transition-all duration-500">
                      {fact.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${fact.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};