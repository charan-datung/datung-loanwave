import { Store, Building2, Users, Truck, Scissors, Coffee, ShoppingBag, Wrench } from "lucide-react";

export const WhoCanApply = () => {
  const businesses = [
    { title: "Sari-sari Store Owners", icon: Store, description: "Neighborhood convenience stores" },
    { title: "Carinderia Operators", icon: Building2, description: "Food service establishments" },
    { title: "Market Vendors", icon: ShoppingBag, description: "Public market stall owners" },
    { title: "Small Retail Businesses", icon: Store, description: "Mini-mart and specialty shops" },
    { title: "Service Providers", icon: Users, description: "Personal and business services" },
    { title: "Food Cart Vendors", icon: Coffee, description: "Mobile food businesses" },
    { title: "Beauty Salons", icon: Scissors, description: "Hair and beauty services" },
    { title: "Repair Shops", icon: Wrench, description: "Electronics and appliance repair" },
    { title: "Delivery Services", icon: Truck, description: "Local logistics and delivery" }
  ];

  return (
    <section 
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 77, 77, 0.95), rgba(0, 179, 122, 0.9)), url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2')`,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Who Can Apply?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We support all types of Filipino micro and small businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {businesses.map((business, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors duration-300">
                    <business.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {business.title}
                    </h3>
                    <p className="text-white/80 text-sm">{business.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white text-lg font-semibold mb-2">Don't see your business type?</p>
            <p className="text-white/80">Contact us! We support most micro and small business types.</p>
          </div>
        </div>
      </div>
    </section>
  );
};