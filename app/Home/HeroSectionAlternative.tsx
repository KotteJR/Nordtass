'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, Leaf } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

export function HeroSectionAlternative() {
  const { content, loading } = useDefaultContent();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading || !content) {
    return (
      <section className="h-screen w-full relative flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">Loading...</div>
      </section>
    );
  }

  const { hero } = content;

  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center bg-[#F8F8F8] overflow-hidden p-4">

      {/* Central Text Content */}
      <div className="relative z-30 text-center mb-6">
        <div className="flex items-center justify-center gap-3 text-gray-500 text-sm font-light mb-3">
          <Leaf size={16} className="text-gray-400" />
          {hero.tagline}
          <Leaf size={16} className="text-gray-400" />
        </div>
        <h1 
          className="text-4xl md:text-5xl font-light text-gray-800 mb-3 text-center max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />
        <p className="text-gray-600 text-base max-w-xl mx-auto text-center leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Video Card Placeholder and Floating elements container */}
      <div className="relative w-[600px] h-[340px] flex items-center justify-center mb-8">
        
        {/* Video Card */}
        <div className="w-full h-full bg-white rounded-2xl shadow-xl z-10" />

        {/* Each floating item is now independent and positioned further out */}

        {/* Top Left - Black Bottle */}
        <div 
          className="absolute -top-16 -left-48 w-[140px] h-[140px] z-20 float-item"
          style={{ transform: isScrolled ? 'translateY(-20px)' : 'translateY(0)', animationDelay: '0s' }}
        >
          <Image src="/products/hipjoint.png" alt="Black Bottle" layout="fill" objectFit="contain" className="drop-shadow-lg" />
        </div>

        {/* Mid Left - Tube */}
        <div 
          className="absolute top-1/2 -left-60 w-[130px] h-[130px] transform -translate-y-1/2 -rotate-12 z-0 float-item"
          style={{ transform: isScrolled ? 'translateY(-25px)' : 'translateY(0)', animationDelay: '1s' }}
        >
          <Image src="/products/multipower.png" alt="Tube" layout="fill" objectFit="contain" className="drop-shadow-lg" />
        </div>
        
        {/* Bottom Left - White Bottle */}
        <div 
          className="absolute -bottom-24 -left-52 w-[130px] h-[130px] z-20 float-item"
          style={{ transform: isScrolled ? 'translateY(-30px)' : 'translateY(0)', animationDelay: '0.5s' }}
        >
          <Image src="/products/multivitamine.png" alt="White Bottle" layout="fill" objectFit="contain" className="drop-shadow-lg" />
        </div>
        
        {/* Top Right - Dog Model */}
        <div 
          className="absolute -top-24 -right-64 w-[300px] h-[300px] z-20 float-item"
          style={{ transform: isScrolled ? 'translateY(-20px)' : 'translateY(0)', animationDelay: '0.2s' }}
        >
          <Image src="/images/3d/a.png" alt="Dog Model" layout="fill" objectFit="contain" className="drop-shadow-xl" />
        </div>
        
        {/* Mid Right - Spray */}
        <div 
          className="absolute bottom-1/4 -right-60 w-[100px] h-[100px] z-20 float-item"
          style={{ transform: isScrolled ? 'translateY(-25px)' : 'translateY(0)', animationDelay: '1.2s' }}
        >
          <Image src="/products/petcalm.png" alt="Spray" layout="fill" objectFit="contain" className="drop-shadow-lg" />
        </div>
        
        {/* Bottom Right Syringe Placeholder */}
        <div 
          className="absolute -bottom-20 -right-56 w-[120px] h-[120px] z-0 transform rotate-12 float-item"
          style={{ transform: isScrolled ? 'translateY(-30px)' : 'translateY(0)', animationDelay: '0.7s' }}
        >
          <Image src="/products/multivitamine.png" alt="Syringe Placeholder" layout="fill" objectFit="contain" className="drop-shadow-lg opacity-60" />
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-30">
        <button className="flex items-center gap-2 bg-[#D1A15A] text-white font-medium text-sm rounded-full px-6 py-2.5 mx-auto hover:bg-[#b98e4e] transition shadow-lg">
          <ShoppingBag size={18} />
          {hero.ctaButton}
        </button>
      </div>

    </section>
  );
}
