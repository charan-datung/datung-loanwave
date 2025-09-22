import { CheckCircle2, Store, Users, Camera, FileText, HandHeart } from "lucide-react";

export const Requirements = () => {
  const requirements = [
    {
      icon: CheckCircle2,
      title: "Valid ID Only",
      description: "Any government-issued ID is accepted",
      details: ["Driver's License", "Postal ID", "PhilHealth ID", "SSS ID"],
      color: "primary"
    },
    {
      icon: Store,
      title: "Proof of Business",
      description: "Simple pictures of your business location",
      details: ["Store front photo", "Product display", "Business signage", "Interior setup"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Group Formation",
      description: "Form a group of 3-5 business owners from your area",
      details: ["Same barangay preferred", "Mutual guarantee", "Group solidarity", "Shared responsibility"],
      color: "accent"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Simple Requirements
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            We believe in keeping things simple. No complicated paperwork, no lengthy processes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {requirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <req.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-medium mb-3 text-gray-900">{req.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{req.description}</p>
                </div>
                
                <div className="space-y-2">
                  {req.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-gray-500 font-light">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-500 font-light">
              That's it! No bank statements, no income tax returns, no collateral needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};