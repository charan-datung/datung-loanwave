import { Users, FileCheck, Store, CheckCircle2, CreditCard } from "lucide-react";

export const ProcessTimeline = () => {
  const steps = [
    { 
      title: "Group Formation", 
      icon: Users, 
      description: "Groups of 3-10 business owners",
      time: "Day 1"
    },
    { 
      title: "Documentation", 
      icon: FileCheck, 
      description: "Submit basic requirements",
      time: "Day 1"
    },
    { 
      title: "Site Visit", 
      icon: Store, 
      description: "Our team visits your business",
      time: "Day 2"
    },
    { 
      title: "Approval", 
      icon: CheckCircle2, 
      description: "Get loan approval notification",
      time: "Day 3"
    },
    { 
      title: "Cash Release", 
      icon: CreditCard, 
      description: "Receive your funds",
      time: "Day 3"
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Simple 3-Day Process
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            From application to cash in hand - streamlined and efficient
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-300"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-sm">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    {step.time}
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};