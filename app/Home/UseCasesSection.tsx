'use client';
import Image from 'next/image';
import { useDefaultContent } from '../hooks/useContent';

export function UseCasesSection() {
  const { content, loading } = useDefaultContent();

  if (loading || !content) {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { useCases } = content;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#2288ff] text-sm mb-2">{useCases.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            {useCases.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.cases.map((item: any) => (
            <div
              key={item.title}
              className="relative rounded-[28px] overflow-hidden h-[34rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
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
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-white/85">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
