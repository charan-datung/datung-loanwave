import { motion } from "framer-motion";
import { FileText, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description: "Submit your application online or at our Sucat office. Minimal paperwork, no business permit required.",
  },
  {
    icon: Sparkles,
    title: "Get Assessed",
    description: "Our AI evaluates your application using alternative data — no credit history needed.",
  },
  {
    icon: ShieldCheck,
    title: "Credit Investigation",
    description: "A short field visit by our team to verify your business and answer your questions in person.",
  },
  {
    icon: CheckCircle2,
    title: "Approval",
    description: "Get your decision and receive funds within 48 hours. Simple, transparent, fast.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
            From Application to Approval in 48 Hours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process built for Filipino entrepreneurs and professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 h-full border border-gray-100 hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
                    </div>
                    <span className="text-4xl font-bold text-gray-100 leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
