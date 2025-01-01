import { CheckCircle2, Store, Users } from "lucide-react";

export const Requirements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Simple Requirements</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-primary">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Valid ID Only</h3>
                <p className="text-gray-600">Any government-issued ID is accepted</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-secondary">
              <Store className="w-6 h-6 text-secondary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Proof of Business</h3>
                <p className="text-gray-600">Simple pictures of your business location</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-accent">
              <Users className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Group Formation</h3>
                <p className="text-gray-600">Form a group of 3-5 business owners from your area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};