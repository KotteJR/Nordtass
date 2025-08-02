import { getContent } from '@/lib/data';
import ProductClientPage from './ProductClientPage';
import { Footer } from '@/app/Components/footer';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const content = await getContent();
  const product = content.featuredProducts.products.find((p: any) => p.id === id);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col justify-center pt-24">
        <ProductClientPage product={product} />
      </main>
      <Footer />
    </div>
  );
}
