
import { motion } from "framer-motion";

export const Partners = () => {
  const partners = [
    {
      name: "NVIDIA",
      logo: "/lovable-uploads/3e2787a3-b40b-4df2-8d60-8ebaeb631904.png",
      url: "https://www.nvidia.com"
    },
    {
      name: "Google Cloud",
      logo: "/lovable-uploads/211b85f9-fb99-43a4-a7cc-06a3e20a9a76.png",
      url: "https://cloud.google.com"
    },
    {
      name: "Antler",
      logo: "/lovable-uploads/3cd6b113-dd20-469d-ad46-195e9723307d.png",
      url: "https://www.antler.co"
    },
    {
      name: "KAYA Founders",
      logo: "/lovable-uploads/808e8ab7-3b12-4a70-9589-e598617df994.png",
      url: "https://kayafounders.com"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-primary">Powered By</h2>
          <p className="text-gray-600 text-sm md:text-base">Backed by world-class partners</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex justify-center"
            >
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
