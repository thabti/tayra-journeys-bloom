
import { ArrowRight, Globe, Heart, Map, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-tayra-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-12 bg-tayra-terra"></div>
                <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold">About TAYRA <span className="arabic">طايرة</span></h2>
              
              <p className="text-lg leading-relaxed">
                Rooted in the Middle East, soaring beyond borders. Curated journeys, designed for the bold woman.
              </p>
              
              <p className="text-lg leading-relaxed">
                TAYRA (طايرة) — Arabic for "she who flies." And she never lands the same.
              </p>
              
              <p className="text-lg leading-relaxed">
                We lead women-only journeys that are curated, all-inclusive, and anything but ordinary. 
                Think high-altitude hikes, local moments, and places that leave a mark. No fluff. 
                Just real travel, made for women who want more than just a holiday.
              </p>
              
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Map className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-serif font-medium">Middle Eastern roots</h3>
                  <p className="text-sm arabic">جذورٌ شرق أوسطية</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Globe className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-serif font-medium">Global heart</h3>
                  <p className="text-sm arabic">وقلبٌ عالمي النبض</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Heart className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-serif font-medium">Culture & Womanhood</h3>
                  <p className="text-sm arabic">نحتفي بالثقافة ونُجسّد الأنوثة</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Plane className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-serif font-medium">Love for Travel</h3>
                  <p className="text-sm arabic">ونسير بخُطى حب نحو السفر</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Founder - Diana Abd Elrahman" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <div className="space-y-4 mt-6">
                <h3 className="text-2xl font-serif font-bold">Diana Abd Elrahman</h3>
                <h4 className="text-lg font-medium text-tayra-terra">Founder of TAYRA</h4>
                <p className="text-lg leading-relaxed">
                  Diana Abd Elrahman is the founder of TAYRA — She's explored over 43 countries, drawn to raw landscapes, 
                  deep connection, and the kind of moments that shift something inside you.
                </p>
                <p className="text-lg leading-relaxed">
                  Middle Eastern by roots, global by nature — Diana created TAYRA to be more than just a travel brand. 
                  It's a space for women to explore with depth, freedom, and womanhood.
                </p>
                <p className="text-lg leading-relaxed italic font-medium">
                  TAYRA is her love letter to women who dare to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
