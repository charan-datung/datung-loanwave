import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MissionHero } from "@/components/mission/MissionHero";
import { MissionManifesto } from "@/components/mission/MissionManifesto";
import { MissionFacts } from "@/components/mission/MissionFacts";
import { UnbankedBusinesses } from "@/components/mission/UnbankedBusinesses";
import { MissionValues } from "@/components/mission/MissionValues";
import { MissionTestimonials } from "@/components/mission/MissionTestimonials";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MissionHero />
      <MissionManifesto />
      <MissionFacts />
      <UnbankedBusinesses />
      <MissionValues />
      <MissionTestimonials />
      <Footer />
    </div>
  );
};

export default Mission;