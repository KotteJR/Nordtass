'use client';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useDefaultContent } from '../hooks/useContent';

export function IndustrySolutionsSection() {
  const { content, loading } = useDefaultContent();
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  if (loading || !content) {
    return (
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { industrySolutions } = content;
  const currentType = industrySolutions.segments[currentTypeIndex];

  const handlePrevious = () => {
    setCurrentTypeIndex((prev) => prev === 0 ? industrySolutions.segments.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentTypeIndex((prev) => prev === industrySolutions.segments.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-left">
          <p className="text-[#8B4513] text-sm mb-2">{industrySolutions.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            {industrySolutions.title}
          </h2>
        </div>

        {/* Main Content Area: House Image and Navigation */}
        <div className="w-full relative flex justify-center items-center py-4">
          {/* 3D House Image */}
          <Image
            src={currentType.image}
            alt={`3D model for ${currentType.type}`}
            width={300}
            height={300}
            className="w-full max-w-lg object-contain transition-opacity duration-300"
          />

          {/* Right-side Navigation */}
          <div className="hidden md:flex flex-col items-start gap-4 absolute right-0">
            <div className="w-48 text-right">
              <span className="text-[#535353] text-lg font-medium">
                {currentType.type}
              </span>
            </div>
            <div className="flex items-center overflow-hidden rounded-full ml-auto">
              <button
                onClick={handlePrevious}
                className="w-9 h-9 flex items-center justify-center bg-[#FFFBF5] text-[#8B4513] transition hover:bg-[#F7F2EC]"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 flex items-center justify-center bg-[#8B4513] text-white transition hover:bg-amber-800"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="text-sm text-[#8B4513] font-medium bg-[#FFFBF5] px-6 py-3 rounded-full hover:bg-[#F7F2EC] transition-all duration-150 flex items-center gap-2">
            <Building2 size={16} />
            {industrySolutions.ctaButton}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
