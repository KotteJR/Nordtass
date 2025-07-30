import { HeroSection } from './Home/HeroSection';
import FeaturedProductsSection from './Home/FeaturedProductsSection';
import { BenefitsSection } from './Home/BenefitsSection';
import { StatsSection } from './Home/StatsSection';
import { UseCasesSection } from './Home/UseCasesSection';
import { IndustrySolutionsSection } from './Home/IndustrySolutionsSection';
import { TestimonialsSection } from './Home/TestimonialSection';
import { CompatibilitySection } from './Home/CompatibilitySection';
import { Footer } from './Components/footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProductsSection />
      <BenefitsSection />
      <StatsSection />
      <UseCasesSection />
      <IndustrySolutionsSection />
      <TestimonialsSection />
      <CompatibilitySection />
      <Footer />
    </div>
  );
}