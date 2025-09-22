import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Users, DollarSign, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const joinOptions = [
  {
    icon: Users,
    title: "For Borrowers",
    description: "Apply for a loan and join a community of driven entrepreneurs.",
    action: "Apply for a Loan"
  },
  {
    icon: DollarSign,
    title: "For Investors", 
    description: "Explore opportunities to support Southeast Asian MSMEs and drive economic growth.",
    action: "Learn More"
  },
  {
    icon: HandHeart,
    title: "For Partners",
    description: "Collaborate with us to expand our reach and impact.",
    action: "Partner with Datung"
  }
];

export const MissionTestimonials = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Whether you're an entrepreneur seeking funding, an investor looking to make an impact or a partner who shares our vision, there's a place for you in the Datung community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {joinOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 group hover:bg-white/30 transition-all duration-300 transform relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                    className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300"
                  >
                    <option.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="text-xl font-semibold mb-3"
                  >
                    {option.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    className="text-white/90 mb-4"
                  >
                    {option.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1.0 }}
                  >
                    <ContactForm 
                      defaultType="loan"
                      triggerComponent={
                        <Button variant="secondary" className="w-full group-hover:shadow-lg transition-shadow duration-300">
                          {option.action}
                        </Button>
                      }
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-bold mb-6"
          >
            Ready to be part of the MSME revolution in Southeast Asia?
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Apply for a Loan
                </Button>
              }
            />
            <ContactForm 
              defaultType="partnership"
              triggerComponent={
                <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                  Partner with Datung
                </Button>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};