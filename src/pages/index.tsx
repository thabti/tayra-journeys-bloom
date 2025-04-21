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