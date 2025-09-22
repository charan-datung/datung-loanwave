import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { PageWrapper } from "@/components/PageWrapper";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <PageWrapper
      backgroundImage="https://images.unsplash.com/photo-1527576539890-dfa815648363"
      gradientColors="rgba(0, 77, 77, 0.6), rgba(0, 179, 122, 0.5)"
      className="py-16 md:py-20"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-6 md:mb-8 text-white/90"
        >
          Join thousands of Filipino businesses leveraging our financial technology solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactForm 
            defaultType="loan"
            triggerComponent={
              <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                Get Started Today
              </Button>
            }
          />
        </motion.div>
      </div>
    </PageWrapper>
  );
};