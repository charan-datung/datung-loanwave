import { Users, BarChart3, GraduationCap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    icon: Users,
    title: "Community-Centric Lending",
    description: "We've pioneered the Joint Accountability Group (JAG) model, fostering a supportive community of entrepreneurs who uplift each other."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Innovation",
    description: "Our proprietary algorithm analyzes over 100 data points to assess creditworthiness, going beyond traditional metrics to unlock opportunities."
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We believe in empowering entrepreneurs with knowledge. Our platform offers financial literacy courses to all users."
  },
  {
    icon: Eye,
    title: "Transparency and Trust",
    description: "We're committed to clear, simple terms and transparent pricing. There are no hidden fees or surprises."
  },
];

export const MissionValues = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-3xl md:text-4xl font-light mb-4 text-primary tracking-tight">
            Our Approach
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-8"></div>
          <p className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto font-light">
            How we're revolutionizing financial access
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 bg-primary/10 rounded-lg flex items-center justify-center">
                  <approach.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-manrope text-xl font-medium mb-4 text-gray-900">
                  {approach.title}
                </h3>
                <p className="font-manrope text-gray-600 leading-relaxed font-light">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};