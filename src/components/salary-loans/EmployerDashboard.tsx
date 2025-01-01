import { LayoutDashboard, CheckCircle2, Wallet, BarChart3, Users, Zap } from "lucide-react";

export const EmployerDashboard = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Real-time Loan Monitoring",
      description: "Track all loan activities in real-time"
    },
    {
      icon: CheckCircle2,
      title: "Easy Approval Process",
      description: "Streamlined approval workflows"
    },
    {
      icon: Wallet,
      title: "Payroll Integration",
      description: "Seamless integration with your payroll system"
    },
    {
      icon: BarChart3,
      title: "Financial Wellness Metrics",
      description: "Track program impact and ROI"
    },
    {
      icon: Users,
      title: "Employee Performance Insights",
      description: "Measure productivity improvements"
    },
    {
      icon: Zap,
      title: "Automated Disbursement",
      description: "Quick and efficient loan processing"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Powerful Dashboard Features
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to manage your employee financial wellness program
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};