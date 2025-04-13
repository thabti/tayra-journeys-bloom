
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
    image: '/placeholder.svg',
    date: 'May 15-22, 2025',
    duration: '8 days',
    groupSize: '8-12 women',
    price: 2450,
    featured: true,
    tags: ['Hot Air Balloons', 'Cave Hotels', 'Turkish Culture'],
    description: 'Float above fairy chimneys at dawn, stay in ancient cave dwellings, and experience authentic Turkish hospitality.'
  },
  {
    id: 2,
    name: 'Peru',
    arabicName: 'بيرو',
    image: '/placeholder.svg',
    date: 'June 10-24, 2025',
    duration: '14 days',
    groupSize: '8-10 women',
    price: 3850,
    featured: true,
    tags: ['Machu Picchu', 'Andes', 'Indigenous Culture'],
    description: 'Hike the legendary Inca Trail, explore the Sacred Valley, and connect with indigenous communities in the Andes.'
  },
  {
    id: 3,
    name: 'Brazil',
    arabicName: 'البرازيل',
    image: '/placeholder.svg',
    date: 'September 5-15, 2025',
    duration: '11 days',
    groupSize: '8-12 women',
    price: 3200,
    featured: false,
    tags: ['Rio', 'Rainforest', 'Beaches'],
    description: 'Experience the vibrant culture of Rio, trek through the lush Amazon rainforest, and relax on pristine beaches.'
  },
  {
    id: 4,
    name: 'Patagonia',
    arabicName: 'باتاغونيا',
    image: '/placeholder.svg',
    date: 'November 8-20, 2025',
    duration: '13 days',
    groupSize: '6-10 women',
    price: 4500,
    featured: true,
    tags: ['Hiking', 'Glaciers', 'Wildlife'],
    description: 'Trek through stunning landscapes, witness massive glaciers, and spot unique wildlife in this remote wilderness.'
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
          <p className="text-lg text-gray-600">
            Join our small group adventures designed exclusively for women seeking authentic cultural experiences and meaningful connections.
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
