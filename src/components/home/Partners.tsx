export const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-2">Powered By</h2>
        <p className="text-gray-600 text-center mb-12">Backed by world-class partners</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/3e2787a3-b40b-4df2-8d60-8ebaeb631904.png" 
              alt="NVIDIA" 
              className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/211b85f9-fb99-43a4-a7cc-06a3e20a9a76.png" 
              alt="Google Cloud" 
              className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/3cd6b113-dd20-469d-ad46-195e9723307d.png" 
              alt="Antler" 
              className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};