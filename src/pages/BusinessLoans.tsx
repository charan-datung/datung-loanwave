import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/business-loans/HeroSection";
import { LoanFeatures } from "@/components/business-loans/LoanFeatures";
import { ProcessTimeline } from "@/components/business-loans/ProcessTimeline";
import { Requirements } from "@/components/business-loans/Requirements";
import { WhoCanApply } from "@/components/business-loans/WhoCanApply";
import { CTASection } from "@/components/business-loans/CTASection";
import { Footer } from "@/components/Footer";
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
          <div className={`rounded-lg opacity-15 ${
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
          <div className={`opacity-8 ${
            i % 3 === 0 ? 'w-8 h-8 border-2 border-primary/20 rotate-45' : 
            i % 3 === 1 ? 'w-6 h-6 bg-secondary/15 rounded-full' : 
            'w-10 h-2 bg-accent/15 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const BusinessLoans = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <GeometricShapes />
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/b061ac51-71b8-4cc3-8b04-a89dfdb95df5.png')", // Sari-sari store image
        }}
      />
      <Navbar />
      <HeroSection />
      <LoanFeatures />
      <ProcessTimeline />
      <Requirements />
      <WhoCanApply />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BusinessLoans;