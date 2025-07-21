import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
  id: number;
  name: string;
  journey: string;
  quote: string;
  image?: string;
};

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  destination: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    journey: "Morocco, September 2024",
    quote: "TAYRA didn't just show me Morocco—it opened my heart to a part of myself I never knew existed. Every detail was thoughtfully curated, every moment felt intentional. This wasn't tourism; this was transformation.",
    image: "/lovable-uploads/a0713aca-4c39-4eaa-8f5a-41fc445b13a7.png"
  },
  // Add more testimonials as provided by the user
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/lovable-uploads/d8fb1ffb-b985-488c-9000-a9d2e5ebebc1.png",
    alt: "Kazakhstan journey - woman on sand dunes",
    destination: "Kazakhstan"
  },
  {
    id: 2,
    src: "/lovable-uploads/6071f159-1209-4c1b-bbcf-b2e1d78ef768.png",
    alt: "Rainbow Mountain Peru with travelers",
    destination: "Peru"
  },
  {
    id: 3,
    src: "/lovable-uploads/a0713aca-4c39-4eaa-8f5a-41fc445b13a7.png",
    alt: "Machu Picchu group photo",
    destination: "Peru"
  },
  {
    id: 4,
    src: "/lovable-uploads/a65fa273-4fbd-4d95-acb4-2b123acd0746.png",
    alt: "Amazon boat adventure",
    destination: "Brazil"
  },
  {
    id: 5,
    src: "/lovable-uploads/c615188b-99f6-4352-b6db-f7780928bf19.png",
    alt: "Brazil group selfie",
    destination: "Brazil"
  },
  {
    id: 6,
    src: "/lovable-uploads/d94b0b73-b090-4f9d-9e11-345dc4cda6ce.png",
    alt: "Amazon sunset relaxation",
    destination: "Brazil"
  },
  {
    id: 7,
    src: "/lovable-uploads/59b04526-3044-4e61-be1e-047a8cc7cab0.png",
    alt: "Group high five celebration",
    destination: "Brazil"
  },
  {
    id: 8,
    src: "/lovable-uploads/3ed9ac8c-3502-486f-bee2-8853742bbf32.png",
    alt: "Brazil sand dunes solo traveler",
    destination: "Brazil"
  },
  {
    id: 9,
    src: "/lovable-uploads/176b36d9-6af3-4522-8745-45caea5d7673.png",
    alt: "Amazon boat sunset relaxation",
    destination: "Brazil"
  },
  {
    id: 10,
    src: "/lovable-uploads/8f161a6b-8c1d-4e07-bf99-3155d8821537.png",
    alt: "Cappadocia hot air balloons",
    destination: "Turkey"
  }
];

const TestimonialsGallery = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-tayra-cream/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="h-px w-8 bg-tayra-terra"></div>
            <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Stories</span>
            <div className="h-px w-8 bg-tayra-terra"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">What TAYRA Girls Say</h2>
          
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 font-eb-garamond italic leading-relaxed">
                    "{testimonials[currentTestimonial]?.quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <cite className="font-semibold text-tayra-terra not-italic">
                      {testimonials[currentTestimonial]?.name}
                    </cite>
                    <span className="text-sm text-gray-500 mt-1">
                      {testimonials[currentTestimonial]?.journey}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {testimonials.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-tayra-terra text-tayra-terra"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-tayra-terra text-tayra-terra"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-tayra-terra' : 'bg-tayra-terra/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Completed Journeys</h3>
          <p className="text-gray-600 font-eb-garamond">
            Moments captured from our past adventures around the world
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-scroll-horizontal">
            {/* First set of images */}
            {galleryImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-80 h-64 relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                  width={320}
                  height={256}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{image.destination}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scroll */}
            {galleryImages.map((image) => (
              <div key={`duplicate-${image.id}`} className="flex-shrink-0 w-80 h-64 relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                  width={320}
                  height={256}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{image.destination}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGallery;