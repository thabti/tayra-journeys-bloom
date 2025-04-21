import Head from 'next/head';

import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import DestinationsSection from '../components/DestinationsSection';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import IncludedSection from '../components/IncludedSection';
import Navbar from '../components/Navbar';
// import PackagesSection from '../components/PackagesSection';
// import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>TAYRA - Not every journey is made for her.</title>
        <meta 
          name="description" 
          content="Discover the world with our exclusive travel experiences for women. Join our upcoming journeys and create unforgettable memories." 
        />
        <meta 
          name="keywords" 
          content="women travel, travel experiences, adventure, cultural tours, group travel" 
        />
        <meta 
          property="og:image" 
          content="/images/cappadocia.jpg" 
        />
      </Head>
      
      <Navbar />
      <HeroCarousel />
      <DestinationsSection />
      <IncludedSection />
      <AboutSection />
      {/* <PackagesSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}