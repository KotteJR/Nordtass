import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  button: string;
  image: string;
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Metric {
  icon: string;
  title: string;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
}



interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
}

interface ContentData {
  hero: {
    tagline: string;
    title: string;
    description: string;
    ctaButton: string;
    features: Feature[];
  };
  featuredProducts: {
    sectionTag: string;
    title: string;
    products: Product[];
  };
  benefits: {
    sectionTag: string;
    title: string;
    benefits: Benefit[];
  };
  stats: {
    sectionTag: string;
    title: string;
    metrics: Metric[];
  };
  useCases: {
    sectionTag: string;
    title: string;
    cases: UseCase[];
  };
  industrySolutions: {
    sectionTag: string;
    title: string;
    currentType: string;
    ctaButton: string;
    houseImage: string;
    segments: Array<{
      type: string;
      image: string;
    }>;
  };
  testimonials: {
    sectionTag: string;
    title: string;
    testimonial: Testimonial[];
  };
  compatibility: {
    sectionTag: string;
    title: string;
    integrations: Array<{
      icon: string;
      name: string;
    }>;
    features: {
      title: string;
      list: string[];
    };
    cta: {
      title: string;
      description: string;
      button: string;
      backgroundImage: string;
    };
  };
}

export function useContent() {
  const { language } = useLanguage();
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/data/content.${language}.json`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to load content:', error);
        // Fallback to English if Swedish fails
        if (language === 'sv') {
          const fallbackResponse = await fetch('/data/content.en.json');
          const fallbackData = await fallbackResponse.json();
          setContent(fallbackData);
        }
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [language]);

  return { content, loading };
}

// Keep this for backward compatibility
export function useDefaultContent() {
  return useContent();
} 