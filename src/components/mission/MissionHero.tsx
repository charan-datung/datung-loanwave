import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";

export const MissionHero = () => {
  return (
    <PageWrapper
      backgroundImage="/images/mission-hero-vendor.jpg"
      className="min-h-screen flex items-center justify-center text-white pt-16 font-manrope"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
          >
            On a mission to close the <em className="italic font-serif">MSME finance gap</em>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Financial inclusion powers economic growth.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-2"
            >
              We're making it accessible to every entrepreneur.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};