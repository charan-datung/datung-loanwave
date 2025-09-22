
export const Partners = () => {
  const partners = [
    {
      name: "NVIDIA",
      logo: "/lovable-uploads/3e2787a3-b40b-4df2-8d60-8ebaeb631904.png",
      url: "https://www.nvidia.com"
    },
    {
      name: "Google Cloud",
      logo: "/lovable-uploads/211b85f9-fb99-43a4-a7cc-06a3e20a9a76.png",
      url: "https://cloud.google.com"
    },
    {
      name: "Antler",
      logo: "/lovable-uploads/3cd6b113-dd20-469d-ad46-195e9723307d.png",
      url: "https://www.antler.co"
    },
    {
      name: "KAYA Founders",
      logo: "/lovable-uploads/808e8ab7-3b12-4a70-9589-e598617df994.png",
      url: "https://kayafounders.com"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 backdrop-blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-1 md:mb-2">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Powered By
          </span>
        </h2>
        <p className="text-white/70 text-center mb-8 md:mb-12 text-sm md:text-base">Backed by world-class partners</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 filter group-hover:drop-shadow-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
