import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    stat: "$491 Billion",
    description: "MSME finance gap in Southeast Asia"
  },
  {
    stat: "42 Million+",
    description: "MSMEs in Southeast Asia are excluded from the formal financial system"
  },
  {
    stat: "32%",
    description: "Women-owned businesses account for 32% of the MSME finance gap"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints in Southeast Asia"
  }
];

export const MissionFacts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Facts we're fighting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The numbers that drive our mission to close the MSME finance gap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  {fact.stat}
                </div>
                <p className="text-gray-700 font-medium">
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