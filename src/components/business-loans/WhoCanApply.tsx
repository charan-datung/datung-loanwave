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
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Who Can Apply?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            We support all types of Filipino micro and small businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <business.icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {business.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">{business.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-lg mx-auto">
            <p className="text-gray-900 font-medium mb-2">Don't see your business type?</p>
            <p className="text-gray-500 font-light">Contact us! We support most micro and small business types.</p>
          </div>
        </div>
      </div>
    </section>
  );
};