
import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';
import { trackEvent } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tayra-terra text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-serif font-bold">TAYRA</span>
              <span className="text-xl arabic ml-2">طايرة</span>
            </div>
            <p className="mb-4 text-white/80">
              Rooted in the Middle East, soaring beyond borders. Curated journeys, designed for the bold woman.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tayraworld" onClick={() => trackEvent('social media', 'Click', 'Instagram')} className="text-white hover:text-tayra-mint transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-white hover:text-tayra-mint transition-colors">
                <Facebook className="h-5 w-5" />
              </a> */}
              {/* <a href="https://twitter.com/tayra" className="text-white hover:text-tayra-mint transition-colors">
                <Twitter className="h-5 w-5" /> 
              </a>  */}
              <a href="mailto:fly@tayra.me" onClick={() => trackEvent('Click', 'Mail')} className="text-white hover:text-tayra-mint transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => trackEvent('destinations', 'Click', 'Cappadocia')} className="text-white/80 hover:text-white transition-colors">Cappadocia</a></li>
              <li><a href="#" onClick={() => trackEvent('destinations', 'Click', 'Peru')} className="text-white/80 hover:text-white transition-colors">Peru</a></li>
              <li><a href="#" onClick={() => trackEvent('destinations', 'Click', 'Brazil')} className="text-white/80 hover:text-white transition-colors">Brazil</a></li>
              {/* <li><a href="#" className="text-white/80 hover:text-white transition-colors">Patagonia</a></li> */}
              <li><a href="#" onClick={() => trackEvent('destinations', 'Click', 'View All')} className="text-white/80 hover:text-white transition-colors">View All</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={() => trackEvent('quick links', 'Click', 'About Us')} className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              {/* <li><a href="#packages" className="text-white/80 hover:text-white transition-colors">Travel Packages</a></li> */}
              {/* <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li> */}
              <li><a href="#included" onClick={() => trackEvent('quick links', 'Click', 'FAQs')} className="text-white/80 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" onClick={() => trackEvent('quick links', 'Click', 'Contact Us')} className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-serif font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Booking Information</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70">
          <p className="flex items-center justify-center">
            &copy; {currentYear} TAYRA Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
