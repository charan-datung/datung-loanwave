import { Zap, Calendar, Shield, Banknote, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LoanFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved within 24 hours",
      highlight: "24 Hours"
    },
    {
      icon: Calendar,
      title: "6% Monthly Interest",
      description: "Competitive rates for individual loans",
      highlight: "Low Rate"
    },
    {
      icon: Shield,
      title: "No Collateral",
      description: "Unsecured loans for your peace of mind",
      highlight: "100% Unsecured"
    },
    {
      icon: Banknote,
      title: "Flexible Terms",
      description: "Choose the repayment schedule that works for you",
      highlight: "Your Choice"
    },
    {
      icon: Clock,
      title: "Quick Disbursement",
      description: "Receive funds within 24-48 hours",
      highlight: "1-2 Days"
    },
    {
      icon: CheckCircle2,
      title: "Simple Requirements",
      description: "Minimal documentation needed",
      highlight: "Easy Apply"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Loan Features
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Designed for your financial convenience
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