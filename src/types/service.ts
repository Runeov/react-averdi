import type { LucideIcon } from 'lucide-react';

export type ServiceTheme = 'orange' | 'blue' | 'green' | 'slate';

export interface ServiceHeroData {
  title: string;
  subtitle: string;
  theme: ServiceTheme;
}

export interface ProductTab {
  id: string;
  title: string;
  shortDesc: string;
  icon: string; // URL to image/icon
  content: string;
  bullets: string[];
  link: string;
  linkText?: string; // Optional, default is "Les mer"
}

export interface ExpertProfile {
  name: string;
  role: string;
  image: string;
  quote: string;
  email: string;
  phone: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageConfig {
  hero: ServiceHeroData;
  products: ProductTab[];
  expert: ExpertProfile;
  faq: FAQItem[];
  articleTag: string;
}