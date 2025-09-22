import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { CallToAction } from "@/components/home/CallToAction";
import { motion } from "framer-motion";

// Floating background particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 25 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 0,
            scale: 0
          }}
          animate={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 360,
            scale: [0, 1, 0.8, 1, 0]
          }}
          transition={{ 
            duration: 20 + Math.random() * 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          <div className={`rounded-lg opacity-20 ${
            i % 4 === 0 ? 'w-3 h-3 bg-gradient-to-r from-primary to-secondary' : 
            i % 4 === 1 ? 'w-2 h-6 bg-gradient-to-b from-secondary to-accent' : 
            i % 4 === 2 ? 'w-4 h-1 bg-gradient-to-r from-accent to-primary' :
            'w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

// Animated geometric shapes
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 0
          }}
          animate={{ 
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            ],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25 + Math.random() * 20, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          <div className={`opacity-10 ${
            i % 3 === 0 ? 'w-8 h-8 border-2 border-primary rotate-45' : 
            i % 3 === 1 ? 'w-6 h-6 bg-secondary/30 rounded-full' : 
            'w-10 h-2 bg-accent/30 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <Hero />
      <Solutions />
      <Products />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;