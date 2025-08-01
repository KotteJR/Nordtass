'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update background state
      setIsScrolled(currentScrollY > 50);
      
      // Update the last scroll position
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !isScrolled && pathname === '/';
  const toggleLanguage = () => setLanguage(language === 'en' ? 'sv' : 'en');

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`
    }>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-10">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/logo.png"
                alt="NordTass Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Home</Link>
              <Link href="/Shop" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Shop</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-gray-700 hover:text-black transition-colors">
              <Globe size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">{language}</span>
            </button>
            <button className="text-gray-700 hover:text-black transition-colors"><User size={20} /></button>
            <button className="relative text-gray-700 hover:text-black transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
            </button>
            <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 bg-white/90 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col gap-4 px-4">
              <Link href="/" className="text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/shop" className="text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link href="/contact" className="text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
