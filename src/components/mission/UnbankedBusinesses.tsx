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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The unbanked businesses</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unbanked businesses are the backbone of local economies. These include micro-enterprises like sari-sari stores, food vendors, and countless other small businesses that keep communities vibrant and thriving. However, they face significant barriers to accessing formal financial services.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">The struggles they face:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {struggles.map((struggle, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <struggle.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xl font-semibold mb-3">{struggle.title}</h4>
                    <p className="text-gray-600">{struggle.description}</p>
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