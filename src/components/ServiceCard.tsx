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
      <div className="service-card h-full flex flex-col justify-end relative overflow-hidden rounded-2xl min-h-[320px] bg-gradient-to-b from-gray-100 to-gray-200 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-1 shadow-xl hover:shadow-2xl group perspective-1000">
        {/* Enhanced 3D Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Deep Shadow Effect */}
        <div className="absolute inset-0 rounded-2xl shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 30px rgba(0, 77, 77, 0.3)' }}></div>
        {/* Image positioned at the top */}
        <div 
          className="absolute top-0 left-0 right-0 h-3/4 bg-cover bg-center transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        
        {/* Enhanced highlight effect */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-2xl"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000 ease-out"></div>
        
        {/* Text content at bottom */}
        <div className="relative z-10 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-b-2xl mt-auto transform transition-all duration-500 group-hover:translate-y-[-2px]">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight transform transition-all duration-500 group-hover:scale-105 group-hover:text-shadow-lg">{title}</h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed transform transition-all duration-500 group-hover:text-white">{description}</p>
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