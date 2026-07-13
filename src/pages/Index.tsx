import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { Solutions } from "@/components/home/Solutions";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Products } from "@/components/home/Products";
import { Partners } from "@/components/home/Partners";
import { FAQ } from "@/components/home/FAQ";
import { VisitUs } from "@/components/home/VisitUs";
import { CallToAction } from "@/components/home/CallToAction";
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
          <div className={`rounded-lg opacity-20 ${
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

// Animated geometric shapes
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 0
          }}
          animate={{ 
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            ],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25 + Math.random() * 20, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          <div className={`opacity-10 ${
            i % 3 === 0 ? 'w-8 h-8 border-2 border-primary rotate-45' : 
            i % 3 === 1 ? 'w-6 h-6 bg-secondary/30 rounded-full' : 
            'w-10 h-2 bg-accent/30 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Datung — MSME & Salary Loans in the Philippines | AI-Powered Microfinance"
        description="Datung offers fast MSME loans, SME working capital (₱100K–₱500K) and salary loans in the Philippines. AI credit scoring, 48-hour approval, community-powered lending. Over ₱100M disbursed. SEC-licensed."
        path="/"
        keywords="MSME loans Philippines, microfinance Philippines, salary loan Philippines, SME working capital, sari-sari store loan, business loan Philippines, Datung, AI lending, unbanked Filipinos"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Datung",
            url: "https://datung.io",
            logo: "https://datung.io/datung-logo.png",
            description: "AI-powered microfinance and salary lending platform in the Philippines.",
            areaServed: { "@type": "Country", name: "Philippines" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1200" }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Who can apply for a Datung loan?", acceptedAnswer: { "@type": "Answer", text: "Filipino micro-entrepreneurs, SMEs, and salaried employees can apply. Micro loans start at ₱5,000 and SME working capital goes up to ₱500,000." } },
              { "@type": "Question", name: "How fast is loan approval at Datung?", acceptedAnswer: { "@type": "Answer", text: "Datung offers 48-hour approval powered by AI credit scoring and community-based verification." } },
              { "@type": "Question", name: "Is Datung SEC-licensed?", acceptedAnswer: { "@type": "Answer", text: "Yes, Datung is licensed by the Securities and Exchange Commission of the Philippines." } }
            ]
          }
        ]}
      />
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <Hero />
      <ImpactStats />
      <Solutions />
      <HowItWorks />
      <Products />
      <Partners />
      <FAQ />
      <VisitUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;