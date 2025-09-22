import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { CallToAction } from "@/components/home/CallToAction";
import { ElegantCounters } from "@/components/home/ElegantCounters";
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
    <div className="min-h-screen bg-white">
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
      <ElegantCounters />
      <section id="partners">
        <Partners />
      </section>
      <section id="contact">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
};

export default Index;