import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Camera, ChartBar, Shield } from "lucide-react";
import { useRef } from "react";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, end, duration]);
  
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export const AIFeatures = () => {
  return (
    <section id="ai-features" className="py-20 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: 0
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40" />
          </motion.div>
        ))}
      </div>
      
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Our AI Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence and machine learning solutions for modern financial services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: Brain,
              title: "Automated Credit Scoring",
              features: ["Machine learning models for credit risk assessment", "Alternative data analysis", "Real-time scoring capabilities"],
              color: "from-blue-500 to-purple-600",
              delay: 0
            },
            {
              icon: Camera,
              title: "Visual Assessment Tools",
              features: ["Computer vision for business verification", "Automated document processing", "Visual inventory analysis"],
              color: "from-green-500 to-teal-600",
              delay: 0.2
            },
            {
              icon: ChartBar,
              title: "Risk Management Systems",
              features: ["Predictive risk modeling", "Portfolio monitoring", "Early warning systems"],
              color: "from-orange-500 to-red-600",
              delay: 0.4
            },
            {
              icon: Shield,
              title: "Loan Management Platform",
              features: ["End-to-end loan processing", "Automated underwriting", "Collection management"],
              color: "from-purple-500 to-pink-600",
              delay: 0.6
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {feature.features.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: feature.delay + itemIndex * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Animated performance stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Performance Metrics
            </h3>
            <p className="text-gray-600">Real-time performance indicators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 99, label: "Accuracy Rate", suffix: "%" },
              { value: 500, label: "Response Time", suffix: "ms", prefix: "<" },
              { value: 42, label: "Businesses Served", suffix: "M+" },
              { value: 99, label: "Uptime SLA", suffix: ".9%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};