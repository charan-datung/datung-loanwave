import { Users, BarChart3, GraduationCap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    icon: Users,
    title: "Community-Centric Lending",
    description: "We've pioneered the Joint Accountability Group (JAG) model, fostering a supportive community of entrepreneurs who uplift each other.",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
    shadowColor: "shadow-blue-500/25",
    iconBg: "bg-blue-100"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Innovation",
    description: "Our proprietary algorithm analyzes over 100 data points to assess creditworthiness, going beyond traditional metrics to unlock opportunities.",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    shadowColor: "shadow-emerald-500/25",
    iconBg: "bg-emerald-100"
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We believe in empowering entrepreneurs with knowledge. Our platform offers financial literacy courses to all users.",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    bgGradient: "from-amber-50 to-orange-50",
    shadowColor: "shadow-amber-500/25",
    iconBg: "bg-amber-100"
  },
  {
    icon: Eye,
    title: "Transparency and Trust",
    description: "We're committed to clear, simple terms and transparent pricing. There are no hidden fees or surprises.",
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    bgGradient: "from-cyan-50 to-sky-50",
    shadowColor: "shadow-cyan-500/25",
    iconBg: "bg-cyan-100"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="group perspective-1000">
              <Card className={`relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl ${approach.shadowColor} transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:rotate-1`}>
                {/* Elegant gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.bgGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Floating gradient orb for depth */}
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${approach.gradient} opacity-15 rounded-full blur-3xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-700`}></div>
                
                {/* 3D border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} p-[1px] rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}>
                  <div className="bg-white h-full w-full rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-10">
                   {/* Ultra 3D elevated icon */}
                   <div className="mb-8">
                     <div className="relative">
                       {/* 3D base shadow */}
                       <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-black/10 transform translate-y-3 translate-x-1 blur-sm"></div>
                       
                       {/* Main 3D icon container */}
                       <div className={`relative w-16 h-16 ${approach.iconBg} rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:-translate-y-6 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}
                            style={{ 
                              boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
                              background: `linear-gradient(145deg, ${approach.iconBg.replace('bg-', 'hsl(var(--')}, ${approach.iconBg.replace('bg-', 'hsl(var(--').replace('-100', '-200')})`,
                            }}>
                         
                         {/* 3D icon with multiple effects */}
                         <div className="relative">
                           {/* Icon glow background */}
                           <div className={`absolute inset-0 w-8 h-8 bg-gradient-to-br ${approach.gradient} opacity-20 rounded-lg blur-md group-hover:opacity-40 transition-opacity duration-500`}></div>
                           
                           {/* Main icon */}
                           <approach.icon className={`relative w-8 h-8 bg-gradient-to-br ${approach.gradient} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-500`} 
                                         style={{ 
                                           filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3)) drop-shadow(0 1px 3px rgba(0,0,0,0.2))',
                                           textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                         }} />
                         </div>
                         
                         {/* 3D highlight */}
                         <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm group-hover:bg-white/60 transition-colors duration-500"></div>
                       </div>
                     </div>
                   </div>
                  
                  {/* Enhanced title with 3D effect */}
                  <h3 className="font-manrope text-xl font-medium mb-4 text-gray-900 transform group-hover:translate-y-1 transition-all duration-500"
                      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    {approach.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="font-manrope text-gray-600 leading-relaxed font-light transform group-hover:translate-y-1 transition-all duration-500">
                    {approach.description}
                  </p>
                  
                  {/* Elegant bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};