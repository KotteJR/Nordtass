'use client';

import Image from 'next/image';
import { ShoppingBag, Leaf, Heart, Microscope, Gift } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

// Icon mapping for features
const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  'Natural Ingredients': Leaf,
  'Gentle on the Stomach': Heart,
  'Scientifically Backed': Microscope,
  'Easy to Give': Gift,
};

export function HeroSection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="h-screen w-full bg-[#F8F8F8] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading Content...</div>
      </section>
    );
  }

  const { hero } = content;

  return (
    <section className="h-screen w-full bg-[#F4F5F7] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
              <Leaf size={16} className="text-gray-400" />
              {hero.tagline}
              <Leaf size={16} className="text-gray-400" />
            </div>
            
            <h1 
              className="text-4xl lg:text-5xl font-light text-gray-800 leading-tight"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
            
            <p className="text-gray-600 text-base max-w-lg leading-relaxed">
              {hero.description}
            </p>

            <button className="flex items-center gap-2 bg-[#D1A15A] text-white font-medium text-sm rounded-full px-6 py-2.5 w-fit mt-1 hover:bg-[#D1A25B]">
              <ShoppingBag size={18} />
              {hero.ctaButton}
            </button>

            <div className="flex flex-col gap-3 mt-5">
              {hero.features.slice(0, 4).map((feature) => {
                const Icon = iconMap[feature.title] || Leaf;
                return (
                  <div key={feature.title} className="flex items-center gap-3 text-sm text-gray-600">
                    <Icon size={16} className="text-[#D1A15A]" />
                    <span>
                      <span className="font-semibold text-gray-700">{feature.title}</span> – {feature.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/hero1.png"
              alt="NordTass Products Arrangement"
              width={650}
              height={650}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
