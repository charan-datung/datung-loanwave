import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const facts = [
  {
    stat: "$491 Billion",
    description: "MSME finance gap in Southeast Asia"
  },
  {
    stat: "42 Million+",
    description: "MSMEs in Southeast Asia are excluded from the formal financial system"
  },
  {
    stat: "32%",
    description: "Women-owned businesses account for 32% of the MSME finance gap"
  },
  {
    stat: "55%",
    description: "MSMEs face severe financing constraints in Southeast Asia"
  }
];

export const MissionFacts = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Facts we're fighting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The numbers that drive our mission to close the MSME finance gap
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <Card className="group card-3d-primary border-l-4 border-l-primary bg-white relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    {fact.stat}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="text-gray-700 font-medium"
                  >
                    {fact.description}
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