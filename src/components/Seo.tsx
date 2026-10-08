import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { companyConfig } from '../data/company';
import { paths } from '../routes/paths';

const siteUrl = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/$/, '');

const metadata: Record<string, { title: string; description: string; noindex?: boolean }> = {
  [paths.home]: {
    title: 'Soluciones en elastómeros | Elastómeros La Roca',
    description: 'Conoce el catálogo, servicios y canales de contacto de Elastómeros La Roca S.A.S.',
  },
  [paths.products]: {
    title: 'Productos | Elastómeros La Roca',
    description: 'Explora el catálogo de productos de Elastómeros La Roca S.A.S.',
  },
  [paths.categories]: {
    title: 'Categorías | Elastómeros La Roca',
    description: 'Consulta las categorías del catálogo de Elastómeros La Roca S.A.S.',
  },
  [paths.services]: {
    title: 'Servicios | Elastómeros La Roca',
    description: 'Conoce los servicios disponibles de Elastómeros La Roca S.A.S.',
  },
  [paths.about]: {
    title: 'Nosotros | Elastómeros La Roca',
    description: 'Información corporativa de Elastómeros La Roca S.A.S.',
  },
  [paths.faq]: {
    title: 'Preguntas frecuentes | Elastómeros La Roca',
    description: 'Respuestas a preguntas frecuentes sobre Elastómeros La Roca S.A.S.',
  },
  [paths.contact]: {
    title: 'Contacto y cotización | Elastómeros La Roca',
    description: 'Solicita información o cotización a Elastómeros La Roca S.A.S.',
  },
  [paths.privacy]: {
    title: 'Política de privacidad | Elastómeros La Roca',
    description: 'Política de privacidad provisional pendiente de revisión legal.',
    noindex: true,
  },
  [paths.terms]: {
    title: 'Términos y condiciones | Elastómeros La Roca',
    description: 'Términos y condiciones provisionales pendientes de revisión legal.',
    noindex: true,
  },
};

export function Seo() {
  const { pathname } = useLocation();
  const isKnownPage = Object.prototype.hasOwnProperty.call(metadata, pathname);
  const detailPage = pathname.startsWith(`${paths.products}/`)
    ? { title: 'Detalle de producto | Elastómeros La Roca', description: 'Consulta la información disponible del producto seleccionado.' }
    : pathname.startsWith(`${paths.categories}/`)
      ? { title: 'Detalle de categoría | Elastómeros La Roca', description: 'Consulta los productos de la categoría seleccionada.' }
      : pathname.startsWith(`${paths.services}/`)
        ? { title: 'Detalle de servicio | Elastómeros La Roca', description: 'Consulta la información disponible del servicio seleccionado.' }
        : undefined;
  const page = metadata[pathname] ?? detailPage ?? {
    title: 'Página no encontrada | Elastómeros La Roca',
    description: 'La página solicitada no existe.',
    noindex: true,
  };
  const canonicalUrl = siteUrl && (isKnownPage || Boolean(detailPage)) ? `${siteUrl}${pathname === paths.home ? '/' : pathname}` : '';

  useEffect(() => {
    document.title = page.title;
    setMeta('description', page.description);
    setMeta('og:title', page.title, 'property');
    setMeta('og:description', page.description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', companyConfig.legalName, 'property');
    setMeta('twitter:card', 'summary');
    setMeta('robots', page.noindex ? 'noindex, nofollow' : 'index, follow');
    setCanonical(canonicalUrl);
    setStructuredData(canonicalUrl);
  }, [canonicalUrl, page.description, page.noindex, page.title]);

  return null;
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!url) {
    existing?.remove();
    return;
  }
  const link = existing ?? document.createElement('link');
  link.rel = 'canonical';
  link.href = url;
  if (!existing) document.head.appendChild(link);
}

function setStructuredData(url: string) {
  const id = 'organization-structured-data';
  document.getElementById(id)?.remove();
  if (!url) return;
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyConfig.legalName,
    url,
  });
  document.head.appendChild(script);
}
