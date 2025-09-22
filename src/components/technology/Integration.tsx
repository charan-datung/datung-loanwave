import { motion } from "framer-motion";
import { Code2, Workflow, Zap, Database, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

const integrationOptions = [
  {
    icon: Code2,
    title: "RESTful API Integration",
    description: "Comprehensive APIs with extensive documentation and SDK support",
    features: ["GraphQL & REST endpoints", "Real-time webhooks", "Rate limiting & authentication"],
    codeExample: `POST /api/v1/credit-assessment
{
  "business_id": "BIZ123",
  "loan_amount": 50000,
  "data_sources": ["bank", "social", "geo"]
}`
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Scalable cloud infrastructure built for enterprise-grade performance",
    features: ["Auto-scaling", "99.9% uptime SLA", "Global CDN"],
    codeExample: `# Deploy with Kubernetes
kubectl apply -f datung-api.yaml
# Auto-scaling enabled
# Multi-region deployment`
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Seamless integration with existing business processes and systems",
    features: ["Custom workflows", "Process automation", "Event-driven architecture"],
    codeExample: `workflow:
  - trigger: loan_application
  - action: credit_check
  - condition: score > 750
  - approve: auto_approve`
  }
];

export const Integration = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Seamless Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect our AI technology to your existing systems with enterprise-grade APIs, 
            comprehensive documentation, and world-class support.
          </p>
          <ContactForm 
            defaultType="demo"
            triggerComponent={
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get API Access
              </Button>
            }
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {integrationOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Code Example */}
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <pre className="text-xs text-green-400 font-mono overflow-x-auto">
                      <code>{option.codeExample}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Integration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Enterprise-Ready Performance</h3>
            <p className="text-gray-300">Built for scale, designed for reliability</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "API Uptime" },
              { value: "<100ms", label: "Response Time" },
              { value: "50K+", label: "API Calls/sec" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};