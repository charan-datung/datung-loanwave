import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  backgroundImage?: string;
}

export const ServiceCard = ({ title, description, icon: Icon, backgroundImage }: ServiceCardProps) => {
  if (backgroundImage) {
    return (
      <div 
        className="service-card h-full flex flex-col items-center justify-center text-center group-hover:border-primary/20 group-hover:shadow-lg relative overflow-hidden bg-cover bg-center min-h-[200px] rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-sm md:text-base text-white/90">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-card h-full flex flex-col items-center text-center group-hover:border-primary/20 group-hover:shadow-lg">
      {Icon && <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4 transition-transform group-hover:scale-110" />}
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
};