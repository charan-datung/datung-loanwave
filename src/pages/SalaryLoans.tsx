import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

// Floating background particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 20 }, (_, i) => (
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
            scale: [0, 1, 0.7, 1, 0]
          }}
          transition={{ 
            duration: 18 + Math.random() * 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        >
          <div className={`rounded-lg opacity-12 ${
            i % 4 === 0 ? 'w-3 h-3 bg-gradient-to-r from-secondary to-accent' : 
            i % 4 === 1 ? 'w-2 h-5 bg-gradient-to-b from-primary to-secondary' : 
            i % 4 === 2 ? 'w-4 h-1 bg-gradient-to-r from-accent to-primary' :
            'w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full'
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
      {Array.from({ length: 10 }, (_, i) => (
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
            duration: 22 + Math.random() * 18, 
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 8,
            ease: "linear"
          }}
        >
          <div className={`opacity-6 ${
            i % 3 === 0 ? 'w-6 h-6 border-2 border-secondary/25 rotate-45' : 
            i % 3 === 1 ? 'w-5 h-5 bg-primary/10 rounded-full' : 
            'w-8 h-2 bg-accent/10 rounded-full'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

const SalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <GeometricShapes />
      <Navbar />
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-primary">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light mb-12 text-white leading-tight"
          >
            Salary Loan Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/80 mb-16 max-w-2xl mx-auto font-light"
          >
            Choose the right loan solution for your needs
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                to: "/salary-loans/company",
                icon: Building2,
                title: "For Companies",
                description: "Partner with us to provide financial wellness benefits that drive productivity",
                delay: 0.8
              },
              {
                to: "/salary-loans/employee", 
                icon: User,
                title: "For Employees",
                description: "Access quick and flexible loan options with competitive rates",
                delay: 1.0
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: option.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={option.to} className="block group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: option.delay + 0.3, type: "spring", bounce: 0.4 }}
                    >
                      <option.icon className="w-20 h-20 mx-auto mb-6 text-accent" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: option.delay + 0.6 }}
                      className="text-3xl font-medium mb-4 text-white"
                    >
                      {option.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: option.delay + 0.8 }}
                      className="mb-8 text-white/80 font-light leading-relaxed"
                    >
                      {option.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: option.delay + 1.0 }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 rounded-full transition-all"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SalaryLoans;