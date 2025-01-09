import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { AmbassadorProgram } from "@/components/careers/AmbassadorProgram";
import { Benefits } from "@/components/careers/Benefits";
import { SuccessStories } from "@/components/careers/SuccessStories";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CareersHero />
      <Benefits />
      <AmbassadorProgram />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Careers;