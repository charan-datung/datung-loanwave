import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Progress } from "@/components/ui/progress";
import { useRef } from "react";

export const Integration = () => {
  const [apiProgress, setApiProgress] = useState(0);
  const [workflowProgress, setWorkflowProgress] = useState(0);
  const [processingProgress, setProcessingProgress] = useState(0);
  
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setApiProgress(95), 200);
      const timer2 = setTimeout(() => setWorkflowProgress(88), 600);
      const timer3 = setTimeout(() => setProcessingProgress(97), 1000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 0,
              scale: 0.5
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 360,
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 25 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          >
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${
              i % 3 === 0 ? 'from-primary/20 to-secondary/20' : 
              i % 3 === 1 ? 'from-secondary/20 to-accent/20' : 
              'from-accent/20 to-primary/20'
            } backdrop-blur-sm border border-white/10`} />
          </motion.div>
        ))}
      </div>
      
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Integration Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seamlessly integrate our AI technology into your existing systems with real-time monitoring and analytics
          </p>
          <div className="flex justify-center gap-4">
            <ContactForm 
              defaultType="demo"
              triggerComponent={
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-accent hover:from-primary hover:to-secondary text-white shadow-lg hover:shadow-secondary/25 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              }
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: Code2,
              title: "API Integration",
              description: "RESTful APIs with comprehensive documentation for easy integration with your systems.",
              color: "from-secondary to-accent",
              delay: 0
            },
            {
              icon: Workflow,
              title: "Workflow Automation",
              description: "Automated workflows that seamlessly connect with your existing business processes.",
              color: "from-primary to-secondary",
              delay: 0.2
            },
            {
              icon: Zap,
              title: "Real-time Processing",
              description: "Process data and get results in real-time with our high-performance infrastructure.",
              color: "from-accent to-primary",
              delay: 0.4
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ContactForm 
                  defaultType="partnership"
                  triggerComponent={
                    <Button variant="link" className="text-secondary hover:text-accent p-0">Learn More →</Button>
                  }
                />
              </div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Real-time performance indicators */}
        <motion.div
          ref={progressRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
              Live System Performance
            </h3>
            <p className="text-gray-600">Real-time integration health metrics</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "API Response Rate", progress: apiProgress, color: "from-secondary to-accent" },
              { label: "Workflow Efficiency", progress: workflowProgress, color: "from-primary to-secondary" },
              { label: "Processing Speed", progress: processingProgress, color: "from-accent to-primary" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">{metric.label}</div>
                <div className="relative mb-4">
                  <Progress value={metric.progress} className="h-3 bg-gray-200" />
                  <div 
                    className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.progress}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};