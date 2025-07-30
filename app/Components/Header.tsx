'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update background transparency
      setIsScrolled(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isTransparent = !isScrolled && pathname === '/';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isTransparent ? 'bg-transparent' : 'bg-white border-b border-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className={`text-xl font-bold ${
              isTransparent ? 'text-white' : 'text-[#535353]'
            }`}>
              NordTass
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                isTransparent ? 'text-white' : 'text-[#535353]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                isTransparent ? 'text-white' : 'text-[#535353]'
              }`}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                isTransparent ? 'text-white' : 'text-[#535353]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Account, Language & Cart */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`p-2 hover:opacity-80 transition-opacity flex items-center justify-center gap-1 ${
                isTransparent ? 'text-white' : 'text-[#535353]'
              }`}
              title={`Switch to ${language === 'en' ? 'Swedish' : 'English'}`}
            >
              <Globe size={20} />
              <span className="text-xs font-medium uppercase leading-none">{language}</span>
            </button>

            {/* Account */}
            <button className={`p-2 hover:opacity-80 transition-opacity ${
              isTransparent ? 'text-white' : 'text-[#535353]'
            }`}>
              <User size={20} />
            </button>

            {/* Cart */}
            <button className={`relative p-2 hover:opacity-80 transition-opacity ${
              isTransparent ? 'text-white' : 'text-[#535353]'
            }`}>
              <ShoppingCart size={20} />
              {/* Cart count badge - hidden when 0 */}
              <span className="absolute -top-1 -right-1 bg-[#2288ff] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hidden">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden p-2 ${
                isTransparent ? 'text-white' : 'text-[#535353]'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            isTransparent ? 'border-white/20' : 'border-gray-200'
          }`}>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                  isTransparent ? 'text-white' : 'text-[#535353]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                  isTransparent ? 'text-white' : 'text-[#535353]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                  isTransparent ? 'text-white' : 'text-[#535353]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className={`text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2 ${
                  isTransparent ? 'text-white' : 'text-[#535353]'
                }`}
              >
                <Globe size={16} />
                Switch to {language === 'en' ? 'Svenska' : 'English'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 