import { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
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
};

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Cappadocia',
    arabicName: 'كابادوكيا',
    image: '/lovable-uploads/8a30790a-d4da-44a0-8b33-1a2e4b1f8bb1.png',
    date: 'May 8-11, 2028',
    duration: '4 days',
    groupSize: '6-8 women',
    price: 1800,
    featured: true,
    tags: ['Hot Air Balloons', 'Cave Hotels', 'Turkish Culture'],
    description: 'Float above fairy chimneys at dawn, stay in ancient cave dwellings, enjoy lots of tea, and experience a sunset horseback ride.'
  },
  {
    id: 2,
    name: 'Peru',
    arabicName: 'بيرو',
    image: '/lovable-uploads/460c8f1f-70ec-43c8-9356-e2033e008849.png',
    date: 'May 30-June 7, 2025',
    duration: '9 days',
    groupSize: '6-10 women',
    price: 3400,
    featured: true,
    tags: ['Machu Picchu', 'Andes', 'Indigenous Culture'],
    description: 'Hike the legendary Inca Trail, explore the Sacred Valley, and connect with indigenous communities in the Andes.'
  },
  {
    id: 3,
    name: 'Brazil',
    arabicName: 'البرازيل',
    image: '/lovable-uploads/ba92902b-8a03-494e-a7d8-e2d94527f324.png',
    date: 'June 20-July 1, 2025',
    duration: '12 days',
    groupSize: '6-10 women',
    price: 3900,
    featured: true,
    tags: ['Rio', 'Christ the Redeemer', 'Beaches'],
    description: 'Experience the vibrant culture of Rio, visit the iconic Christ the Redeemer, and relax on pristine beaches with breathtaking views.'
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
          
          <div className="flex justify-center mt-8 space-x-4">
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
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
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex flex-col space-y-2 mb-6">
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
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">
                    From <span className="text-tayra-terra">${destination.price}</span>
                  </div>
                  <Button className="bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="text-tayra-terra border-tayra-terra hover:bg-tayra-cream group mx-auto">
            View All Destinations <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
