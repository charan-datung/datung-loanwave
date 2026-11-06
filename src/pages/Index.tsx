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
        title="Datung | Business Loans for Philippine SMEs"
        description="Business loans and working capital for established Philippine suppliers and distributors, from an SEC-registered lender. Apply at datungapply.com."
        path="/"
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
              { "@type": "Question", name: "Who can apply for a Datung loan?", acceptedAnswer: { "@type": "Answer", text: "Established Philippine suppliers and distributors who sell to small businesses on terms. See datungapply.com for current requirements." } },
              { "@type": "Question", name: "What are the requirements to apply?", acceptedAnswer: { "@type": "Answer", text: "To apply for a business loan, you need 1 valid ID and your last 3 months of bank or GCash statements." } },
              { "@type": "Question", name: "How fast is loan approval at Datung?", acceptedAnswer: { "@type": "Answer", text: "Business loan pre-approval is usually within about 1 hour of complete documents, during business hours. This is an aim, not a guarantee. See datungapply.com/how-it-works." } },
              { "@type": "Question", name: "Is Datung SEC-licensed?", acceptedAnswer: { "@type": "Answer", text: "Yes, Datung is licensed by the Securities and Exchange Commission of the Philippines." } }
            ]
          }
        ]}
      />
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <Solutions />
        <HowItWorks />
        <Products />
        <Partners />
        <FAQ />
        <VisitUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;