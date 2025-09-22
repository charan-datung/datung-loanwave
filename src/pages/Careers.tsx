import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { WhyNotJoinUs } from "@/components/careers/WhyNotJoinUs";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { TeamCulture } from "@/components/careers/TeamCulture";
import { motion } from "framer-motion";

// Floating background particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 28 }, (_, i) => (
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
            duration: 22 + Math.random() * 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        >
          <div className={`rounded-lg opacity-10 ${
            i % 5 === 0 ? 'w-4 h-4 bg-gradient-to-r from-primary to-secondary' : 
            i % 5 === 1 ? 'w-2 h-7 bg-gradient-to-b from-secondary to-accent' : 
            i % 5 === 2 ? 'w-5 h-1 bg-gradient-to-r from-accent to-primary' :
            i % 5 === 3 ? 'w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full' :
            'w-1 h-5 bg-gradient-to-b from-secondary to-primary rounded-full'
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
            duration: 28 + Math.random() * 22, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 12,
            ease: "linear"
          }}
        >
          <div className={`opacity-8 ${
            i % 4 === 0 ? 'w-9 h-9 border-2 border-primary/20 rotate-45' : 
            i % 4 === 1 ? 'w-7 h-7 bg-secondary/15 rounded-full' : 
            i % 4 === 2 ? 'w-11 h-3 bg-accent/15 rounded-full' :
            'w-5 h-5 border border-primary/20 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <WhyNotJoinUs />
      <TeamCulture />
      <JobOpenings />
      <AmbassadorProgram />
      <Footer />
    </div>
  );
};

export default Careers;