import { Rocket, Users, Trophy, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Rocket,
    title: "Shape the Future",
    description: "Build cutting-edge fintech solutions that transform how businesses access capital and grow",
  },
  {
    icon: Users,
    title: "World-Class Team",
    description: "Work alongside talented professionals who are passionate about financial inclusion",
  },
  {
    icon: Trophy,
    title: "Rapid Growth",
    description: "Join a fast-growing company where your contributions directly impact millions of lives",
  },
  {
    icon: Globe,
    title: "Global Impact", 
    description: "Help democratize access to finance across emerging markets worldwide",
  },
];

export const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Top Talent Chooses Datung
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just building a fintech company - we're revolutionizing financial access 
            for the underbanked. Join us in creating meaningful change.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};