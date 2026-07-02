import { motion } from "framer-motion";
import { Users, Banknote, Calendar, Building2, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "4,000+", label: "Businesses Financed" },
  { icon: Banknote, value: "₱100M+", label: "Loans Disbursed" },
  { icon: Calendar, value: "2 Years", label: "Operating in PH" },
  { icon: Building2, value: "5", label: "Partner Employers" },
  { icon: MapPin, value: "Metro Manila", label: "Served Today" },
];

export const ImpactStats = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 mb-8"
        >
          Trusted by Filipino entrepreneurs
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 max-w-6xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent mb-3" strokeWidth={1.5} />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
