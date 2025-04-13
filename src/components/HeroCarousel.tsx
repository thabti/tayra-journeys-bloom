
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselSlide = {
  image: string;
  title: string;
  subtitle: string;
  arabicText: string;
};

const slides: CarouselSlide[] = [
  {
    image: '/lovable-uploads/4e64f02e-c472-4a10-a850-ff6422fb911f.png',
    title: 'Discover New Horizons',
    subtitle: 'Curated journeys designed for the bold woman',
    arabicText: 'رحلات مصممة للمرأة الجريئة'
  },
  {
    image: '/placeholder.svg',
    title: 'Experience Cappadocia',
    subtitle: 'Float above the fairy chimneys at dawn',
    arabicText: 'حلّقي فوق كبادوكيا عند الفجر'
  },
  {
    image: '/placeholder.svg',
    title: 'Journey Through Peru',
    subtitle: 'Ancient wonders and vibrant culture',
    arabicText: 'عجائب قديمة وثقافة نابضة بالحياة'
  },
  {
    image: '/placeholder.svg',
    title: 'Explore Patagonia',
    subtitle: 'Adventure awaits at the end of the world',
    arabicText: 'المغامرة تنتظرك في نهاية العالم'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-32 md:pb-48 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4">{slide.title}</h1>
            <p className="text-lg md:text-xl text-white text-shadow mb-2">{slide.subtitle}</p>
            <p className="text-lg md:text-xl arabic text-white text-shadow mb-8">{slide.arabicText}</p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
