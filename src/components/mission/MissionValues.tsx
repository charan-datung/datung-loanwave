import { Users, BarChart3, GraduationCap, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const approaches = [
  {
    icon: Users,
    title: "Community-Centric Lending",
    description: "We've pioneered the Joint Accountability Group (JAG) model, fostering a supportive community of entrepreneurs who uplift each other.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Innovation",
    description: "Our proprietary algorithm analyzes over 100 data points to assess creditworthiness, going beyond traditional metrics to unlock opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We believe in empowering entrepreneurs with knowledge. Our platform offers financial literacy courses to all users.",
  },
  {
    icon: Eye,
    title: "Transparency and Trust",
    description: "We're committed to clear, simple terms and transparent pricing. There are no hidden fees or surprises.",
  },
];

export const MissionValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            How we're revolutionizing financial access for unbanked businesses
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, rotateX: -2 }}
            >
              <Card className="group card-3d bg-white relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.4 }}
                    className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <approach.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                    className="text-xl font-semibold mb-4"
                  >
                    {approach.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {approach.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};