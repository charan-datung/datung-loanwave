import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { Benefits } from "@/components/careers/Benefits";
import { SuccessStories } from "@/components/careers/SuccessStories";
import { EarningsCalculator } from "@/components/careers/EarningsCalculator";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareersHero />
      <JobOpenings />
      <Benefits />
      <AmbassadorProgram />
      <EarningsCalculator />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Careers;