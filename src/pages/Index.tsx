import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { AnimatedParticles } from "@/components/careers/AnimatedParticles";

import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <AnimatedParticles />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="cta">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
};

export default Index;