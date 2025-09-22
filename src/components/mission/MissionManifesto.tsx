import { motion } from "framer-motion";

export const MissionManifesto = () => {
  const manifestoItems = [
    "For the businesses that have been overlooked, underestimated, and left behind.",
    "For the entrepreneurs who've been told they can't, or that the system isn't for them.",
    "For the dreamers who have dared to imagine something greater.",
    "We're not just asking for change; we're demanding it.",
    "We're creating a new financial landscape where opportunity isn't a privilege, but a right.",
    "We're the movement that opens doors for every small business, turning barriers into bridges and dreams into realities."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              Our <span className="font-serif italic text-primary">Manifesto</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-primary mx-auto"
            />
          </motion.div>
          
          {/* Content */}
          <div className="prose prose-lg md:prose-xl max-w-none text-center">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              {manifestoItems.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-xl md:text-2xl font-light"
                >
                  {item}
                </motion.p>
              ))}
              
              {/* Highlighted statement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 my-12"
              >
                <p className="text-xl md:text-2xl font-medium text-gray-900">
                  We're the financial force that's rewriting the rules, shifting the power back to where it belongs — into the hands of those who need it most.
                </p>
              </motion.div>
              
              {/* Call to action */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="pt-8"
              >
                <motion.div 
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  Datung
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="text-lg md:text-xl text-gray-600 font-light"
                >
                  Join the movement
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};