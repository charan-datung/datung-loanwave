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
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    bgGradient: "from-blue-50 to-indigo-50",
    shadowColor: "shadow-blue-500/25",
    iconBg: "bg-blue-100"
  },
  {
    icon: DollarSign,
    title: "For Investors", 
    description: "Explore opportunities to support Southeast Asian MSMEs and drive economic growth.",
    action: "Learn More",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    bgGradient: "from-emerald-50 to-green-50",
    shadowColor: "shadow-emerald-500/25",
    iconBg: "bg-emerald-100"
  },
  {
    icon: HandHeart,
    title: "For Partners",
    description: "Collaborate with us to expand our reach and impact.",
    action: "Partner with Datung",
    gradient: "from-rose-400 via-pink-500 to-red-600",
    bgGradient: "from-rose-50 to-pink-50",
    shadowColor: "shadow-rose-500/25",
    iconBg: "bg-rose-100"
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
        
        {/* Enhanced 3D cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {joinOptions.map((option, index) => (
            <div key={index} className="group perspective-1000">
              <Card className={`relative overflow-hidden bg-white/8 backdrop-blur-sm border border-white/15 shadow-lg hover:shadow-2xl ${option.shadowColor} transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:rotate-2`}>
                {/* Elegant gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Floating gradient orb */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${option.gradient} opacity-15 rounded-full blur-2xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-700`}></div>
                
                {/* 3D border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} p-[1px] rounded-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}>
                  <div className="bg-white/8 backdrop-blur-sm h-full w-full rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-8 text-center">
                  {/* 3D elevated icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 mx-auto bg-white/15 rounded-2xl flex items-center justify-center transform group-hover:scale-115 group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm`}
                         style={{ 
                           boxShadow: '0 12px 30px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)' 
                         }}>
                      <option.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
                                 style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' }} />
                    </div>
                  </div>
                  
                  {/* Enhanced title with 3D effect */}
                  <h3 className="font-manrope text-lg font-medium mb-4 text-white transform group-hover:translate-y-1 transition-all duration-500"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {option.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="font-manrope text-white/80 mb-6 text-sm font-light leading-relaxed transform group-hover:translate-y-1 transition-all duration-500">
                    {option.description}
                  </p>
                  
                  {/* Enhanced button with 3D effect */}
                  <div className="transform group-hover:translate-y-2 transition-all duration-500">
                    <ContactForm 
                      defaultType="loan"
                      triggerComponent={
                        <Button className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 font-medium text-sm rounded-lg`}
                                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                          {option.action}
                        </Button>
                      }
                    />
                  </div>
                  
                  {/* Elegant bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center">
          <div className="backdrop-blur-sm bg-white/8 rounded-2xl p-10 border border-white/15 mb-8 max-w-3xl mx-auto shadow-lg transform hover:scale-105 transition-all duration-500">
            <h3 className="font-manrope text-2xl md:text-3xl font-light mb-4 text-white"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
              Ready to be part of the MSME revolution in Southeast Asia?
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-500">
              <ContactForm 
                defaultType="loan"
                triggerComponent={
                  <Button size="lg" className="px-10 py-4 font-medium bg-gradient-to-r from-accent to-secondary hover:shadow-xl transform transition-all duration-300 rounded-xl"
                          style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}>
                    Apply for a Loan
                  </Button>
                }
              />
            </div>
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-500">
              <ContactForm 
                defaultType="partnership"
                triggerComponent={
                  <Button size="lg" variant="outline" className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-medium rounded-xl backdrop-blur-sm transform transition-all duration-300"
                          style={{ boxShadow: '0 6px 20px rgba(255,255,255,0.15)' }}>
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