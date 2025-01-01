import { Zap, Calendar, Shield, Banknote, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const LoanFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved within 24 hours"
    },
    {
      icon: Calendar,
      title: "6% Monthly Interest",
      description: "Competitive rates for individual loans"
    },
    {
      icon: Shield,
      title: "No Collateral",
      description: "Unsecured loans for your peace of mind"
    },
    {
      icon: Banknote,
      title: "Flexible Terms",
      description: "Choose the repayment schedule that works for you"
    },
    {
      icon: Clock,
      title: "Quick Disbursement",
      description: "Receive funds within 24-48 hours"
    },
    {
      icon: CheckCircle2,
      title: "Simple Requirements",
      description: "Minimal documentation needed"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Loan Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};