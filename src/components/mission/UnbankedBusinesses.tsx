import { Store, TrendingDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const struggles = [
  {
    icon: Store,
    title: "Lack of Credit History",
    description: "Traditional banks require credit histories that many small businesses simply do not have.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: TrendingDown,
    title: "Exorbitant Interest Rates", 
    description: "Forced to rely on informal lenders, these businesses often face crippling interest rates.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50"
  },
  {
    icon: BookOpen,
    title: "Limited Financial Literacy",
    description: "Many small business owners lack the financial knowledge needed to navigate the formal financial system effectively.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50"
  }
];

export const UnbankedBusinesses = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-24 bg-primary/10 rounded-full transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-lg transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-secondary/10 rounded-full transform rotate-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero section with 3D effects */}
          <div className="text-center mb-20">
            <div className="mb-12 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                  style={{
                    background: 'linear-gradient(135deg, #1f2937, #374151, #1f2937)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                The unbanked businesses
              </h2>
            </div>
            
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-10 md:p-12 border border-gray-200/50 shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Unbanked businesses are the backbone of local economies. These include micro-enterprises like sari-sari stores, food vendors, and countless other small businesses that keep communities vibrant and thriving. However, they face significant barriers to accessing formal financial services.
              </p>
            </div>
          </div>

          {/* Struggles section with 3D cards */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center transform hover:scale-105 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              The struggles they face:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {struggles.map((struggle, index) => (
                <div key={index} className="group perspective-1000">
                  <Card className="relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-6 hover:rotate-2">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${struggle.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardContent className="relative p-8 text-center">
                      {/* 3D Icon container */}
                      <div className={`w-20 h-20 mx-auto mb-6 ${struggle.bgColor} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 shadow-lg`}>
                        <struggle.icon className={`w-10 h-10 bg-gradient-to-br ${struggle.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Title with 3D effect */}
                      <h4 className="text-2xl font-bold mb-4 transform group-hover:translate-y-1 transition-all duration-500"
                          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        {struggle.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-lg transform group-hover:translate-y-1 transition-all duration-500">
                        {struggle.description}
                      </p>
                      
                      {/* Decorative border */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${struggle.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
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