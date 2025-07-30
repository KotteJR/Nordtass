'use client';
import Image from 'next/image';
import { ShoppingBag, Leaf, Heart, Microscope, Gift } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

// Icon mapping for hero features
const iconMap: { [key: string]: any } = {
  '/natural.svg': Leaf,
  '/digestion.svg': Heart,
  '/science.svg': Microscope,
  '/easyuse.svg': Gift,
};

export function HeroSection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="h-screen w-full text-white relative flex items-center bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { hero } = content;

  return (
    <section 
      className="h-screen w-full text-white relative flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/landingpage/hero.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col gap-6 ">
            <div className="text-[#dceefb] text-base font-light">{hero.tagline}</div>
            <h1 
              className="text-4xl md:text-5xl font-medium leading-tight"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
            <p className="text-[#dceefb] text-lg max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <button className="flex items-center gap-2 bg-white text-[#2288ff] font-medium text-base rounded-full px-6 py-3 w-fit mt-2 hover:opacity-90 transition">
              <ShoppingBag size={20} />
              {hero.ctaButton}
            </button>

            <div className="flex flex-col gap-4 mt-10">
              {hero.features.map((feature: any, index: number) => {
                const IconComponent = iconMap[feature.icon] || Leaf; // Default fallback icon
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <IconComponent size={22} className="text-white" />
                    </div>
                    <span>
                      <span className="text-white font-medium">{feature.title}</span> – {feature.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
