import { Users, BarChart3, GraduationCap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    icon: Users,
    title: "Community-Centric Lending",
    description: "We've pioneered the Joint Accountability Group (JAG) model, fostering a supportive community of entrepreneurs who uplift each other.",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
    shadowColor: "shadow-blue-500/20"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Innovation",
    description: "Our proprietary algorithm analyzes over 100 data points to assess creditworthiness, going beyond traditional metrics to unlock opportunities.",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    bgGradient: "from-emerald-50 via-green-50 to-teal-50",
    shadowColor: "shadow-emerald-500/20"
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We believe in empowering entrepreneurs with knowledge. Our platform offers financial literacy courses to all users.",
    gradient: "from-orange-400 via-amber-500 to-red-600",
    bgGradient: "from-orange-50 via-amber-50 to-red-50",
    shadowColor: "shadow-orange-500/20"
  },
  {
    icon: Eye,
    title: "Transparency and Trust",
    description: "We're committed to clear, simple terms and transparent pricing. There are no hidden fees or surprises.",
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    bgGradient: "from-cyan-50 via-sky-50 to-blue-50",
    shadowColor: "shadow-cyan-500/20"
  },
];

export const MissionValues = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/4 via-transparent to-accent/4"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/2 to-transparent"></div>
      
      {/* Refined floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-56 h-56 bg-primary/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-1/4 w-48 h-48 bg-accent/6 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-16 w-32 h-32 bg-secondary/6 rounded-2xl blur-xl transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-28">
          <div className="transform hover:scale-105 transition-all duration-700 mb-12">
            <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-extralight mb-10 tracking-tight leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #0d9488 25%, #0891b2 50%, #0284c7 75%, #0369a1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  letterSpacing: '-0.02em'
                }}>
              Our Approach
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-12 border border-gray-200/50 shadow-2xl transform hover:scale-105 transition-all duration-700">
            <p className="font-manrope text-2xl md:text-3xl lg:text-4xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
              How we're revolutionizing financial access for unbanked businesses
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {approaches.map((approach, index) => (
            <div key={index} className="group perspective-1000">
              <Card className={`relative overflow-hidden bg-white border-0 shadow-2xl hover:shadow-3xl ${approach.shadowColor} transition-all duration-1000 transform hover:scale-110 hover:-translate-y-8 hover:rotate-2`}>
                {/* Sophisticated animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
                
                {/* Enhanced floating gradient orb */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${approach.gradient} opacity-15 rounded-full blur-3xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-1000`}></div>
                
                <CardContent className="relative p-12 lg:p-16">
                  {/* Sophisticated 3D Icon container */}
                  <div className="mb-12">
                    <div className={`w-32 h-32 bg-gradient-to-br ${approach.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-125 group-hover:-translate-y-6 group-hover:rotate-12 transition-all duration-700 ${approach.shadowColor}`}
                         style={{ 
                           boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.12)' 
                         }}>
                      <approach.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Elegant title with enhanced 3D effect */}
                  <h3 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 transform group-hover:translate-x-3 transition-all duration-700 tracking-tight leading-tight"
                      style={{
                        background: `linear-gradient(135deg, ${approach.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 4px 20px rgba(0,0,0,0.12)',
                        letterSpacing: '-0.01em'
                      }}>
                    {approach.title}
                  </h3>
                  
                  {/* Refined description with elegant typography */}
                  <p className="font-manrope text-gray-700 leading-relaxed text-xl lg:text-2xl font-light tracking-wide transform group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-700">
                    {approach.description}
                  </p>
                  
                  {/* Sophisticated animated bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${approach.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 rounded-b-2xl`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};