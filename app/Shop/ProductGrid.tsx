'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';

import { useDefaultContent } from '../hooks/useContent';
import { Bone, Pill, Shield, Heart, Zap } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  'Bone': Bone,
  'Pill': Pill,
  'Shield': Shield,
  'Heart': Heart,
  'Zap': Zap,
};

import Link from 'next/link';

export function ProductsPage() {
  const { content, loading } = useDefaultContent();
  const [query, setQuery] = useState('');

  if (loading || !content) {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  const { featuredProducts } = content;
  const products = featuredProducts.products;

  const filtered = products.filter((p: { title: string; }) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );



  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#535353] text-3xl md:text-4xl font-medium">
            Explore Our Products
          </h2>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-[#e2e8f0] px-4 py-3 pl-10 text-sm text-[#535353] bg-white focus:outline-none focus:border-[#8B4513]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
          </div>

          {/* Filter and Sort */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm text-[#535353] bg-[#f6f6f6] px-4 py-3 rounded-full hover:bg-[#F5F5DC] transition-colors">
              Filter
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 text-sm text-[#535353] bg-[#f6f6f6] px-4 py-3 rounded-full hover:bg-[#F5F5DC] transition-colors">
              Sort by
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product: { id: string; title: string; description: string; button: string; image: string }) => {
            const ProductIconComponent = iconMap[product.id];

            return (
              <div key={product.id} className="bg-[#f8f8f8] rounded-[28px] p-6 pb-8 flex flex-col justify-between text-[#535353] group">
                <Link href={`/products/${product.id}`} className="flex-grow">
                  <div className="w-full flex justify-center mb-6">
                    <Image src={product.image} alt={product.title} width={200} height={200} className="object-contain" />
                  </div>
                  <div className="mb-4">
                    <div className="bg-[#8B4513] text-white text-xs font-semibold px-2 py-1 rounded w-fit mb-3 flex items-center justify-center">
                      {ProductIconComponent && <ProductIconComponent size={16} className="text-white" />}
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-[#8B4513] transition-colors">{product.title}</h3>
                    <p className="text-[#aeaeae] text-sm leading-snug">{product.description}</p>
                  </div>
                </Link>
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 text-sm text-[#535353] bg-white px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-center">
                    Add to Cart
                  </button>
                  <button className="flex-1 text-sm text-white bg-[#8B4513] px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-center">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
