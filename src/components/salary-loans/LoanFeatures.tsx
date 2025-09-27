import { Zap, Calendar, Shield, Banknote, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const LoanFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Approval",
      description: "Get approved within 48 hours",
      highlight: "48 Hours"
    },
    {
      icon: Calendar,
      title: "Low Monthly Interest",
      description: "Competitive rates for individual loans",
      highlight: "Low Rate"
    },
    {
      icon: Shield,
      title: "No Collateral",
      description: "Unsecured loans for your peace of mind",
      highlight: "100% Unsecured"
    },
    {
      icon: Banknote,
      title: "Flexible Terms",
      description: "Choose the repayment schedule that works for you",
      highlight: "Your Choice"
    },
    {
      icon: Clock,
      title: "Quick Disbursement",
      description: "Receive funds within 24-48 hours",
      highlight: "1-2 Days"
    },
    {
      icon: CheckCircle2,
      title: "Simple Requirements",
      description: "Minimal documentation needed",
      highlight: "Easy Apply"
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
            Loan Features
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
            Designed for your financial convenience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.4 }}
                >
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                  className="text-xl font-medium mb-2 text-gray-900"
                >
                  {feature.title}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                  className="text-sm text-primary font-medium mb-4"
                >
                  {feature.highlight}
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 1.0 }}
                className="text-gray-600 leading-relaxed font-light"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};