import { Store, Building2, Users } from "lucide-react";

export const WhoCanApply = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 77, 77, 0.95), rgba(0, 179, 122, 0.9)), url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2')`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Who Can Apply</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Sari-sari Store Owners", icon: Store },
            { title: "Carinderia Operators", icon: Building2 },
            { title: "Market Vendors", icon: Store },
            { title: "Small Retail Businesses", icon: Building2 },
            { title: "Service Providers", icon: Users },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <item.icon className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};