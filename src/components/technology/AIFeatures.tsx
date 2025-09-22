import { motion } from "framer-motion";
import { Brain, Camera, ChartBar, Shield, Eye, Cpu, Network, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Network Credit Scoring",
    description: "Deep learning models trained on millions of data points for unprecedented accuracy",
    details: ["99.2% accuracy rate", "Real-time processing", "Alternative data integration"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Eye,
    title: "Computer Vision Analytics",
    description: "Advanced image recognition for business verification and inventory assessment",
    details: ["Automated document processing", "Business verification", "Inventory analysis"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Network,
    title: "Behavioral Pattern Analysis",
    description: "AI-powered analysis of customer behavior and transaction patterns",
    details: ["Fraud detection", "Risk profiling", "Predictive analytics"],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Cpu,
    title: "Edge Computing Infrastructure",
    description: "Distributed processing for lightning-fast decision making",
    details: ["Sub-second response", "99.9% uptime", "Global scalability"],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Advanced Security Layer",
    description: "Military-grade encryption and security protocols",
    details: ["End-to-end encryption", "Compliance ready", "Zero-trust architecture"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: ChartBar,
    title: "Predictive Risk Modeling",
    description: "Machine learning models that predict and prevent defaults",
    details: ["Early warning systems", "Portfolio optimization", "Dynamic pricing"],
    color: "from-cyan-500 to-blue-500"
  }
];

export const AIFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Next-Gen AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge artificial intelligence and machine learning algorithms, 
            our platform delivers unmatched accuracy and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.1 }}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-sm">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "99.2%", label: "Accuracy Rate" },
            { value: "<500ms", label: "Response Time" },
            { value: "42M+", label: "Businesses Served" },
            { value: "99.9%", label: "Uptime SLA" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};