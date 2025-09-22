import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Database, Camera, ChartBar, Code2, Workflow, Zap } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
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
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

export const TechnologyHero = () => {
  const [processingStep, setProcessingStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const processingSteps = [
    "Document Analysis...",
    "AI Risk Assessment...", 
    "Credit Score Calculation...",
    "Decision Complete ✓"
  ];

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background with floating elements */}
      <div
        className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 77, 77, 0.85), rgba(0, 179, 122, 0.95)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 0
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 360
            }}
            transition={{ 
              duration: 20 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          >
            <div className={`w-4 h-4 bg-gradient-to-r ${
              i % 3 === 0 ? 'from-primary to-secondary' : 
              i % 3 === 1 ? 'from-secondary to-accent' : 
              'from-accent to-primary'
            } rounded-lg opacity-30`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced title with gradient text */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
          >
            AI-Powered Financial Technology Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            Advanced credit assessment and risk management systems powered by artificial intelligence and computer vision technology.
          </motion.p>
          
          {/* Real-time processing visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="text-secondary font-mono text-lg mb-4">Live AI Processing:</div>
            <div className="flex items-center justify-center gap-4">
              {processingSteps.map((step, index) => (
                <div key={index} className={`px-4 py-2 rounded-lg transition-all duration-500 ${
                  index === processingStep 
                    ? 'bg-gradient-to-r from-secondary/30 to-accent/30 text-secondary animate-pulse' 
                    : 'text-gray-500'
                }`}>
                  {index === processingStep ? step : '•'}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <ContactForm 
              defaultType="demo"
              triggerComponent={
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-accent hover:from-primary hover:to-secondary text-white shadow-lg hover:shadow-secondary/25 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  Schedule Demo
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-secondary/70 hover:text-secondary"
              onClick={() => document.getElementById('ai-features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Features
            </Button>
          </motion.div>
        </div>
        
        {/* Enhanced feature cards with glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { icon: Brain, title: "AI Credit Scoring", description: "Advanced algorithms for accurate credit assessment and risk prediction.", color: "from-secondary to-accent" },
            { icon: Shield, title: "Risk Management", description: "Comprehensive risk analysis and monitoring systems.", color: "from-primary to-secondary" },
            { icon: Database, title: "Loan Platform", description: "End-to-end loan management and processing solution.", color: "from-accent to-primary" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};