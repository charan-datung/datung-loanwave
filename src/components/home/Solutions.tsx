import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";
import businessLoansBg from "@/assets/business-loans-bg-new.jpg";
import salaryLoansBg from "@/assets/salary-loans-bg.jpg";
import technologyBg from "@/assets/technology-solutions-bg.jpg";
import { motion } from "framer-motion";

export const Solutions = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-primary px-4">Our Solutions</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            We have <span className="font-bold text-primary">empowered</span> <span className="font-bold text-primary">thousands</span> of Filipino entrepreneurs and professionals with innovative financial solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-sm md:max-w-none mx-auto px-4">
          {[
            {
              to: "/business-loans",
              title: "Business Loans",
              description: "Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs.",
              backgroundImage: businessLoansBg,
              delay: 0
            },
            {
              to: "/salary-loans",
              title: "Salary Loans", 
              description: "Employee loan management and HR technology solutions for Filipino workplaces and professionals.",
              backgroundImage: salaryLoansBg,
              delay: 0.2
            },
            {
              to: "/technology",
              title: "Technology Solutions",
              description: "Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market.",
              backgroundImage: technologyBg,
              delay: 0.4
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: solution.delay }}
            >
              <Link to={solution.to} className="group">
                <ServiceCard
                  title={solution.title}
                  description={solution.description}
                  backgroundImage={solution.backgroundImage}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};