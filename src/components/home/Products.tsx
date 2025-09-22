import { ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

export const Products = () => {
  const lendingProducts = [
    {
      icon: Building2,
      title: "MSME Loans",
      description: "Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.",
      link: "/business-loans",
      gradient: "from-primary to-secondary",
      buttonColor: "bg-primary hover:bg-primary/90"
    },
    {
      icon: Users,
      title: "Salary Loans", 
      description: "Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.",
      link: "/salary-loans",
      gradient: "from-secondary to-accent",
      buttonColor: "bg-secondary hover:bg-secondary/90"
    }
  ];

  const techProducts = [
    {
      icon: ChartBar,
      title: "Credit Scoring",
      description: "AI-powered credit assessment system tailored for the Filipino market and local business patterns."
    },
    {
      icon: Shield,
      title: "Risk Management", 
      description: "Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions."
    },
    {
      icon: Database,
      title: "Loan Management",
      description: "End-to-end loan processing platform designed specifically for Filipino lenders and regulations."
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-primary">Our Products</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive financial solutions designed for the Filipino market
          </p>
        </motion.div>
        
        {/* Lending Products */}
        <div className="mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-primary"
          >
            Lending Products
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {lendingProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                  {/* Elegant gradient overlay */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Subtle light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${product.gradient} rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-lg hover:shadow-xl`}
                    >
                      <product.icon className="w-6 md:w-8 h-6 md:h-8 text-white transition-all duration-700 ease-out group-hover:scale-105" />
                    </motion.div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">{product.title}</h4>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed flex-grow transition-all duration-700 ease-out group-hover:text-gray-700">{product.description}</p>
                    <Link to={product.link}>
                      <Button className={`w-full ${product.buttonColor} text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-md text-sm md:text-base py-2 md:py-3`}>Learn More</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Products */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-primary"
          >
            Technology Products
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            {techProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="group"
              >
                <div className="p-4 md:p-6 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                  {/* Elegant gradient overlay */}
                  <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Subtle light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.4 }}
                      className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md"
                    >
                      <product.icon className="w-5 md:w-6 h-5 md:h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                      className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary"
                    >
                      {product.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                      className="text-sm md:text-base text-gray-600 leading-relaxed transition-all duration-700 ease-out group-hover:text-gray-700"
                    >
                      {product.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};