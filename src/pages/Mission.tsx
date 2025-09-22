import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/mission/MissionHero";
import { MissionManifesto } from "@/components/mission/MissionManifesto";
import { MissionFacts } from "@/components/mission/MissionFacts";
import { UnbankedBusinesses } from "@/components/mission/UnbankedBusinesses";
import { MissionValues } from "@/components/mission/MissionValues";
import { MissionTestimonials } from "@/components/mission/MissionTestimonials";
import { motion } from "framer-motion";

// Floating background particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }, (_, i) => (
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
            scale: [0, 1, 0.6, 1, 0]
          }}
          transition={{ 
            duration: 25 + Math.random() * 20, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        >
          <div className={`rounded-lg opacity-15 ${
            i % 5 === 0 ? 'w-4 h-4 bg-gradient-to-r from-primary to-secondary' : 
            i % 5 === 1 ? 'w-2 h-8 bg-gradient-to-b from-secondary to-accent' : 
            i % 5 === 2 ? 'w-6 h-1 bg-gradient-to-r from-accent to-primary' :
            i % 5 === 3 ? 'w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full' :
            'w-1 h-6 bg-gradient-to-b from-secondary to-primary rounded-full'
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
            duration: 30 + Math.random() * 25, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 12,
            ease: "linear"
          }}
        >
          <div className={`opacity-8 ${
            i % 4 === 0 ? 'w-10 h-10 border-2 border-primary/30 rotate-45' : 
            i % 4 === 1 ? 'w-8 h-8 bg-secondary/20 rounded-full' : 
            i % 4 === 2 ? 'w-12 h-3 bg-accent/20 rounded-full' :
            'w-6 h-6 border border-primary/30 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const Mission = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <MissionHero />
      <MissionManifesto />
      <MissionFacts />
      <UnbankedBusinesses />
      <MissionValues />
      <MissionTestimonials />
      <Footer />
    </div>
  );
};

export default Mission;