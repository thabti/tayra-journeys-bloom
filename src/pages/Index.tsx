
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <DestinationsSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
