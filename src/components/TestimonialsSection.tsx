
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  trip: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Layla Ahmed',
    location: 'Cairo, Egypt',
    image: '/placeholder.svg',
    trip: 'Cappadocia Journey',
    quote: "TAYRA created a space where I could be both adventurous and authentic. Diana's deep knowledge of the culture and her warm leadership made this trip unforgettable. I've made friends for life."
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    location: 'London, UK',
    image: '/placeholder.svg',
    trip: 'Peru Expedition',
    quote: 'As a solo female traveler, I was looking for a meaningful way to explore Peru. TAYRA exceeded my expectations with their attention to detail and focus on authentic cultural experiences.'
  },
  {
    id: 3,
    name: 'Nour Hammadi',
    location: 'Dubai, UAE',
    image: '/placeholder.svg',
    trip: 'Patagonia Adventure',
    quote: 'The perfect balance of adventure and comfort. I pushed my boundaries in the most stunning landscapes while enjoying meaningful conversations with incredible women from around the world.'
  },
  {
    id: 4,
    name: 'Maya Johnson',
    location: 'Toronto, Canada',
    image: '/placeholder.svg',
    trip: 'Brazil Exploration',
    quote: 'TAYRA offered me a chance to experience Brazil through a unique lens. The trip was thoughtfully designed to showcase both iconic highlights and hidden gems that I would never have discovered alone.'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-tayra-mint/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="h-px w-8 bg-tayra-terra"></div>
            <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Voices</span>
           <div className="h-px w-8 bg-tayra-terra"></div>
          </div> 
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Stories from Our Travelers</h2>
          <p className="text-lg text-gray-600">
            Hear what women from around the world have to say about their TAYRA experiences.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={testimonialRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-64 md:h-auto relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                          <Quote className="h-10 w-10 text-tayra-terra/20 mb-4" />
                          <p className="text-lg md:text-xl italic mb-6">
                            "{testimonial.quote}"
                          </p>
                          <div className="mt-auto">
                            <h4 className="font-serif font-bold text-lg">{testimonial.name}</h4>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">{testimonial.location}</span>
                             <span className="text-tayra-terra font-medium text-sm">{testimonial.trip}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
         <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg hover:bg-tayra-mint/30 text-tayra-terra p-3 rounded-full z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg hover:bg-tayra-mint/30 text-tayra-terra p-3 rounded-full z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-tayra-terra' : 'bg-tayra-terra/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
