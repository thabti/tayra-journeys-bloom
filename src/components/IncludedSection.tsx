
import { Check } from 'lucide-react';

const IncludedSection = () => {
  const includedItems = [
    'Roundtrip flight tickets',
    'Boutique Hotel Stays',
    'Travel insurance upon request',
    'Supportive women\'s community',
    'Curated local experiences',
    'Women leading the trip'
  ];

  return (
    <section id="included" className="py-16 md:py-24 bg-tayra-sage/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="h-px w-8 bg-tayra-terra"></div>
            <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">What We Offer</span>
            <div className="h-px w-8 bg-tayra-terra"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What's Included in Every TAYRA Journey</h2>
          <p className="text-lg text-gray-600">
            Every journey is thoughtfully designed to provide an exceptional experience for women travelers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
