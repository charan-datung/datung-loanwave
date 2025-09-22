import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Users, DollarSign, HandHeart } from "lucide-react";

const joinOptions = [
  {
    icon: Users,
    title: "For Borrowers",
    description: "Apply for a loan and join a community of driven entrepreneurs.",
    action: "Apply for a Loan"
  },
  {
    icon: DollarSign,
    title: "For Investors", 
    description: "Explore opportunities to support Southeast Asian MSMEs and drive economic growth.",
    action: "Learn More"
  },
  {
    icon: HandHeart,
    title: "For Partners",
    description: "Collaborate with us to expand our reach and impact.",
    action: "Partner with Datung"
  }
];

export const MissionTestimonials = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/95"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Clean hero section */}
        <div className="text-center mb-16">
          <h2 className="font-manrope text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Join Our Mission
          </h2>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8"></div>
          
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 max-w-3xl mx-auto">
            <p className="font-manrope text-lg md:text-xl text-white/95 leading-relaxed font-light">
              Whether you're an entrepreneur seeking funding, an investor looking to make an impact or a partner who shares our vision, there's a place for you in the Datung community.
            </p>
          </div>
        </div>
        
        {/* Clean cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {joinOptions.map((option, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-manrope text-lg font-medium mb-3 text-white">
                  {option.title}
                </h3>
                <p className="font-manrope text-white/80 mb-4 text-sm font-light leading-relaxed">
                  {option.description}
                </p>
                <ContactForm 
                  defaultType="loan"
                  triggerComponent={
                    <Button variant="secondary" size="sm" className="w-full font-medium">
                      {option.action}
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clean call to action */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10 mb-8 max-w-2xl mx-auto">
            <h3 className="font-manrope text-2xl md:text-3xl font-light mb-4 text-white">
              Ready to be part of the MSME revolution in Southeast Asia?
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="secondary" className="px-8 py-3 font-medium">
                  Apply for a Loan
                </Button>
              }
            />
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary font-medium">
                  Partner with Datung
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};