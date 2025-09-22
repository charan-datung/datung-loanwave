import { Users, FileCheck, Store, CheckCircle2, CreditCard } from "lucide-react";

export const ProcessTimeline = () => {
  const steps = [
    { 
      title: "Group Formation", 
      icon: Users, 
      description: "Form a group of 3-5 business owners",
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
    <section 
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 179, 122, 0.95), rgba(0, 214, 143, 0.9)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85')`,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple 3-Day Process
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From application to cash in hand - it's that simple
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-white/30 via-white/60 to-white/30"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border-2 border-white/30 group-hover:border-accent/50">
                    <step.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full">
                    {step.time}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 group-hover:bg-white/20 transition-all duration-300">
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};