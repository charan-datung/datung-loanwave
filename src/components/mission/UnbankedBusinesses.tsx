import { Store, TrendingDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const struggles = [
  {
    icon: Store,
    title: "Lack of Credit History",
    description: "Traditional banks require credit histories that many small businesses simply do not have."
  },
  {
    icon: TrendingDown,
    title: "Exorbitant Interest Rates",
    description: "Forced to rely on informal lenders, these businesses often face crippling interest rates."
  },
  {
    icon: BookOpen,
    title: "Limited Financial Literacy",
    description: "Many small business owners lack the financial knowledge needed to navigate the formal financial system effectively."
  }
];

export const UnbankedBusinesses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The unbanked businesses</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unbanked businesses are the backbone of local economies. These include micro-enterprises like sari-sari stores, food vendors, and countless other small businesses that keep communities vibrant and thriving. However, they face significant barriers to accessing formal financial services.
            </p>
          </motion.div>

          <div className="mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              The struggles they face:
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {struggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <Card className="group card-3d bg-white relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                        className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300"
                      >
                        <struggle.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                        className="text-xl font-semibold mb-3"
                      >
                        {struggle.title}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                        className="text-gray-600"
                      >
                        {struggle.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};