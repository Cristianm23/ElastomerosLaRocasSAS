# SEO, accesibilidad y rendimiento

## Configuración pendiente

El dominio público todavía no ha sido confirmado. Antes del despliegue se debe:

1. Definir `VITE_SITE_URL` con la URL HTTPS pública.
2. Sustituir `{{SITE_URL}}` en `public/robots.txt` y `public/sitemap.xml`.
3. Verificar el sitemap en Google Search Console u otra herramienta equivalente.

No se inventó un dominio, dirección, teléfono, valoración ni dato empresarial estructurado.

## Mejoras incluidas

- Títulos y descripciones dinámicos según ruta.
- Metadatos Open Graph y Twitter Card básicos.
- Etiqueta canonical solo cuando existe `VITE_SITE_URL`.
- `Organization` JSON-LD solo con nombre legal y URL confirmada por configuración.
- `robots.txt` y sitemap con marcador explícito de dominio.
- URLs internas legibles y enlaces SPA funcionales.
- Enlace para saltar al contenido principal.
- Foco visible mediante `:focus-visible`.
- Formularios con etiquetas, mensajes asociados y estados accesibles.
- `prefers-reduced-motion` respetado por los estilos existentes.
- Imágenes opcionales con `loading="lazy"` y tratamiento visual sin recursos externos.
- Sin analítica, reporte de errores ni PWA porque no existe configuración ni consentimiento para esos servicios.

## Limitaciones

- El sitemap no debe publicarse sin reemplazar `{{SITE_URL}}`.
- El formulario no confirma envíos mientras no se configure un proveedor externo.
- Las imágenes y datos industriales permanecen provisionales hasta recibir recursos autorizados.
