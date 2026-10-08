export interface TechnicalSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  image?: string;
  features: string[];
  applications: string[];
  technicalSpecifications: TechnicalSpecification[];
  technicalDocumentUrl?: string;
  tags: string[];
  isDemo: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  isDemo: boolean;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName?: string;
  isDemo: boolean;
}

export interface FrequentlyAskedQuestion {
  id: string;
  question: string;
  answer: string;
  isDemo: boolean;
}
