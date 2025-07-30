import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContentData {
  hero: any;
  featuredProducts: any;
  benefits: any;
  stats: any;
  useCases: any;
  industrySolutions: any;
  testimonials: any;
  compatibility: any;
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