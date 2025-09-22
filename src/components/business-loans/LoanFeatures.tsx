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
      description: "Join thousands of successful Filipino entrepreneurs",
      highlight: "Trusted Community",
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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Why Choose Our Business Loans?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Designed specifically for Filipino entrepreneurs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2 text-gray-900">{feature.title}</h3>
                <div className="text-sm text-primary font-medium mb-4">
                  {feature.highlight}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};