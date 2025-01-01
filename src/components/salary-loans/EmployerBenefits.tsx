import { Check, Percent, Clock, TrendingUp, Heart, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EmployerBenefits = () => {
  const benefits = [
    {
      icon: Percent,
      title: "0% Interest Loans",
      description: "Provide interest-free loans to all your employees"
    },
    {
      icon: Clock,
      title: "No Cost to Employer",
      description: "Zero implementation or maintenance costs"
    },
    {
      icon: TrendingUp,
      title: "Improved Productivity",
      description: "Reduce financial stress and boost workplace focus"
    },
    {
      icon: Heart,
      title: "Enhanced Retention",
      description: "Strengthen employee loyalty and satisfaction"
    },
    {
      icon: LineChart,
      title: "Complete Transparency",
      description: "Full visibility into program performance"
    },
    {
      icon: Check,
      title: "Easy Integration",
      description: "Seamless setup with your existing systems"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Key Benefits for Employers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};