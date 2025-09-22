import { Building2, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Requirements = () => {
  const requirements = [
    {
      icon: Building2,
      title: "For Partner Companies",
      items: [
        "Company ID",
        "Latest payslip",
        "Simple application form"
      ]
    },
    {
      icon: UserCheck,
      title: "For Individual Employees", 
      items: [
        "Government ID",
        "Proof of employment",
        "Latest payslips",
        "Proof of billing"
      ]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Simple Requirements
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Minimal documentation for maximum convenience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {requirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <req.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-medium mb-6 text-gray-900">{req.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {req.items.map((item, idx) => (
                    <div key={idx} className="text-gray-600 font-light">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-500 font-light">
              Simple application process with quick approval
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};