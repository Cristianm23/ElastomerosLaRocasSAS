import type {
  FrequentlyAskedQuestion,
  Product,
  ProductCategory,
  Service,
} from '../types/catalog';

export const productCategories: ProductCategory[] = [
  {
    id: 'demo-category',
    name: '[Categoría pendiente de confirmar]',
    slug: 'categoria-pendiente',
    description: '[Contenido provisional pendiente de validación.',
    isDemo: true,
  },
];

export const products: Product[] = [
  {
    id: 'demo-product',
    name: '[Producto pendiente de confirmar]',
    slug: 'producto-pendiente',
    categoryId: 'demo-category',
    description: '[Descripción provisional pendiente de validación.',
    features: [],
    applications: [],
    technicalSpecifications: [],
    tags: [],
    isDemo: true,
  },
];

export const services: Service[] = [
  {
    id: 'demo-service',
    name: '[Servicio pendiente de confirmar]',
    slug: 'servicio-pendiente',
    description: '[Descripción provisional pendiente de validación.',
    isDemo: true,
  },
];

export const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    id: 'demo-faq',
    question: '[Pregunta frecuente pendiente de confirmar]',
    answer: '[Respuesta provisional pendiente de validación.',
    isDemo: true,
  },
];
