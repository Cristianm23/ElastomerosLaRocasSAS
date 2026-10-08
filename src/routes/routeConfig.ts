import { paths } from './paths';

export interface PublicRoute {
  path: string;
  label: string;
  description: string;
}

export const publicRoutes: PublicRoute[] = [
  { path: paths.home, label: 'Inicio', description: 'Presentación corporativa.' },
  { path: paths.products, label: 'Productos', description: 'Catálogo de productos.' },
  { path: paths.categories, label: 'Categorías', description: 'Categorías de productos.' },
  { path: paths.services, label: 'Servicios', description: 'Servicios disponibles.' },
  { path: paths.faq, label: 'Preguntas frecuentes', description: 'Respuestas frecuentes.' },
  { path: paths.contact, label: 'Contacto', description: 'Canales de contacto y cotización.' },
];
