
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { trackEvent } from '@/lib/utils';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      title: 'Essential Experience',
      price: 2400,
      description: 'An immersive cultural journey for the curious explorer.',
      features: [
        'International flight tickets',
        'Boutique hotel stays (shared room)',
        'Basic travel insurance',
        'Curated local experiences',
        'Group transportation',
        'Welcome and farewell dinners',
      ],
      popular: false,
    },
    {
      id: 2,
      title: 'Signature Journey',
      price: 3500,
      description: 'Our most popular option for the discerning traveler.',
      features: [
        'International flight tickets',
        'Boutique hotel stays (private room)',
        'Comprehensive travel insurance',
        'All curated local experiences',
        'All transportation included',
        'Most meals included',
        'Professional photography session',
        'Personalized travel journal',
      ],
      popular: true,
    },
    {
      id: 3,
      title: 'Exclusive Retreat',
      price: 4900,
      description: 'The ultimate luxury experience for the refined traveler.',
      features: [
        'International flight tickets (business class)',
        'Luxury boutique hotel stays (private room)',
        'Premium travel insurance with evacuation',
        'Private guides for local experiences',
        'Private transportation throughout',
        'All meals at selected restaurants',
        'Professional photography session',
        'Personalized travel journal',
        'Spa treatment',
        'Custom souvenir package',
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-tayra-sage/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="h-px w-8 bg-tayra-terra"></div>
            <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">What We Offer</span>
            <div className="h-px w-8 bg-tayra-terra"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Travel Packages</h2>
          <p className="text-lg text-gray-600">
            Choose the perfect journey that fits your travel style. All packages include our signature women-focused approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative overflow-hidden ${pkg.popular ? 'border-tayra-terra shadow-lg' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-tayra-terra text-white py-1 px-3 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className={`pb-4 ${pkg.popular ? 'bg-tayra-cream' : ''}`}>
                <CardTitle className="text-2xl font-serif">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-tayra-terra">${pkg.price}</span>
                  <span className="text-gray-500 ml-1">per person</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3 w-3 text-tayra-terra" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6">
                <Button
                  className={
                    pkg.popular
                      ? 'bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full w-full'
                      : 'bg-tayra-sage hover:bg-tayra-sage/90 text-white rounded-full w-full'
                  }
                  onClick={() =>
                    trackEvent('Click', 'Choose Package', pkg.title)
                  }

                >
                  Choose Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">What's Included in Every TAYRA Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">International Flight Tickets</h4>
                    <p className="text-sm text-gray-600">Round-trip flights from major airports</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Boutique Hotel Stays</h4>
                    <p className="text-sm text-gray-600">Carefully selected for comfort and character</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Travel Insurance</h4>
                    <p className="text-sm text-gray-600">Coverage throughout your journey</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Curated Local Experiences</h4>
                    <p className="text-sm text-gray-600">Authentic interactions with local culture</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-tayra-mint/30 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-tayra-terra" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Supportive Women's Community</h4>
                    <p className="text-sm text-gray-600">Connect with like-minded travelers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button onClick={() =>
                  trackEvent('Click', 'Request Custom Package', 'PackagesSection')
                }className="bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full group">
              Request Custom Package <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
