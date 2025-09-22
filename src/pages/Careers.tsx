import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { TeamCulture } from "@/components/careers/TeamCulture";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <TeamCulture />
      <JobOpenings />
      <AmbassadorProgram />
      <Footer />
    </div>
  );
};

export default Careers;