import { Heart, DollarSign, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical coverage and wellness programs",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Market-leading compensation and performance bonuses",
  },
  {
    icon: Users,
    title: "Great Culture",
    description: "Collaborative environment and work-life balance",
  },
  {
    icon: Award,
    title: "Growth",
    description: "Career development and learning opportunities",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer competitive benefits and a culture of growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
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