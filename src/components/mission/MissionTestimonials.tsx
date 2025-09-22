import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Users, DollarSign, HandHeart } from "lucide-react";

const joinOptions = [
  {
    icon: Users,
    title: "For Borrowers",
    description: "Apply for a loan and join a community of driven entrepreneurs.",
    action: "Apply for a Loan",
    gradient: "from-blue-400 to-purple-500",
    bgGradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: DollarSign,
    title: "For Investors", 
    description: "Explore opportunities to support Southeast Asian MSMEs and drive economic growth.",
    action: "Learn More",
    gradient: "from-emerald-400 to-teal-500", 
    bgGradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: HandHeart,
    title: "For Partners",
    description: "Collaborate with us to expand our reach and impact.",
    action: "Partner with Datung",
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20"
  }
];

export const MissionTestimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Multi-layered dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/30 to-white/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/15 rounded-lg blur-lg transform -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-accent/25 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section with 3D title */}
        <div className="text-center mb-20">
          <div className="transform hover:scale-105 transition-all duration-500 mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)',
                  filter: 'drop-shadow(0 4px 15px rgba(255,255,255,0.1))'
                }}>
              Join Our Mission
            </h2>
          </div>
          
          <div className="backdrop-blur-xl bg-white/15 rounded-3xl p-10 border border-white/25 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700">
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
              Whether you're an entrepreneur seeking funding, an investor looking to make an impact or a partner who shares our vision, there's a place for you in the Datung community.
            </p>
          </div>
        </div>
        
        {/* 3D Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {joinOptions.map((option, index) => (
            <div key={index} className="group perspective-1000">
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:rotate-2">
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8 text-center">
                  {/* 3D Icon with enhanced effects */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-125 group-hover:-translate-y-4 group-hover:rotate-12 transition-all duration-700`}
                         style={{ 
                           boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 4px 20px rgba(0,0,0,0.1)' 
                         }}>
                      <option.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Title with 3D text effect */}
                  <h3 className="text-2xl font-bold mb-4 text-white transform group-hover:translate-y-1 transition-all duration-500"
                      style={{ 
                        textShadow: '0 2px 15px rgba(0,0,0,0.3), 0 4px 25px rgba(0,0,0,0.2)' 
                      }}>
                    {option.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 mb-6 leading-relaxed transform group-hover:translate-y-1 transition-all duration-500">
                    {option.description}
                  </p>
                  
                  {/* Enhanced Button */}
                  <div className="transform group-hover:translate-y-2 transition-all duration-500">
                    <ContactForm 
                      defaultType="loan"
                      triggerComponent={
                        <Button className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 font-semibold`}>
                          {option.action}
                        </Button>
                      }
                    />
                  </div>
                  
                  {/* Decorative bottom border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action with enhanced 3D effects */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)' 
                }}>
              Ready to be part of the MSME revolution in Southeast Asia?
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-500">
              <ContactForm 
                defaultType="loan"
                triggerComponent={
                  <Button size="lg" className="px-10 py-4 text-lg bg-gradient-to-r from-accent to-secondary hover:shadow-2xl transform transition-all duration-300 font-semibold">
                    Apply for a Loan
                  </Button>
                }
              />
            </div>
            
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-500">
              <ContactForm 
                defaultType="partnership"
                triggerComponent={
                  <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary hover:shadow-2xl transform transition-all duration-300 font-semibold">
                    Partner with Datung
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};