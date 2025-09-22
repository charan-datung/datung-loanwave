import { Store, TrendingDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const struggles = [
  {
    icon: Store,
    title: "Lack of Credit History",
    description: "Traditional banks require credit histories that many small businesses simply do not have."
  },
  {
    icon: TrendingDown,
    title: "Exorbitant Interest Rates", 
    description: "Forced to rely on informal lenders, these businesses often face crippling interest rates."
  },
  {
    icon: BookOpen,
    title: "Limited Financial Literacy",
    description: "Many small business owners lack the financial knowledge needed to navigate the formal financial system effectively."
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

          {/* Clean struggles section */}
          <div className="mb-12">
            <h3 className="font-manrope text-2xl md:text-3xl font-light mb-8 text-center text-primary">
              The struggles they face
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {struggles.map((struggle, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <struggle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-manrope text-lg font-medium mb-3 text-gray-900">
                      {struggle.title}
                    </h4>
                    <p className="font-manrope text-gray-600 leading-relaxed text-sm font-light">
                      {struggle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};