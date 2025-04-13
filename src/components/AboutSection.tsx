
import { ArrowRight, Globe, Heart, Map, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-tayra-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Founder - Diana Abd Elrahman" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-tayra-terra text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif italic">"Every journey begins with a single step, but it's the women who walk together that create lasting memories."</p>
                <p className="mt-2 text-right">— Diana</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-12 bg-tayra-terra"></div>
                <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold">About TAYRA <span className="arabic">طايرة</span></h2>
              
              <p className="text-lg leading-relaxed">
                TAYRA, meaning "flying" in Arabic, was born from a desire to create transformative travel experiences for women. Rooted in the Middle East but soaring beyond borders, we curate journeys that combine adventure, cultural immersion, and the unique bond of female fellowship.
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
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif">About the Founder</h3>
                <p>
                  Diana Abd Elrahman founded TAYRA with a vision to empower women through travel. Drawing from her extensive explorations across five continents and her deep connection to her Middle Eastern heritage, Diana leads each journey personally, creating safe spaces for women to explore, connect, and grow.
                </p>
                <Button className="bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full group mt-2">
                  Read Diana's Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
