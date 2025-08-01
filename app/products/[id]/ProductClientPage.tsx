'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Accordion } from '@/app/Components/Accordion';
import { ProductStats } from '@/app/Components/ProductStats';

interface ProductClientPageProps {
  product: any;
}

const ProductClientPage: FC<ProductClientPageProps> = ({ product }) => {
  if (!product) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div>Product not found.</div>
      </section>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 group overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div>
          <h1 className="text-3xl font-medium text-[#535353] mb-4">{product.title}</h1>
          <p className="text-lg text-[#8B4513] font-semibold mb-6">$XX.XX</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <div className="flex items-center gap-4 mb-8">
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-20 rounded-full border border-gray-300 px-4 py-3 text-center"
            />
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#8B4513] text-white font-medium text-sm rounded-full px-6 py-3.5 hover:bg-amber-800 transition">
              <ShoppingBag size={18} />
              Add to Cart
            </button>
          </div>
          <div className="space-y-2">
            <Accordion title="Product Details">
              <p>Detailed information about the product, its benefits, and what makes it special. This is where you can elaborate on the product&apos;s unique selling points.</p>
            </Accordion>
            <Accordion title="Ingredients">
              <p>A list of all ingredients used in the product. You could use a list format here for better readability.</p>
            </Accordion>
            <Accordion title="How to Use">
              <p>Step-by-step instructions on how to use the product for the best results. Include dosage, frequency, and any other relevant guidance.</p>
            </Accordion>
          </div>
        </div>
      </div>
      <ProductStats />
    </div>
  );
};

export default ProductClientPage;
