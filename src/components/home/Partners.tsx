
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-2 text-primary">Powered By</h2>
        <p className="text-gray-600 text-center mb-12">Backed by world-class partners</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
