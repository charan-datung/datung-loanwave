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
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Whether you're an entrepreneur seeking funding, an investor looking to make an impact or a partner who shares our vision, there's a place for you in the Datung community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {joinOptions.map((option, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 group hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <option.icon className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-white/90 mb-4">{option.description}</p>
                <ContactForm 
                  defaultType="loan"
                  triggerComponent={
                    <Button variant="secondary" className="w-full">
                      {option.action}
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to be part of the MSME revolution in Southeast Asia?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Apply for a Loan
                </Button>
              }
            />
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
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