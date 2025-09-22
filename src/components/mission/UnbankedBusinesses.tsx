import { Store, TrendingDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const struggles = [
  {
    icon: Store,
    title: "Lack of Credit History",
    description: "Traditional banks require credit histories that many small businesses simply do not have.",
    color: "from-emerald-400 via-teal-500 to-green-600",
    bgColor: "bg-emerald-50",
    shadowColor: "shadow-emerald-500/20"
  },
  {
    icon: TrendingDown,
    title: "Exorbitant Interest Rates", 
    description: "Forced to rely on informal lenders, these businesses often face crippling interest rates.",
    color: "from-rose-400 via-red-500 to-pink-600",
    bgColor: "bg-rose-50",
    shadowColor: "shadow-red-500/20"
  },
  {
    icon: BookOpen,
    title: "Limited Financial Literacy",
    description: "Many small business owners lack the financial knowledge needed to navigate the formal financial system effectively.",
    color: "from-blue-400 via-indigo-500 to-violet-600",
    bgColor: "bg-blue-50",
    shadowColor: "shadow-blue-500/20"
  }
];

export const UnbankedBusinesses = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/3 to-transparent"></div>
      
      {/* Refined floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-32 h-32 bg-primary/8 rounded-full transform rotate-45 animate-pulse blur-xl"></div>
        <div className="absolute bottom-48 right-24 w-40 h-40 bg-accent/8 rounded-2xl transform -rotate-12 animate-bounce blur-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-secondary/8 rounded-full transform rotate-30 blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant hero section */}
          <div className="text-center mb-28">
            <div className="mb-16 transform hover:scale-105 transition-all duration-700">
              <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-extralight mb-12 tracking-tight leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #1f2937 50%, #4b5563 75%, #1f2937 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    letterSpacing: '-0.02em'
                  }}>
                The unbanked businesses
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/80 rounded-[2rem] p-12 md:p-16 border border-gray-200/50 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-1000 max-w-5xl mx-auto">
              <p className="font-manrope text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed font-light tracking-wide">
                Unbanked businesses are the{' '}
                <span className="font-medium text-primary">backbone of local economies</span>. These include micro-enterprises like sari-sari stores, food vendors, and countless other small businesses that keep communities{' '}
                <span className="font-medium text-accent">vibrant and thriving</span>. However, they face significant barriers to accessing formal financial services.
              </p>
            </div>
          </div>

          {/* Enhanced struggles section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="font-manrope text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight transform hover:scale-105 transition-all duration-700"
                  style={{
                    background: 'linear-gradient(135deg, #dc2626, #ef4444, #f87171)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.01em'
                  }}>
                The struggles they face
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-rose-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {struggles.map((struggle, index) => (
                <div key={index} className="group perspective-1000">
                  <Card className={`relative overflow-hidden bg-white border-0 shadow-2xl hover:shadow-3xl ${struggle.shadowColor} transition-all duration-1000 transform hover:scale-110 hover:-translate-y-10 hover:rotate-3`}>
                    {/* Sophisticated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${struggle.color} opacity-5 group-hover:opacity-12 transition-opacity duration-700`}></div>
                    
                    {/* Floating gradient orb */}
                    <div className={`absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br ${struggle.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 group-hover:scale-125 transition-all duration-1000`}></div>
                    
                    <CardContent className="relative p-10 text-center">
                      {/* Refined 3D Icon container */}
                      <div className="mb-10">
                        <div className={`w-28 h-28 mx-auto ${struggle.bgColor} rounded-3xl flex items-center justify-center transform group-hover:scale-125 group-hover:-translate-y-6 group-hover:rotate-12 transition-all duration-700 shadow-2xl ${struggle.shadowColor}`}>
                          <struggle.icon className={`w-14 h-14 bg-gradient-to-br ${struggle.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                      </div>
                      
                      {/* Elegant title */}
                      <h4 className="font-manrope text-2xl md:text-3xl font-semibold mb-6 transform group-hover:translate-y-2 transition-all duration-700 tracking-tight"
                          style={{ textShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                        {struggle.title}
                      </h4>
                      
                      {/* Refined description */}
                      <p className="font-manrope text-gray-600 leading-relaxed text-lg font-light tracking-wide transform group-hover:translate-y-3 transition-all duration-700">
                        {struggle.description}
                      </p>
                      
                      {/* Elegant decorative border */}
                      <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${struggle.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-lg`}></div>
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