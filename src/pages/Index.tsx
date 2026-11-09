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
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What are the requirements to apply?", acceptedAnswer: { "@type": "Answer", text: "To apply for a business loan, you need 1 valid ID and your last 3 months of bank or GCash statements." } },
              { "@type": "Question", name: "How long does approval take?", acceptedAnswer: { "@type": "Answer", text: "Business loan pre-approval is usually within about 1 hour of complete documents, during business hours. This is an aim, not a guarantee. See datungapply.com/how-it-works." } },
              { "@type": "Question", name: "Is Datung legally registered?", acceptedAnswer: { "@type": "Answer", text: "Yes. Datung is the operating brand of Dark Knight Lending, Inc., registered with the SEC (Registration No. 2024070157507-01) and holding Certificate of Authority No. 3506 to operate as a lending company in the Philippines." } }
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
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-primary">In the news</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-foreground">
              <li>THEPHILBIZNEWS: <a href="https://thephilbiznews.com/2026/11/09/alternative-credit-opens-doors-for-ph-msmes/" target="_blank" rel="noopener noreferrer" className="text-primary underline">“Alternative Credit Opens Doors for PH MSMEs”</a> (9 Nov 2026)</li>
              <li>Lifestyle Asia: <a href="https://lifestyleasia-onemega.com/people/charan-uttamchandani-is-using-fintech-to-make-the-invisible-visible/" target="_blank" rel="noopener noreferrer" className="text-primary underline">“Charan Uttamchandani Is Using Fintech To Make The Invisible Visible”</a> (8 Aug 2025)</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;