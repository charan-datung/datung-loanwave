import { Store, TrendingDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const struggles = [
  {
    icon: Store,
    title: "Lack of Credit History",
    description: "Traditional banks require credit histories that many small businesses simply do not have.",
    gradient: "from-emerald-400 via-teal-500 to-green-600",
    bgGradient: "from-emerald-50 to-teal-50",
    shadowColor: "shadow-emerald-500/25",
    iconBg: "bg-emerald-100"
  },
  {
    icon: TrendingDown,
    title: "Exorbitant Interest Rates", 
    description: "Forced to rely on informal lenders, these businesses often face crippling interest rates.",
    gradient: "from-rose-400 via-red-500 to-pink-600",
    bgGradient: "from-rose-50 to-red-50", 
    shadowColor: "shadow-rose-500/25",
    iconBg: "bg-rose-100"
  },
  {
    icon: BookOpen,
    title: "Limited Financial Literacy",
    description: "Many small business owners lack the financial knowledge needed to navigate the formal financial system effectively.",
    gradient: "from-blue-400 via-indigo-500 to-violet-600",
    bgGradient: "from-blue-50 to-indigo-50",
    shadowColor: "shadow-blue-500/25", 
    iconBg: "bg-blue-100"
  }
];

export const UnbankedBusinesses = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Clean hero section */}
          <div className="text-center mb-16">
            <h2 className="font-manrope text-3xl md:text-4xl font-light mb-6 text-primary tracking-tight">
              The unbanked businesses
            </h2>
            <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-8"></div>
            
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-100">
              <p className="font-manrope text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Unbanked businesses are the backbone of local economies. These include micro-enterprises like sari-sari stores, food vendors, and countless other small businesses that keep communities vibrant and thriving.
              </p>
            </div>
          </div>

          {/* Enhanced struggles section */}
          <div className="mb-12">
            <h3 className="font-manrope text-2xl md:text-3xl font-light mb-8 text-center text-primary">
              The struggles they face
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {struggles.map((struggle, index) => (
                <div key={index} className="group perspective-1000">
                  <Card className={`relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl ${struggle.shadowColor} transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:rotate-2`}>
                    {/* Elegant gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${struggle.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    {/* Floating gradient orb */}
                    <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${struggle.gradient} opacity-15 rounded-full blur-2xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-700`}></div>
                    
                    {/* 3D border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${struggle.gradient} p-[1px] rounded-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500`}>
                      <div className="bg-white h-full w-full rounded-lg"></div>
                    </div>
                    
                    <CardContent className="relative p-8 text-center">
                       {/* Ultra 3D elevated icon */}
                       <div className="mb-6">
                         <div className="relative">
                           {/* 3D base shadow */}
                           <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-black/10 transform translate-y-3 translate-x-1 blur-sm"></div>
                           
                           {/* Main 3D icon container */}
                           <div className={`relative w-16 h-16 mx-auto ${struggle.iconBg} rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:-translate-y-6 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}
                                style={{ 
                                  boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
                                  background: `linear-gradient(145deg, ${struggle.iconBg.replace('bg-', 'hsl(var(--')}, ${struggle.iconBg.replace('bg-', 'hsl(var(--').replace('-100', '-200')})`,
                                }}>
                             
                             {/* 3D icon with multiple effects */}
                             <div className="relative">
                               {/* Icon glow background */}
                               <div className={`absolute inset-0 w-8 h-8 bg-gradient-to-br ${struggle.gradient} opacity-20 rounded-lg blur-md group-hover:opacity-40 transition-opacity duration-500`}></div>
                               
                               {/* Main icon */}
                               <struggle.icon className={`relative w-8 h-8 bg-gradient-to-br ${struggle.gradient} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-500`} 
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
                      <h4 className="font-manrope text-lg font-medium mb-4 text-gray-900 transform group-hover:translate-y-1 transition-all duration-500"
                          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                        {struggle.title}
                      </h4>
                      
                      {/* Enhanced description */}
                      <p className="font-manrope text-gray-600 leading-relaxed text-sm font-light transform group-hover:translate-y-1 transition-all duration-500">
                        {struggle.description}
                      </p>
                      
                      {/* Elegant bottom accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${struggle.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};