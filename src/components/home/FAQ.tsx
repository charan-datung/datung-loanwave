import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much can I borrow from Datung?",
    a: "Micro business loans range from ₱5,000 to ₱50,000 for first-time borrowers, with higher amounts available for repeat clients in good standing. For established SMEs needing larger working capital, we now offer SME Working Capital loans from ₱100,000 to ₱500,000. Salary loan amounts depend on your employer partnership and net monthly pay.",
  },
  {
    q: "What is Datung SME Working Capital?",
    a: "SME Working Capital is a larger-ticket financing option for fixed-location businesses such as dental and veterinary clinics, print shops, laundromats, and independent retail stores. It provides ₱100,000–₱500,000 for inventory, purchase orders, or receivable advancement, with 6 or 12-month monthly amortization.",
  },
  {
    q: "What are the requirements to apply?",
    a: "For micro business loans: one valid government-issued ID, photos of your business or workplace, and a short interview with our team. No bank account, business permit, or credit history required. For SME Working Capital: business permit, recent bank statements, BIR registration, valid ID, and a co-maker. An in-person credit investigation and supplier verification will also be conducted.",
  },
  {
    q: "How long does approval take?",
    a: "Most applications are approved within 48 hours after the credit investigation visit. You'll be notified by SMS and our team will arrange disbursement.",
  },
  {
    q: "What are your interest rates and fees?",
    a: "Datung offers low, transparent interest rates that are competitive with the Philippine microfinance market. There are no hidden fees — all charges are disclosed upfront before you sign.",
  },
  {
    q: "How do I repay my loan?",
    a: "Micro loans can be repaid through weekly or monthly installments at our Sucat office, through partner payment centers, or via bank transfer. SME Working Capital is repaid through monthly amortization. We'll work with you to choose a schedule that fits your cash flow.",
  },
  {
    q: "What is the JAG group lending model?",
    a: "JAG (Joint and Group) lending lets 3-10 business owners from the same community apply together. Members co-guarantee each other, which unlocks larger loans and lower rates without requiring traditional collateral.",
  },
  {
    q: "Where is Datung located?",
    a: "Our headquarters is at the Datung Building (Wimpex), W Service Road, Sucat, Parañaque City. We currently serve clients across Metro Manila, including Manila, Las Piñas, and Parañaque.",
  },
  {
    q: "Is Datung legally registered?",
    a: "Yes. Datung is the operating brand of Dark Knight Lending, Inc., registered with the SEC (Registration No. 2024070157507-01) and holding Certificate of Authority No. 3506 to operate as a lending company in the Philippines.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions from Filipino borrowers and partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-xl px-5 md:px-6 bg-white"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
