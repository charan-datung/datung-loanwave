import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { CallToAction } from "@/components/home/CallToAction";
import { AnimatedParticles } from "@/components/home/AnimatedParticles";
import { AnimatedCounters } from "@/components/home/AnimatedCounters";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Dark gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-20" />
      
      {/* Animated particles background */}
      <AnimatedParticles />
      
      {/* Main content with glassmorphism overlay */}
      <div className="relative z-10">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="solutions" className="relative">
          <Solutions />
        </section>
        <section id="products">
          <Products />
        </section>
        <AnimatedCounters />
        <section id="partners">
          <Partners />
        </section>
        <section id="contact">
          <CallToAction />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;