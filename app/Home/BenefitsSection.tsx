'use client';

import { useDefaultContent } from '../hooks/useContent';

export function BenefitsSection() {
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

  const { benefits } = content;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <div className="mb-12">
          <p className="text-[#8B4513] text-sm mb-2">{benefits.sectionTag}</p>
          <h2 className="text-[#535353] text-4xl font-medium">
            {benefits.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 grid-rows-3 w-full h-[168rem] lg:h-[84rem]">
          {benefits.benefits.map((item: { id: string; title: string; description: string; image: string }, i: number) => (
            <BenefitCard
              key={item.id}
              {...item}
              full={i === 2}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  id,
  title,
  description,
  image,
  full = false,
  index,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  full?: boolean;
  index: number;
}) {
  const borderRadius = () => {
    if (index === 0) return 'rounded-tl-[38px]';
    if (index === 1) return 'rounded-tr-[38px]';
    if (index === 3) return 'rounded-bl-[38px]';
    if (index === 4) return 'rounded-br-[38px]';
    return '';
  };

  return (
    <div
      className={`relative overflow-hidden h-full w-full bg-cover bg-center ${borderRadius()} ${
        full ? 'col-span-2 row-span-1' : ''
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Gradient blur effect - more blur on edges, less in center */}
      <div className="absolute inset-0 bg-black/10" />
      <div 
        className="absolute inset-0 backdrop-blur-[6px]"
        style={{
          mask: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, black 100%)',
          WebkitMask: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, black 100%)'
        }}
      />
      <div className="absolute top-6 left-6 bg-[#8B4513] text-white text-sm px-2 py-1 rounded font-medium">
        {id}
      </div>
      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm text-white/85 max-w-xl">{description}</p>
      </div>
    </div>
  );
}
