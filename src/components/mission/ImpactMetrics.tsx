import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const metrics = [
  {
    number: "100K+",
    label: "Lives Impacted",
  },
  {
    number: "₱500M+",
    label: "Loans Disbursed",
  },
  {
    number: "95%",
    label: "Customer Satisfaction",
  },
  {
    number: "1000+",
    label: "Partner Businesses",
  },
];

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Extract numeric part for animation
      const numericValue = parseInt(end.replace(/[^\d]/g, '')) || 0;
      setCount(Math.floor(progress * numericValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);
  
  // Format the display value
  const displayValue = end.includes('K+') ? `${count}K+` :
                      end.includes('M+') ? `₱${count}M+` :
                      end.includes('%') ? `${count}%` :
                      `${count}+`;
  
  return <span>{displayValue}</span>;
};

export const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Impact in Numbers
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    <AnimatedCounter end={metric.number} />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                    className="text-lg text-white/90"
                  >
                    {metric.label}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};