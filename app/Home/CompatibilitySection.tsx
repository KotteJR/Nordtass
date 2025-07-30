'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Dog, Cat, Heart, Clock } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

// Icon mapping for pet categories
const petIconMap: { [key: string]: any } = {
  '/species/dog.svg': Dog,
  '/species/cat.svg': Cat,
  '/species/puppy.svg': Heart, // Heart for puppies (young/love)
  '/species/senior.svg': Clock, // Clock for seniors (time/age)
};

export function CompatibilitySection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { compatibility } = content;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <p className="text-[#2288ff] text-sm font-medium mb-2">{compatibility.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            {compatibility.title}
          </h2>

          {/* Pet Category Icons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {compatibility.integrations.map((integration: any) => {
              const IconComponent = petIconMap[integration.icon] || Dog;
              return (
                <div
                  key={integration.name}
                  className="flex items-center gap-2 bg-[#f6f6f6] rounded-full px-4 py-2"
                >
                  <IconComponent size={20} className="text-[#2288ff]" />
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
        <div
          className="rounded-[24px] bg-cover bg-center px-14 md:px-14 py-24 md:py-24"
          style={{ backgroundImage: `url('${compatibility.cta.backgroundImage}')` }}
        >
          <div className="grid md:grid-cols-2">
            <div className="max-w-md space-y-4">
              <h4 className="text-2xl md:text-3xl font-medium leading-snug text-white">
                {compatibility.cta.title}
              </h4>
              <p className="text-white/80 text-sm">
                {compatibility.cta.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-[#1875f0] bg-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                <ShoppingBag size={16} />
                {compatibility.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
