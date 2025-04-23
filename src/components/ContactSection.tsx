
import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/utils';

const ContactSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Subscribed successfully!",
        description: "You'll now receive our latest updates and offers.",
      });
      setEmail('');
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-3">
              <div className="h-px w-8 bg-tayra-terra"></div>
              <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium font-eb-garamond">Contact</span>
              <div className="h-px w-8 bg-tayra-terra"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-eb-garamond">Let's Connect</h2>
            <p className="text-lg text-gray-600 font-eb-garamond">
              Reach out to us about your next adventure with TAYRA.
            </p>
          </div>
          
          <div className="bg-tayra-cream rounded-lg shadow-md p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <h3 className="font-medium font-eb-garamond text-lg mb-1">Our Base</h3>
                  <p className="text-gray-600 font-eb-garamond">Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <h3 className="font-medium font-eb-garamond text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 font-eb-garamond">fly@tayra.me</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <h3 className="font-medium font-eb-garamond text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 font-eb-garamond">+971 527459027</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full flex-shrink-0">
                  <Instagram className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <h3 className="font-medium font-eb-garamond text-lg mb-1">Follow Our Journey</h3>
                  <a
                    href="https://instagram.com/tayraworld"
                    onClick={() => trackEvent('Click', 'Social','Instagram')}
                    className="text-tayra-terra hover:underline font-eb-garamond"
                  >
                    @tayraworld
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-tayra-terra/20 pt-8">
              <h3 className="font-bold text-xl mb-4 font-eb-garamond text-center">Join Our Bold Women Community</h3>
              <p className="mb-6 text-center font-eb-garamond">
                Subscribe to receive travel inspiration, exclusive offers, and stories from our global journeys.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="border-tayra-terra/30 focus:border-tayra-terra focus:ring-tayra-terra font-eb-garamond"
                    required
                  />
                  <Button 
                    type="submit"
                    onClick={() => trackEvent('Click', 'Contact','Subscribe')}
                    className="bg-tayra-terra hover:bg-tayra-terra/90 text-white font-eb-garamond"
                    disabled={loading}
                  >
                    {loading ? 'Joining...' : 'Join'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
