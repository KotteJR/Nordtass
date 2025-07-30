import { ProductsPage } from '../Shop/ProductGrid';
import { Footer } from '../Components/footer';

export default function Shop() {
  return (
    <div className="pt-16">
      <ProductsPage />
      <Footer />
    </div>
  );
}