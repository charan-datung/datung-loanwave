import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { WhyNotJoinUs } from "@/components/careers/WhyNotJoinUs";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { TeamCulture } from "@/components/careers/TeamCulture";

const Careers = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <WhyNotJoinUs />
      <TeamCulture />
      <JobOpenings />
      <AmbassadorProgram />
      <Footer />
    </div>
  );
};

export default Careers;