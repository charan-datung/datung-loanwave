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
      <div className="service-card h-full flex flex-col justify-end group-hover:border-primary/20 group-hover:shadow-lg relative overflow-hidden rounded-2xl min-h-[320px] bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Image positioned at the top */}
        <div 
          className="absolute top-0 left-0 right-0 h-3/4 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        
        {/* Text content at bottom */}
        <div className="relative z-10 p-6 bg-gradient-to-t from-black/30 via-black/20 to-transparent rounded-b-2xl mt-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight">{title}</h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">{description}</p>
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