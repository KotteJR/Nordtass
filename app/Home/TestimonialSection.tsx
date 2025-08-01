'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

export function TestimonialsSection() {
  const { content, loading } = useDefaultContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading || !content) {
    return (
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { testimonials } = content;
  
  // Add safety checks to prevent runtime errors
  if (!testimonials || !testimonials.testimonial || testimonials.testimonial.length === 0) {
    return (
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div>No testimonials available</div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials.testimonial[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.testimonial.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === testimonials.testimonial.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-[#8B4513] text-sm mb-2">{testimonials.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            {testimonials.title}
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div className="text-center mb-12">
            <blockquote className="text-[#535353] text-xl md:text-2xl leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
            
            {/* Author with Image */}
            <div className="flex items-center justify-center gap-4">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <span className="text-[#535353] font-medium">
                {currentTestimonial.author}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Arrow */}
            <button
              onClick={handlePrevious}
              className="p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-400 hover:text-[#8B4513] transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-3">
              {testimonials.testimonial.map((_, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentIndex 
                      ? 'bg-[#8B4513] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-400 hover:text-[#8B4513] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
