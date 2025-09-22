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


const Mission = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
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