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
      <div className="service-card h-full flex flex-col justify-end relative overflow-hidden rounded-xl md:rounded-2xl min-h-[280px] md:min-h-[320px] bg-gradient-to-b from-gray-50 to-gray-100 transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-xl group">
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Subtle depth effect */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" style={{ boxShadow: 'inset 0 1px 20px rgba(0, 77, 77, 0.1)' }}></div>

        {/* Image positioned at the top */}
        <div 
          className="absolute top-0 left-0 right-0 h-3/4 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        
        {/* Elegant highlight effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-t-xl md:rounded-t-2xl"></div>
        
        {/* Subtle light sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>

        {/* Text content at bottom */}
        <div className="relative z-10 p-4 md:p-6 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent rounded-b-xl md:rounded-b-2xl mt-auto transform transition-all duration-700 ease-out group-hover:translate-y-[-1px]">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white leading-tight transform transition-all duration-700 ease-out group-hover:scale-[1.02]">{title}</h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed transform transition-all duration-700 ease-out group-hover:text-white/95">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-card h-full flex flex-col items-center text-center group-hover:border-primary/20 group-hover:shadow-lg p-4 md:p-6">
      {Icon && <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary mb-3 md:mb-4 transition-transform group-hover:scale-110" />}
      <h3 className="text-base md:text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
};