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
        title="Technology | Datung"
        description="Business loans and working capital for established Philippine suppliers and distributors, from an SEC-registered lender. Apply at datungapply.com."
        path="/technology"
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