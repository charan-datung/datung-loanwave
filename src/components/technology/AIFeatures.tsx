import { Brain, Camera, ChartBar, Shield } from "lucide-react";

export const AIFeatures = () => {
  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our AI Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence and machine learning solutions for modern financial services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-3d">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Automated Credit Scoring</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                • Machine learning models for credit risk assessment
              </li>
              <li className="flex items-start gap-2">
                • Alternative data analysis
              </li>
              <li className="flex items-start gap-2">
                • Real-time scoring capabilities
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-3d">
            <Camera className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Visual Assessment Tools</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                • Computer vision for business verification
              </li>
              <li className="flex items-start gap-2">
                • Automated document processing
              </li>
              <li className="flex items-start gap-2">
                • Visual inventory analysis
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-3d">
            <ChartBar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Risk Management Systems</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                • Predictive risk modeling
              </li>
              <li className="flex items-start gap-2">
                • Portfolio monitoring
              </li>
              <li className="flex items-start gap-2">
                • Early warning systems
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-3d">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Loan Management Platform</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                • End-to-end loan processing
              </li>
              <li className="flex items-start gap-2">
                • Automated underwriting
              </li>
              <li className="flex items-start gap-2">
                • Collection management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};