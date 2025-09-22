
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
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold elegant-title mb-4">Powered By</h2>
          <p className="elegant-subtitle">Backed by world-class partners</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="elegant-card p-6 hover-lift transition-all duration-300"
               >
                 <img 
                   src={partner.logo} 
                   alt={partner.name}
                   className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                 />
               </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
