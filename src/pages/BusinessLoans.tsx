import { Navbar } from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { HeroSection } from "@/components/business-loans/HeroSection";
import { LoanFeatures } from "@/components/business-loans/LoanFeatures";
import { SMEWorkingCapital } from "@/components/business-loans/SMEWorkingCapital";
import { ProcessTimeline } from "@/components/business-loans/ProcessTimeline";
import { Requirements } from "@/components/business-loans/Requirements";
import { WhoCanApply } from "@/components/business-loans/WhoCanApply";
import { CTASection } from "@/components/business-loans/CTASection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

// Floating background particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 25 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 0,
            scale: 0
          }}
          animate={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 360,
            scale: [0, 1, 0.8, 1, 0]
          }}
          transition={{ 
            duration: 20 + Math.random() * 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          <div className={`rounded-lg opacity-15 ${
            i % 4 === 0 ? 'w-3 h-3 bg-gradient-to-r from-primary to-secondary' : 
            i % 4 === 1 ? 'w-2 h-6 bg-gradient-to-b from-secondary to-accent' : 
            i % 4 === 2 ? 'w-4 h-1 bg-gradient-to-r from-accent to-primary' :
            'w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};


const BusinessLoans = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Business Loans for Philippine SMEs | Datung"
        description="Business loans in the Philippines for established SMEs, including working capital for clinics, print shops, laundromats and independent retail. SEC-licensed."
        path="/business-loans"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://datung.io/business-loans#service",
            name: "Datung Business Loans",
            serviceType: "Business loans and SME working capital",
            description: "Business loans go up to ₱10M. Subject to credit approval.",
            url: "https://datung.io/business-loans",
            provider: { "@id": "https://datung.io/#organization" },
            areaServed: { "@type": "Country", name: "Philippines" }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://datung.io/" },
              { "@type": "ListItem", position: 2, name: "Business Loans", item: "https://datung.io/business-loans" }
            ]
          }
        ]}
      />
      <FloatingParticles />
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/b061ac51-71b8-4cc3-8b04-a89dfdb95df5.png')", // Sari-sari store image
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <LoanFeatures />
        <SMEWorkingCapital />
        <ProcessTimeline />
        <Requirements />
        <WhoCanApply />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessLoans;