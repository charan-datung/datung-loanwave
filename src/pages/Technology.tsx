import { Navbar } from "@/components/Navbar";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { AIFeatures } from "@/components/technology/AIFeatures";
import { Integration } from "@/components/technology/Integration";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475')", // Technology circuit board
        }}
      />
      <Navbar />
      <TechnologyHero />
      <AIFeatures />
      <Integration />
      <Footer />
    </div>
  );
};

export default Technology;