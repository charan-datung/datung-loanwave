import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Rocket, Zap } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const TechnologyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-blue-900 z-0" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          >
            <div className="w-2 h-2 bg-cyan-400/60 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mb-2">
                AI-Powered
              </span>
              <span className="text-white font-light block mb-2">Financial</span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent italic block">
                Revolution
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed px-4">
              Transforming microfinance with cutting-edge AI, computer vision, and machine learning. 
              Empowering 42 million underserved businesses across Southeast Asia.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <ContactForm 
              defaultType="demo"
              triggerComponent={
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Experience the Future
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/70 hover:text-cyan-400"
              onClick={() => document.querySelector('[id*="demo"]')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2" />
              See Live Demo
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {[
              {
                icon: Brain,
                title: "Advanced AI Credit Scoring",
                description: "99.2% accuracy in credit risk assessment using neural networks and alternative data analysis"
              },
              {
                icon: Sparkles,
                title: "Computer Vision Analytics",
                description: "Real-time business verification and inventory analysis through advanced image processing"
              },
              {
                icon: Zap,
                title: "Lightning-Fast Processing",
                description: "Sub-second loan decisions with real-time risk monitoring and automated underwriting"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-white/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};