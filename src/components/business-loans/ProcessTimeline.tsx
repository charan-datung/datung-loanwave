import { Users, FileCheck, Store, CheckCircle2, CreditCard } from "lucide-react";

export const ProcessTimeline = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 179, 122, 0.95), rgba(0, 214, 143, 0.9)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85')`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Simple Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Group Formation", icon: Users },
              { title: "Documentation", icon: FileCheck },
              { title: "Site Visit", icon: Store },
              { title: "Approval", icon: CheckCircle2 },
              { title: "Cash Release", icon: CreditCard },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                {index < 4 && (
                  <div className="hidden md:block w-full h-0.5 bg-white/30 absolute mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};