import { Store, Building2, Users, Truck, Scissors, Coffee, ShoppingBag, Wrench } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Who Can Apply?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            We support all types of Filipino micro and small businesses
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.4 }}
                >
                  <business.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-lg font-medium text-gray-900 mb-1"
                  >
                    {business.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    className="text-sm text-gray-500 font-light"
                  >
                    {business.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-lg mx-auto">
            <p className="text-gray-900 font-medium mb-2">Don't see your business type?</p>
            <p className="text-gray-500 font-light">Contact us! We support most micro and small business types.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};