export const paths = {
  home: '/',
  products: '/productos',
  productDetail: (slug: string) => `/productos/${slug}`,
  categories: '/categorias',
  categoryDetail: (slug: string) => `/categorias/${slug}`,
  services: '/servicios',
  faq: '/preguntas-frecuentes',
  contact: '/contacto',
} as const;
