import { CheckCircle2, Store, Users, Camera, FileText, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            Simple Requirements
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            We believe in keeping things simple. No complicated paperwork, no lengthy processes.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {requirements.map((req, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -8, rotateY: 5 }}
                className="text-center"
              >
                <div className="mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.4 }}
                  >
                    <req.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="text-2xl font-medium mb-3 text-gray-900"
                  >
                    {req.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    className="text-gray-600 font-light leading-relaxed"
                  >
                    {req.description}
                  </motion.p>
                </div>
                
                <div className="space-y-2">
                  {req.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 1.0 + idx * 0.1 }}
                      className="text-sm text-gray-500 font-light"
                    >
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 font-light">
              That's it! No bank statements, no income tax returns, no collateral needed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};