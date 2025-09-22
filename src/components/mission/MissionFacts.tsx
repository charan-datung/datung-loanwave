import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    stat: "$491B",
    description: "MSME finance gap in Southeast Asia"
  },
  {
    stat: "42M+",
    description: "MSMEs excluded from formal financial systems"
  },
  {
    stat: "32%",
    description: "Women-owned businesses in the finance gap"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints"
  }
];

export const MissionFacts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-3xl md:text-4xl font-light mb-4 text-gray-900 tracking-tight">
            Facts we're fighting
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto font-light">
            The numbers that drive our mission
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {facts.map((fact, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-light text-primary mb-3 font-manrope">
                  {fact.stat}
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed font-manrope">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};