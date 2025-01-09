import { Heart, Users, ShieldCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Financial Inclusion",
    description: "Making financial services accessible to all Filipinos",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building stronger communities through financial empowerment",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    description: "Ensuring safe and reliable financial solutions",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering outstanding service and innovation",
  },
];

export const MissionValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by our commitment to excellence and community empowerment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};