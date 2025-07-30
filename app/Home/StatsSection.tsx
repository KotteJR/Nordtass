'use client';

import { DollarSign, Clock, Leaf, Headphones } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

// Icon mapping for stats with more relevant icons
const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  '/margin.svg': DollarSign,      // For pricing/margin
  '/fast.svg': Clock,             // For speed/timing
  '/natural-compat.svg': Leaf,    // For natural/organic
  '/support.svg': Headphones,     // For customer support
};

export function StatsSection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { stats } = content;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <p className="text-[#2288ff] text-sm font-medium mb-2">{stats.sectionTag}</p>
        <h2 className="text-[#535353] text-3xl md:text-4xl font-medium mb-16">
          {stats.title}
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.metrics.map((metric: { icon: string; title: string }) => {
            const IconComponent = iconMap[metric.icon] || DollarSign;
            return (
              <div key={metric.icon} className="flex flex-col items-center justify-start text-center">
                <div className="w-16 h-16 bg-[#f0f7ff] rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={32} className="text-[#2288ff]" />
                </div>
                <p className="text-[#535353] text-base font-normal leading-snug whitespace-pre-line">
                  {metric.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
