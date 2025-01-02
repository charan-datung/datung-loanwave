import { Navbar } from "@/components/Navbar";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { AIFeatures } from "@/components/technology/AIFeatures";
import { Integration } from "@/components/technology/Integration";
import { EnterpriseForm } from "@/components/technology/EnterpriseForm";

const Technology = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0')", // Technology and data visualization
        }}
      />
      <Navbar />
      <TechnologyHero />
      <AIFeatures />
      <Integration />
      <EnterpriseForm />
    </div>
  );
};

export default Technology;