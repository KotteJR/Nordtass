'use client';
import Image from 'next/image';
import { Bone, Pill, Shield, Heart, Zap } from 'lucide-react';
import { useDefaultContent } from '../hooks/useContent';

const FeaturedProductsSection = () => {
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

  const { featuredProducts } = content;

  // Icon mapping for product IDs
  const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    'Bone': Bone,
    'Pill': Pill,
    'Shield': Shield,
    'Heart': Heart,
    'Zap': Zap,
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#2288ff] text-sm font-medium mb-4">{featuredProducts.sectionTag}</p>
          <h2 className="text-[#535353] text-3xl md:text-4xl text-center font-medium mb-12">
            {featuredProducts.title}
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-8 pb-4">
            {featuredProducts.products.map((product: any) => {
              const ProductIconComponent = iconMap[product.id];

              return (
                <div
                  key={product.id}
                  className="bg-[#f8f8f8] rounded-[28px] p-6 pb-8 flex flex-col justify-between text-[#535353] w-[300px] flex-shrink-0"
                >
                  <div className="w-full flex justify-center mb-6">
                    <Image src={product.image} alt={product.title} width={200} height={200} className="object-contain" />
                  </div>

                  <div className="mb-4">
                    <div className="bg-[#2288ff] text-white text-xs font-semibold px-2 py-1 rounded w-fit mb-3 flex items-center justify-center">
                      {ProductIconComponent && <ProductIconComponent size={16} className="text-white" />}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                    <p className="text-[#aeaeae] text-sm leading-snug">{product.description}</p>
                  </div>

                  <button className="flex items-center gap-2 mt-auto bg-white text-[#2288ff] font-medium text-sm rounded-full px-5 py-2 w-fit hover:opacity-90 transition">
                    {product.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
