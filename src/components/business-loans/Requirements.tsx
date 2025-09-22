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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Simple Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in keeping things simple. No complicated paperwork, no lengthy processes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-${req.color}/5 to-${req.color}/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${req.color} to-${req.color}/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <req.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{req.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{req.description}</p>
                  
                  <div className="space-y-3">
                    {req.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-${req.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full font-semibold">
              <HandHeart className="w-5 h-5" />
              That's it! No bank statements, no income tax returns, no collateral needed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};