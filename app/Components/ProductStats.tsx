'use client';
import { ShieldCheck, Zap, Leaf, Award } from 'lucide-react';

// Placeholder stats for individual products
const productStats = [
  {
    icon: ShieldCheck,
    title: 'Vet-Approved Formula',
  },
  {
    icon: Zap,
    title: 'Fast-Acting Results',
  },
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
  },
  {
    icon: Award,
    title: 'Quality-Tested & Certified',
  },
];

export function ProductStats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {productStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.title} className="flex flex-col items-center justify-start text-center">
                <div className="w-16 h-16 bg-[#FFFBF5] rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={32} className="text-[#8B4513]" />
                </div>
                <p className="text-[#535353] text-base font-normal leading-snug whitespace-pre-line">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
