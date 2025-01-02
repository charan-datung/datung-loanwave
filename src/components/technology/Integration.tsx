import { Code2, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Integration = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Integration Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Seamlessly integrate our AI technology into your existing systems
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="default">
              Schedule Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600 mb-4">
              RESTful APIs with comprehensive documentation for easy integration with your systems.
            </p>
            <Button variant="link" className="text-primary">Learn More →</Button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Workflow className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-600 mb-4">
              Automated workflows that seamlessly connect with your existing business processes.
            </p>
            <Button variant="link" className="text-primary">Learn More →</Button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
            <p className="text-gray-600 mb-4">
              Process data and get results in real-time with our high-performance infrastructure.
            </p>
            <Button variant="link" className="text-primary">Learn More →</Button>
          </div>
        </div>
      </div>
    </section>
  );
};