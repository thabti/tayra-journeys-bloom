import { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Destination = {
  id: number;
  name: string;
  arabicName: string;
  image: string;
  date: string;
  duration: string;
  groupSize: string;
  price: number;
  featured: boolean;
  tags: string[];
  description: string;
  whereWeGo: string;
  whatsIncluded: string;
  theVibe: string;
  link: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kazakhstan',
    arabicName: 'كازاخستان',
    image: '/lovable-uploads/d8fb1ffb-b985-488c-9000-a9d2e5ebebc1.png',
    date: 'August 6–10, 2025',
    duration: '5 days',
    groupSize: '3–6 girls',
    price: 1950,
    featured: true,
    tags: ['Wild', 'Raw', 'Real'],
    description: 'Wild, raw, real. Off-grid reset with no distractions. A short escape that grounds you and shifts your energy.',
    whereWeGo: 'Almaty, Kolsai Lakes, Kaindy Lake, Charyn Canyon',
    whatsIncluded: 'International flights, boutique guesthouses and yurts, horseback riding, hikes, traditional sauna, private transport, all meals',
    theVibe: 'Wild, raw, real. Off-grid reset with no distractions. A short escape that grounds you and shifts your energy.',
    link: "https://form.jotform.com/Travel_Tayra/KAZAKHSTAN_AUG2025"
  },
  {
    id: 2,
    name: 'Albania · Montenegro · Bosnia',
    arabicName: 'ألبانيا، الجبل الأسود، البوسنة',
    image: '/lovable-uploads/6071f159-1209-4c1b-bbcf-b2e1d78ef768.png',
    date: 'August 23–30, 2025',
    duration: '8 days',
    groupSize: '6–8 girls',
    price: 3500,
    featured: true,
    tags: ['Waterfalls', 'Beach Towns', 'Road Trip'],
    description: 'Waterfalls, beach towns, winding roads and deep stories. A road trip across the Balkans to feel everything at once.',
    whereWeGo: 'Tirana, Blue Eye, Albanian Riviera, Kotor, Mostar, Sarajevo',
    whatsIncluded: 'International flights, boutique hotels, private driver, daily breakfast, welcome/farewell dinners, walking tours, cultural entries',
    theVibe: 'Waterfalls, beach towns, winding roads and deep stories. A road trip across the Balkans to feel everything at once.',
    link: "https://form.jotform.com/Travel_Tayra/BALKANS_AUG2025"
  },
  {
    id: 3,
    name: 'Morocco',
    arabicName: 'المغرب',
    image: '/lovable-uploads/a0713aca-4c39-4eaa-8f5a-41fc445b13a7.png',
    date: 'September 4–13, 2025',
    duration: '10 days',
    groupSize: '6–8 girls',
    price: 3500,
    featured: true,
    tags: ['Color', 'Contrast', 'Desert'],
    description: 'Color, contrast, chaos and calm. From rooftops to desert silence. A full-sensory journey through Morocco\'s soul.',
    whereWeGo: 'Marrakech, Tangier, Chefchaouen, Casablanca',
    whatsIncluded: 'International flights, domestic transport, boutique riads, medina walks, desert magic, site entries, farewell dinner',
    theVibe: 'Color, contrast, chaos and calm. From rooftops to desert silence. A full-sensory journey through Morocco\'s soul.',
    link: "https://form.jotform.com/Travel_Tayra/MOROCCO_SEP2025"
  },
  {
    id: 4,
    name: 'Iceland',
    arabicName: 'آيسلندا',
    image: '/lovable-uploads/a65fa273-4fbd-4d95-acb4-2b123acd0746.png',
    date: 'September 19–24, 2025',
    duration: '6 days',
    groupSize: '4–8 girls',
    price: 4000,
    featured: true,
    tags: ['Lava Fields', 'Waterfalls', 'Transformative'],
    description: 'Roadtrip that is one of a kind. Lava fields. Waterfalls. Steam rising from the earth. This is the type of trip that shifts everything in you.',
    whereWeGo: 'Reykjavík, South Coast, Vik, Secret Lagoon, black sand beaches, waterfalls',
    whatsIncluded: 'International flights, boutique stays, private transport, all mentioned activities',
    theVibe: 'Roadtrip that is one of a kind. Lava fields. Waterfalls. Steam rising from the earth. This is the type of trip that shifts everything in you.',
    link: "https://form.jotform.com/Travel_Tayra/ICELAND_SEP2025"
  },
  {
    id: 5,
    name: 'South Korea',
    arabicName: 'كوريا الجنوبية',
    image: '/lovable-uploads/c615188b-99f6-4352-b6db-f7780928bf19.png',
    date: 'November 15–22, 2025',
    duration: '8 days',
    groupSize: '6–8 girls',
    price: 3500,
    featured: true,
    tags: ['Neon Streets', 'Sacred Temples', 'Modern Calm'],
    description: 'From neon streets to sacred temples. A full-circle journey through Korea\'s modern calm and ancient beauty.',
    whereWeGo: 'Seoul, Gyeongju, Busan',
    whatsIncluded: 'International flights, boutique hotels, KTX trains, hanbok fittings, temples, palace entries, farewell dinner',
    theVibe: 'From neon streets to sacred temples. A full-circle journey through Korea\'s modern calm and ancient beauty.',
    link: "https://form.jotform.com/Travel_Tayra/KOREA_NOV2025"
  },
  {
    id: 6,
    name: 'China',
    arabicName: 'الصين',
    image: '/lovable-uploads/d94b0b73-b090-4f9d-9e11-345dc4cda6ce.png',
    date: 'November 22–30, 2025',
    duration: '7 days',
    groupSize: '6–8 girls',
    price: 3700,
    featured: true,
    tags: ['Great Wall', 'Skyline', 'Cinematic'],
    description: 'The Great Wall, the skyline, the sky mountains. China is cinematic, poetic, and unforgettable.',
    whereWeGo: 'Beijing, Shanghai, Zhangjiajie',
    whatsIncluded: 'International + internal flights, boutique hotels, Great Wall visit, tea tastings, cultural sites, glass bridge, farewell dinner',
    theVibe: 'The Great Wall, the skyline, the sky mountains. China is cinematic, poetic, and unforgettable.',
    link: "https://form.jotform.com/Travel_Tayra/CHINA_NOV2025"
  },
  {
    id: 7,
    name: 'South Korea + China Combo',
    arabicName: 'كوريا الجنوبية + الصين',
    image: '/lovable-uploads/59b04526-3044-4e61-be1e-047a8cc7cab0.png',
    date: 'November 15–30, 2025',
    duration: '15 days',
    groupSize: '5–8 girls',
    price: 5700,
    featured: true,
    tags: ['K-pop Streets', 'Great Wall', 'Two Countries'],
    description: 'K-pop streets. Sacred temples. The Great Wall. Floating peaks. Two countries, one bold journey.',
    whereWeGo: 'Seoul, Gyeongju, Busan, Beijing, Shanghai, Zhangjiajie',
    whatsIncluded: 'All flights, boutique hotels, daily breakfast, KTX trains, Great Wall, temples, hanbok fittings, farewell dinner',
    theVibe: 'K-pop streets. Sacred temples. The Great Wall. Floating peaks. Two countries, one bold journey.',
    link: "https://form.jotform.com/Travel_Tayra/KOREA_CHINA_NOV2025"
  },
  {
    id: 8,
    name: 'Norway',
    arabicName: 'النرويج',
    image: '/lovable-uploads/3ed9ac8c-3502-486f-bee2-8853742bbf32.png',
    date: 'December 11–16, 2025',
    duration: '6 days',
    groupSize: '5–8 girls',
    price: 3900,
    featured: true,
    tags: ['Aurora Skies', 'Arctic Circle', 'December Ritual'],
    description: 'Aurora skies. Silence. Firelight journaling. This is a December ritual to close your year differently.',
    whereWeGo: 'Tromsø and the Arctic Circle',
    whatsIncluded: 'International flights, Arctic lodges, dog sledding, Northern Lights tours, thermal spas, private transport, snow gear',
    theVibe: 'Aurora skies. Silence. Firelight journaling. This is a December ritual to close your year differently.',
    link: "https://form.jotform.com/Travel_Tayra/NORWAY_DEC2025"
  },
];

const DestinationsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredDestinations = filter === 'all' 
    ? destinations 
    : destinations.filter(d => d.featured);
    
  return (
    <section id="destinations" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="h-px w-8 bg-tayra-terra"></div>
            <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Discover</span>
            <div className="h-px w-8 bg-tayra-terra"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Upcoming Journeys</h2>
          <p className="text-lg text-gray-600 font-eb-garamond">
            Join our boutique-style travel adventures designed exclusively for women seeking authentic cultural experiences and meaningful connections with like-minded individuals.
          </p>
          
          {/* <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-tayra-terra hover:bg-tayra-terra/90' : 'text-tayra-terra hover:text-tayra-terra border-tayra-terra hover:bg-tayra-cream/50'}
            >
              All Destinations
            </Button>
            <Button 
              variant={filter === 'featured' ? 'default' : 'outline'} 
              onClick={() => setFilter('featured')}
              className={filter === 'featured' ? 'bg-tayra-terra hover:bg-tayra-terra/90' : 'text-tayra-terra hover:text-tayra-terra border-tayra-terra hover:bg-tayra-cream/50'}
            >
              Featured Trips
            </Button>
          </div> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={destination.image} 
                  alt={destination.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {destination.name} <span className="text-lg arabic">{destination.arabicName}</span>
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-tayra-mint/30 text-tayra-terra hover:bg-tayra-mint/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-tayra-terra" />
                    <span>{destination.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-tayra-terra" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-tayra-terra" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-tayra-terra mb-1">Where we're going:</h4>
                    <p className="text-sm text-gray-600">{destination.whereWeGo}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-tayra-terra mb-1">What's included:</h4>
                    <p className="text-sm text-gray-600">{destination.whatsIncluded}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-tayra-terra mb-1">The vibe:</h4>
                    <p className="text-sm text-gray-600 italic">{destination.theVibe}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">
                    Starts from <span className="text-tayra-terra">${destination.price} USD</span>
                  </div>
                  <Button asChild className="bg-tayra-terra hover:bg-tayra-terra/90 text-white">
                    <a href={destination.link}>Reserve Your Spot</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Button variant="outline" className="text-tayra-terra border-tayra-terra hover:bg-tayra-cream group mx-auto">
            View All Destinations <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default DestinationsSection;
