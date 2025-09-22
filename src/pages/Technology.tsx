import { Navbar } from "@/components/Navbar";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { AIFeatures } from "@/components/technology/AIFeatures";
import { Integration } from "@/components/technology/Integration";
import { TechStack } from "@/components/technology/TechStack";
import { InteractiveDemo } from "@/components/technology/InteractiveDemo";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <TechnologyHero />
      <AIFeatures />
      <TechStack />
      <InteractiveDemo />
      <Integration />
      <Footer />
    </div>
  );
};

export default Technology;