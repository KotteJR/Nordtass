'use client';
import { useState } from 'react';
import { Search, ChevronDown, ShoppingCart, Zap, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Smart Lock Pro',
    desc: 'Secure entry with remote unlock and real-time access logs.',
    image: '/products/smart-lock.png',
    price: '$299',
  },
  {
    id: 2,
    name: 'Energy Hub',
    desc: 'Track real-time energy use and automate savings.',
    image: '/products/energy-hub.png',
    price: '$199',
  },
  {
    id: 3,
    name: 'Voice Control Panel',
    desc: 'Full-home voice control with advanced privacy settings.',
    image: '/products/voice-panel.png',
    price: '$149',
  },
  {
    id: 4,
    name: 'Motion Sensor Kit',
    desc: 'Set up alerts and automation with zero wiring.',
    image: '/products/motion-sensor.png',
    price: '$89',
  },
  {
    id: 5,
    name: 'Smart Thermostat',
    desc: 'Automate climate control for maximum comfort.',
    image: '/products/thermostat.png',
    price: '$179',
  },
];

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleWaitlistSignup = (productName: string, action: string) => {
    setSelectedProduct(`${productName} - ${action}`);
    setShowWaitlist(true);
  };

  const submitWaitlist = async () => {
    setIsSubmitting(true);
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowWaitlist(false);
    setEmail('');
    alert('Thanks for joining the waitlist! We\'ll notify you when available.');
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            Explore Our Smart Home Devices
          </h2>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-[#e2e8f0] px-4 py-3 pl-10 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#2288ff]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
          </div>

          {/* Filter and Sort */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm text-[#535353] bg-[#f6f6f6] px-4 py-3 rounded-full hover:bg-[#e6f0ff] transition-colors">
              Filter
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 text-sm text-[#535353] bg-[#f6f6f6] px-4 py-3 rounded-full hover:bg-[#e6f0ff] transition-colors">
              Sort by
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="bg-[#f8f8f8] rounded-[28px] p-6 pb-8 flex flex-col justify-between">
              <div>
                <div className="w-full h-48 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#535353] text-lg font-medium">{product.name}</h3>
                  <span className="text-[#2288ff] text-lg font-medium">{product.price}</span>
                </div>
                <p className="text-sm text-[#aeaeae] mb-6">{product.desc}</p>
              </div>

              <div className="flex gap-3 mt-auto">
                <button 
                  onClick={() => handleWaitlistSignup(product.name, 'Add to Cart')}
                  className="flex-1 text-sm text-[#535353] bg-white px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-center"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleWaitlistSignup(product.name, 'Buy Now')}
                  className="flex-1 text-sm text-white bg-[#2288ff] px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-center"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Modal */}
        {showWaitlist && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-[24px] p-8 max-w-md w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#535353] text-xl font-medium">Join Waitlist</h3>
                <button 
                  onClick={() => setShowWaitlist(false)}
                  className="text-[#9ca3af] hover:text-[#535353]"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-[#535353] text-sm mb-4">
                <strong>{selectedProduct}</strong> will be available soon! Join our waitlist to be the first to know.
              </p>
              
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-[#e2e8f0] px-4 py-3 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#2288ff] mb-4"
              />
              
              <button
                onClick={submitWaitlist}
                disabled={!email || isSubmitting}
                className="w-full bg-[#2288ff] text-white text-sm font-medium px-4 py-3 rounded-full hover:bg-[#1a73e8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
