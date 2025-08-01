'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-[#535353]">{title}</h3>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}
