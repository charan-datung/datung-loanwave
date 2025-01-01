import { Navbar } from "@/components/Navbar";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { AIFeatures } from "@/components/technology/AIFeatures";
import { Integration } from "@/components/technology/Integration";
import { EnterpriseForm } from "@/components/technology/EnterpriseForm";

const Technology = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TechnologyHero />
      <AIFeatures />
      <Integration />
      <EnterpriseForm />
    </div>
  );
};

export default Technology;