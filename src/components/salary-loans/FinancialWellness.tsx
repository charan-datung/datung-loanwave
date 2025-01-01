import { GraduationCap, Heart, TrendingUp, HeadphonesIcon, Zap, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FinancialWellness = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Employee Financial Education",
      description: "Comprehensive financial literacy resources"
    },
    {
      icon: Heart,
      title: "Stress Reduction",
      description: "Safe borrowing options to reduce financial anxiety"
    },
    {
      icon: TrendingUp,
      title: "Productivity Improvement",
      description: "Track and measure workplace performance gains"
    },
    {
      icon: HeadphonesIcon,
      title: "HR Support Tools",
      description: "Resources to help HR teams manage the program"
    },
    {
      icon: Zap,
      title: "Quick Disbursement",
      description: "Fast and efficient loan processing"
    },
    {
      icon: ClipboardList,
      title: "Clear Repayment Structure",
      description: "Transparent and manageable repayment terms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Financial Wellness Program
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive approach to employee financial health
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <program.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};