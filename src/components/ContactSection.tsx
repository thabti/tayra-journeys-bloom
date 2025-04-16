
import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const destinations = [
  { value: 'cappadocia', label: 'Cappadocia' },
  { value: 'peru', label: 'Peru' },
  { value: 'patagonia', label: 'Chile/Patagonia' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
  { value: 'mongolia', label: 'Mongolia' },
  { value: 'iceland', label: 'Iceland' },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState<CheckedState>(false);
  const [loading, setLoading] = useState(false);

  const handleInterestsChange = (value: string) => {
    setInterests(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch soon to discuss your journey.",
      });
      setName('');
      setEmail('');
      setInterests([]);
      setMessage('');
      setNewsletter(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 mb-3">
                <div className="h-px w-8 bg-tayra-terra"></div>
                <span className="text-tayra-terra uppercase tracking-wider text-sm font-medium">Contact Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-gray-600">
                We're here to help you plan your next adventure with TAYRA.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <p className="text-gray-600">fly@tayra.me</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <p className="text-gray-600">+971 527459027</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-tayra-mint/20 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-tayra-terra" />
                </div>
                <div>
                  <p className="text-gray-600">Let's stay connected: @tayraworld</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-tayra-cream rounded-lg shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-3">Join Our Bold Women Community</h3>
              <p className="mb-4">
                Subscribe to receive travel inspiration, exclusive offers, and stories from our global journeys.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="border-tayra-terra/30 focus:border-tayra-terra focus:ring-tayra-terra"
                />
                <Button className="bg-tayra-terra hover:bg-tayra-terra/90 text-white">
                  Join
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-tayra-mint/10 p-8 rounded-lg">
              <h3 className="font-serif font-bold text-xl mb-6">Secure Your Spot</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-tayra-terra/30 focus:border-tayra-terra focus:ring-tayra-terra"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-tayra-terra/30 focus:border-tayra-terra focus:ring-tayra-terra"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="block font-medium">
                    I'm Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {destinations.map((destination) => (
                      <div key={destination.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={destination.value}
                          checked={interests.includes(destination.value)}
                          onCheckedChange={() => handleInterestsChange(destination.value)}
                          className="text-tayra-terra border-tayra-terra/50 data-[state=checked]:bg-tayra-terra data-[state=checked]:text-white"
                        />
                        <label htmlFor={destination.value} className="text-sm cursor-pointer">
                          {destination.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block font-medium">
                    Additional Requests
                  </label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any specific preferences or questions about the journey..."
                    className="border-tayra-terra/30 focus:border-tayra-terra focus:ring-tayra-terra min-h-[100px]"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={setNewsletter}
                    className="text-tayra-terra border-tayra-terra/50 data-[state=checked]:bg-tayra-terra data-[state=checked]:text-white"
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Keep me updated with new journeys and offers
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-tayra-terra hover:bg-tayra-terra/90 text-white w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Secure My Spot'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
