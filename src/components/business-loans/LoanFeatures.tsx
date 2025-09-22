import { CreditCard, Clock, ShieldCheck, TrendingUp, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LoanFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Flexible Amount",
      description: "Borrow ₱5,000 to ₱50,000 based on your business needs",
      highlight: "₱5K - ₱50K",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Quick Release",
      description: "Get your loan within 3 days after approval",
      highlight: "3 Days",
      color: "secondary"
    },
    {
      icon: ShieldCheck,
      title: "No Collateral",
      description: "No need for property or vehicle collateral",
      highlight: "100% Unsecured",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Expand inventory, improve facilities, or scale operations",
      highlight: "Scale Up",
      color: "primary"
    },
    {
      icon: Star,
      title: "Trusted by Thousands",
      description: "Join over 10,000 successful Filipino entrepreneurs",
      highlight: "10K+ Users",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Be part of a supportive network of business owners",
      highlight: "Strong Network",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Why Choose Our
            <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Business Loans?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed specifically for Filipino micro-entrepreneurs and small business owners
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${feature.color} to-${feature.color}/60`}></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full bg-${feature.color}/10 text-${feature.color} text-sm font-semibold mb-3`}>
                      {feature.highlight}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};