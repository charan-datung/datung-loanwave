import { Button } from "@/components/ui/button";

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-primary/10">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
                alt="Bank building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Rural Bank Integration</h3>
              <p className="text-gray-600 mb-4">
                How a rural bank improved their loan approval rate by 40% using our AI credit scoring system.
              </p>
              <Button variant="outline">Read Case Study</Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-primary/10">
              <img
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0"
                alt="Fintech office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Fintech Transformation</h3>
              <p className="text-gray-600 mb-4">
                A leading fintech company reduced processing time by 60% with our automated system.
              </p>
              <Button variant="outline">Read Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};