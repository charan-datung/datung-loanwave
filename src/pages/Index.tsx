import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { CallToAction } from "@/components/home/CallToAction";
import { ImpactMetrics } from "@/components/mission/ImpactMetrics";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated particles component
const AnimatedParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Smooth scroll navigation
const SmoothScrollNav = () => {
  const navItems = [
    { label: "Home", target: "hero" },
    { label: "Solutions", target: "solutions" },
    { label: "Products", target: "products" },
    { label: "Impact", target: "impact" },
    { label: "Partners", target: "partners" },
  ];

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
        <div className="space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="block w-full text-xs text-white/70 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated particles */}
      <AnimatedParticles />
      
      {/* Smooth scroll navigation */}
      <SmoothScrollNav />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="impact">
          <ImpactMetrics />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;