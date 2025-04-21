
"use client"

import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-tayra-terra' : 'text-white text-shadow'}`}>TAYRA</span>
              <span className={`text-xl arabic ${isScrolled ? 'text-tayra-terra' : 'text-white text-shadow'}`}>طايرة</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className={`font-medium hover:text-tayra-terra transition-colors ${isScrolled ? 'text-gray-700' : 'text-white text-shadow'}`}>Destinations</a>
            <a href="#about" className={`font-medium hover:text-tayra-terra transition-colors ${isScrolled ? 'text-gray-700' : 'text-white text-shadow'}`}>About Us</a>
            <div className="relative group">
              <button className={`flex items-center font-medium group-hover:text-tayra-terra transition-colors ${isScrolled ? 'text-gray-700' : 'text-white text-shadow'}`}>
                Experiences <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                <a href="#packages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra">Travel Packages</a>
                <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra">Testimonials</a>
              </div>
            </div>
            <a href="#contact" className={`font-medium hover:text-tayra-terra transition-colors ${isScrolled ? 'text-gray-700' : 'text-white text-shadow'}`}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className={`rounded-full ${isScrolled ? 'bg-white text-tayra-terra border-tayra-terra hover:bg-tayra-cream' : 'bg-transparent text-white border-white hover:bg-white/20'}`}>
              Sign Up
            </Button>
            <Button className="bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-tayra-terra' : 'text-white'} focus:outline-none`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-1 animate-slide-in-right">
            <a href="#destinations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra rounded-md">Destinations</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra rounded-md">About Us</a>
            {/* <a href="#packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra rounded-md">Travel Packages</a> */}
            {/* <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra rounded-md">Testimonials</a> */}
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-tayra-mint hover:text-tayra-terra rounded-md">Contact</a>
            {/* <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="rounded-full bg-white text-tayra-terra border-tayra-terra hover:bg-tayra-cream">
                Sign Up
              </Button>
              <Button className="bg-tayra-terra hover:bg-tayra-terra/90 text-white rounded-full">
                Book Now
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
