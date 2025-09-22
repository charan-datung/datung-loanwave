import { Users, BarChart3, GraduationCap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    icon: Users,
    title: "Community-Centric Lending",
    description: "We've pioneered the Joint Accountability Group (JAG) model, fostering a supportive community of entrepreneurs who uplift each other.",
    gradient: "from-blue-500 via-purple-500 to-indigo-500",
    bgGradient: "from-blue-50 to-purple-50"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Innovation",
    description: "Our proprietary algorithm analyzes over 100 data points to assess creditworthiness, going beyond traditional metrics to unlock opportunities.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We believe in empowering entrepreneurs with knowledge. Our platform offers financial literacy courses to all users.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: Eye,
    title: "Transparency and Trust",
    description: "We're committed to clear, simple terms and transparent pricing. There are no hidden fees or surprises.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    bgGradient: "from-cyan-50 to-blue-50"
  },
];

export const MissionValues = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-secondary/10 rounded-lg blur-md transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="transform hover:scale-105 transition-all duration-500 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #059669, #0d9488, #0891b2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
              Our Approach
            </h2>
          </div>
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-8 border border-gray-200/50 shadow-lg transform hover:scale-105 transition-all duration-500">
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              How we're revolutionizing financial access for unbanked businesses
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {approaches.map((approach, index) => (
            <div key={index} className="group perspective-1000">
              <Card className="relative overflow-hidden bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Floating gradient orb */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${approach.gradient} opacity-20 rounded-full blur-xl group-hover:opacity-30 group-hover:scale-110 transition-all duration-700`}></div>
                
                <CardContent className="relative p-10">
                  {/* 3D Icon container */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${approach.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-3 group-hover:rotate-12 transition-all duration-500`}
                         style={{ 
                           boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.1)' 
                         }}>
                      <approach.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Title with enhanced 3D effect */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 transform group-hover:translate-x-2 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${approach.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}>
                    {approach.title}
                  </h3>
                  
                  {/* Description with depth */}
                  <p className="text-gray-700 leading-relaxed text-lg transform group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-500">
                    {approach.description}
                  </p>
                  
                  {/* Animated bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${approach.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-lg`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};