
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
                <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium font-eb-garamond">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-eb-garamond">About TAYRA</h2>
              
              <p className="text-lg leading-relaxed font-eb-garamond">
                Rooted in the Middle East, soaring beyond borders. Curated journeys, designed for the bold woman.
              </p>
              
              <p className="text-lg leading-relaxed font-eb-garamond">
                TAYRA "طايرة" — She who flies. And she never lands the same.
              </p>
              
              <p className="text-lg leading-relaxed font-eb-garamond">
                We lead women-only journeys that are curated, all-inclusive, and anything but ordinary. 
                Think high-altitude hikes, local moments, and places that leave a mark. No fluff. 
                Just real travel, made for women who want
              </p>
              
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Map className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-eb-garamond font-medium">Middle Eastern Roots</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Globe className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-eb-garamond font-medium">Global Heart</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Heart className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-eb-garamond font-medium">Culture & Womanhood</h3>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-tayra-mint/20 p-3 rounded-full mb-3">
                    <Plane className="h-6 w-6 text-tayra-terra" />
                  </div>
                  <h3 className="font-eb-garamond font-medium">Love for Travel</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/22c5dcca-19de-463f-923a-8f0c29150e9f.png" 
                alt="Founder - Diana Abd Elrahman" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <div className="space-y-4 mt-6">
                <h3 className="text-2xl font-eb-garamond font-bold">Diana Abd Elrahman</h3>
                <h4 className="text-lg font-medium text-tayra-terra font-eb-garamond">Founder of TAYRA</h4>
                <p className="text-lg leading-relaxed font-eb-garamond">
                  I'm Diana Abd Elrahman — the woman behind TAYRA. A Palestinian with a global heart, 
                  and a passport that's seen over 44 countries. But more than just collecting stamps, 
                  I've collected stories and lessons that have shifted something inside of me.
                </p>
                <p className="text-lg leading-relaxed font-eb-garamond">
                  This isn't just another travel brand. It's a love letter — written for women like me.
                </p>
                <p className="text-lg leading-relaxed font-eb-garamond">
                  For every woman who's ever said: "I want to go, but I don't know how." 
                  For the bold ones. The curious ones. The ones who are done waiting for someone to come around.
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// font-eb-garamond

export default AboutSection;
