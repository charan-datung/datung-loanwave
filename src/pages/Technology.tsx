import { Navbar } from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import { AIFeatures } from "@/components/technology/AIFeatures";
import { Integration } from "@/components/technology/Integration";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="AI Credit Scoring & Lending Technology | Datung Philippines"
        description="Datung's proprietary AI credit scoring evaluates alternative data to serve unbanked Filipinos. Community verification, mobile-first onboarding, real-time risk analytics."
        path="/technology"
        keywords="AI credit scoring Philippines, alternative credit data, fintech Philippines, lending technology, Datung"
      />
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475')", // Technology circuit board
        }}
      />
      <Navbar />
      <main>
        <TechnologyHero />
        <AIFeatures />
        <Integration />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;