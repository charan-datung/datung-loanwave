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
    bgGradient: "from-blue-500/15 to-purple-500/15",
    shadowColor: "shadow-blue-500/25"
  },
  {
    icon: DollarSign,
    title: "For Investors", 
    description: "Explore opportunities to support Southeast Asian MSMEs and drive economic growth.",
    action: "Learn More",
    gradient: "from-emerald-400 via-green-500 to-teal-600", 
    bgGradient: "from-emerald-500/15 to-teal-500/15",
    shadowColor: "shadow-emerald-500/25"
  },
  {
    icon: HandHeart,
    title: "For Partners",
    description: "Collaborate with us to expand our reach and impact.",
    action: "Partner with Datung",
    gradient: "from-orange-400 via-red-500 to-rose-600",
    bgGradient: "from-orange-500/15 to-red-500/15",
    shadowColor: "shadow-orange-500/25"
  }
];

export const MissionTestimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated multi-layered dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/25 to-white/8"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/8"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Refined 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-24 right-1/3 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 right-16 w-32 h-32 bg-white/12 rounded-2xl blur-2xl transform -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-16 w-28 h-28 bg-accent/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Elegant hero section with sophisticated 3D title */}
        <div className="text-center mb-28">
          <div className="transform hover:scale-105 transition-all duration-700 mb-16">
            <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-8 tracking-tight leading-tight"
                style={{
                  textShadow: '0 12px 48px rgba(0,0,0,0.5), 0 24px 80px rgba(0,0,0,0.4)',
                  filter: 'drop-shadow(0 8px 32px rgba(255,255,255,0.15))',
                  letterSpacing: '-0.02em'
                }}>
              Join Our Mission
            </h2>
            <div className="w-48 h-2 bg-gradient-to-r from-accent via-secondary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="backdrop-blur-xl bg-white/12 rounded-[2rem] p-16 border border-white/20 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-1000">
            <p className="font-manrope text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/95 max-w-6xl mx-auto leading-relaxed font-light tracking-wide">
              Whether you're an{' '}
              <span className="font-medium text-accent">entrepreneur seeking funding</span>, an{' '}
              <span className="font-medium text-secondary">investor looking to make an impact</span>{' '}
              or a partner who shares our vision, there's a place for you in the{' '}
              <span className="font-semibold">Datung community</span>.
            </p>
          </div>
        </div>
        
        {/* Sophisticated 3D Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {joinOptions.map((option, index) => (
            <div key={index} className="group perspective-1000">
              <Card className={`relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 shadow-2xl hover:shadow-3xl ${option.shadowColor} transition-all duration-1000 transform hover:scale-110 hover:-translate-y-10 hover:rotate-3`}>
                {/* Sophisticated dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Enhanced animated glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`}></div>
                
                <CardContent className="relative p-12 text-center">
                  {/* Sophisticated 3D Icon with enhanced effects */}
                  <div className="mb-12">
                    <div className={`w-28 h-28 mx-auto bg-gradient-to-br ${option.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-135 group-hover:-translate-y-8 group-hover:rotate-12 transition-all duration-1000 ${option.shadowColor}`}
                         style={{ 
                           boxShadow: '0 32px 64px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.15)' 
                         }}>
                      <option.icon className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Elegant title with enhanced 3D text effect */}
                  <h3 className="font-manrope text-3xl md:text-4xl font-semibold mb-6 text-white transform group-hover:translate-y-2 transition-all duration-700 tracking-tight"
                      style={{ 
                        textShadow: '0 4px 24px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)',
                        letterSpacing: '-0.01em'
                      }}>
                    {option.title}
                  </h3>
                  
                  {/* Refined description */}
                  <p className="font-manrope text-white/90 mb-8 leading-relaxed text-xl font-light tracking-wide transform group-hover:translate-y-2 transition-all duration-700">
                    {option.description}
                  </p>
                  
                  {/* Sophisticated Enhanced Button */}
                  <div className="transform group-hover:translate-y-4 transition-all duration-700">
                    <ContactForm 
                      defaultType="loan"
                      triggerComponent={
                        <Button className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-2xl transform hover:scale-110 transition-all duration-500 border-0 font-semibold text-lg py-4 px-8 rounded-2xl`}>
                          {option.action}
                        </Button>
                      }
                    />
                  </div>
                  
                  {/* Elegant decorative bottom border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${option.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Sophisticated Call to Action with enhanced 3D effects */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/8 rounded-[2rem] p-16 md:p-20 border border-white/15 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-1000 mb-16">
            <h3 className="font-manrope text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white tracking-tight leading-tight"
                style={{ 
                  textShadow: '0 8px 32px rgba(0,0,0,0.5), 0 16px 64px rgba(0,0,0,0.4)',
                  letterSpacing: '-0.02em'
                }}>
              Ready to be part of the
            </h3>
            <h3 className="font-manrope text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight"
                style={{ 
                  textShadow: '0 8px 32px rgba(0,0,0,0.5), 0 16px 64px rgba(0,0,0,0.4)',
                  letterSpacing: '-0.02em'
                }}>
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                MSME revolution
              </span>{' '}
              in Southeast Asia?
            </h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-2xl mx-auto">
            <div className="transform hover:scale-115 hover:-translate-y-2 transition-all duration-700">
              <ContactForm 
                defaultType="loan"
                triggerComponent={
                  <Button size="lg" className="px-12 py-5 text-xl bg-gradient-to-r from-accent to-secondary hover:shadow-2xl transform transition-all duration-500 font-semibold rounded-2xl">
                    Apply for a Loan
                  </Button>
                }
              />
            </div>
            
            <div className="transform hover:scale-115 hover:-translate-y-2 transition-all duration-700">
              <ContactForm 
                defaultType="partnership"
                triggerComponent={
                  <Button size="lg" variant="outline" className="px-12 py-5 text-xl border-2 border-white text-white hover:bg-white hover:text-primary hover:shadow-2xl transform transition-all duration-500 font-semibold rounded-2xl backdrop-blur-sm">
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