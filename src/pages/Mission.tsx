import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/mission/MissionHero";
import { MissionValues } from "@/components/mission/MissionValues";
import { ImpactMetrics } from "@/components/mission/ImpactMetrics";
import { MissionTestimonials } from "@/components/mission/MissionTestimonials";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MissionHero />
      <MissionValues />
      <ImpactMetrics />
      <MissionTestimonials />
      <Footer />
    </div>
  );
};

export default Mission;