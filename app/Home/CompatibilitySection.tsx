'use client';

import Link from 'next/link';
import { ShoppingBag, Dog, Cat, Heart, Clock } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';
import Image from 'next/image';

// Icon mapping for pet categories
const petIconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  '/species/dog.svg': Dog,
  '/species/cat.svg': Cat,
  '/species/puppy.svg': Heart, // Heart for puppies (young/love)
  '/species/senior.svg': Clock, // Clock for seniors (time/age)
};

export function CompatibilitySection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { compatibility } = content;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div>
          <p className="text-[#8B4513] text-sm font-medium mb-2">{compatibility.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            {compatibility.title}
          </h2>

          {/* Pet Category Icons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {compatibility.integrations.map((integration: { icon: string; name: string }) => {
              const IconComponent = petIconMap[integration.icon] || Dog;
              return (
                <div
                  key={integration.name}
                  className="flex items-center gap-2 bg-[#f6f6f6] rounded-full px-4 py-2"
                >
                  <IconComponent size={20} className="text-[#8B4513]" />
                  <span className="text-sm text-[#555]">{integration.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features List */}
        <div className="text-right">
          <h3 className="text-[#535353] text-xl font-medium mb-4">{compatibility.features.title}</h3>
          <div className="flex flex-wrap justify-end gap-4">
            {compatibility.features.list.map((label: string) => (
              <div
                key={label}
                className="bg-[#f6f6f6] text-[#555] text-sm font-medium px-4 py-2 rounded-full"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-[24px] bg-[#F4F5F7] px-14 md:px-14 py-12 md:py-12">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left side: Text Content */}
            <div className="max-w-md space-y-4 md:col-span-2">
              <h4 className="text-2xl md:text-3xl font-medium leading-snug text-[#535353]">
                {compatibility.cta.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {compatibility.cta.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-[#8B4513] bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                <ShoppingBag size={16} />
                {compatibility.cta.button}
              </Link>
            </div>
            
            {/* Right side: Image */}
            <div className="relative h-74 w-full md:col-span-3">
              <Image
                src="/images/hero1.png"
                alt="NordTass Products"
                layout="fill"
                objectFit="contain"
                className="object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
