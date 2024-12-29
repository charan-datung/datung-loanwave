import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card animate-fade-up">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};