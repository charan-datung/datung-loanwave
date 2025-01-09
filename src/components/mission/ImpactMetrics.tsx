import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    number: "100K+",
    label: "Lives Impacted",
  },
  {
    number: "₱500M+",
    label: "Loans Disbursed",
  },
  {
    number: "95%",
    label: "Customer Satisfaction",
  },
  {
    number: "1000+",
    label: "Partner Businesses",
  },
];

export const ImpactMetrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact in Numbers
        </h2>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                  {metric.number}
                </div>
                <div className="text-lg text-white/90">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};