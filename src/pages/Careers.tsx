import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { WhyNotJoinUs } from "@/components/careers/WhyNotJoinUs";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { TeamCulture } from "@/components/careers/TeamCulture";
import { AnimatedCounters } from "@/components/careers/AnimatedCounters";
import { ProcessingVisualization } from "@/components/careers/ProcessingVisualization";
import { AnimatedParticles } from "@/components/careers/AnimatedParticles";

const Careers = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <AnimatedParticles />
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <AnimatedCounters />
      <WhyNotJoinUs />
      <ProcessingVisualization />
      <TeamCulture />
      <JobOpenings />
      <AmbassadorProgram />
      <Footer />
    </div>
  );
};

export default Careers;