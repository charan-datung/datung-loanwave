export const MissionManifesto = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              Our <span className="font-serif italic text-primary">Manifesto</span>
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg md:prose-xl max-w-none text-center">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-xl md:text-2xl font-light">
                For the businesses that have been overlooked, underestimated, and left behind.
              </p>
              
              <p className="text-xl md:text-2xl font-light">
                For the entrepreneurs who've been told they can't, or that the system isn't for them.
              </p>
              
              <p className="text-xl md:text-2xl font-light">
                For the dreamers who have dared to imagine something greater.
              </p>
              
              {/* Highlighted statement */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 my-12">
                <p className="text-xl md:text-2xl font-medium text-gray-900">
                  We're the financial force that's rewriting the rules, shifting the power back to where it belongs — into the hands of those who need it most.
                </p>
              </div>
              
              <p className="text-xl md:text-2xl font-light">
                We're not just asking for change; we're demanding it.
              </p>
              
              <p className="text-xl md:text-2xl font-light">
                We're creating a new financial landscape where opportunity isn't a privilege, but a right.
              </p>
              
              <p className="text-xl md:text-2xl font-light">
                We're the movement that opens doors for every small business, turning barriers into bridges and dreams into realities.
              </p>
              
              {/* Call to action */}
              <div className="pt-8">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Datung</div>
                <div className="text-lg md:text-xl text-gray-600 font-light">Join the movement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};