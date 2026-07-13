import { Building2, FileCheck, Briefcase, Calendar, ArrowRight, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

export const SMEWorkingCapital = () => {
  const features = [
    {
      icon: Building2,
      title: "Larger Ticket Sizes",
      description: "₱100,000 – ₱500,000 working capital for established businesses with predictable operations.",
    },
    {
      icon: Calendar,
      title: "Flexible Tenor",
      description: "Choose between 6 or 12 months, with monthly amortization that matches your cash flow.",
    },
    {
      icon: Receipt,
      title: "Receivable Financing",
      description: "Optional receivable advancement for businesses with verified invoices from Tier 1 counterparties.",
    },
    {
      icon: FileCheck,
      title: "Document-Based Approval",
      description: "Streamlined underwriting using business permits, bank statements, and a co-maker.",
    },
    {
      icon: Briefcase,
      title: "Premises Verification",
      description: "In-person credit investigation and supplier verification to confirm business viability.",
    },
  ];

  const targetSegments = [
    "Dental clinics",
    "Veterinary clinics",
    "Print shops",
    "Laundromats",
    "Independent retail shops",
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            New Larger-Ticket Vertical
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            SME Working Capital
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            A parallel financing channel for fixed-location SMEs that need bigger
            working capital, inventory funding, or PO/receivable support.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="mb-8">
                <div className="text-sm text-gray-500 font-medium mb-2">Loan Amount</div>
                <div className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                  ₱100K – ₱500K
                </div>
                <div className="text-gray-600 font-light">
                  Primary pilot range: ₱150K – ₱250K
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Tenor</span>
                  <span className="font-medium text-gray-900">6 or 12 months</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Repayment</span>
                  <span className="font-medium text-gray-900">Monthly amortization</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Disbursement</span>
                  <span className="font-medium text-gray-900">GCash or bank transfer</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Approval</span>
                  <span className="font-medium text-gray-900">48-Hour Approval</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 font-light">Interest</span>
                  <span className="font-medium text-gray-900">Competitive Interest</span>
                </div>
              </div>

              <ContactForm
                defaultType="loan"
                triggerComponent={
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 text-lg transition-all rounded-full group"
                  >
                    Apply for SME Working Capital
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
            </motion.div>

            {/* Right: Features & target segments */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Ideal for fixed-location businesses such as:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {targetSegments.map((segment, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                    >
                      {segment}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
