# Elastómeros La Roca S.A.S.

Sitio web corporativo estático para Elastómeros La Roca S.A.S., construido con React, TypeScript, Vite, Tailwind CSS, React Router y Lucide React.

El contenido empresarial, de productos, servicios y contacto que todavía no ha sido confirmado está marcado como provisional en la interfaz y en los datos del proyecto.

## Requisitos

- Node.js 20 LTS o una versión compatible con Vite 6.
- npm.

## Desarrollo local

Instalar dependencias:

```bash
npm ci
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Por defecto, Vite muestra la aplicación en `http://localhost:5173`.

## Compilación y verificación

Crear la compilación de producción:

```bash
npm run build
```

El comando ejecuta primero `tsc -b` y después `vite build`. El directorio de salida es `dist/`.

Previsualizar localmente la compilación:

```bash
npm run preview
```

Actualmente no existe un script `lint`. Antes de una publicación se debe ejecutar como mínimo `npm ci`, `npm run build` y una revisión manual de las rutas, formularios y temas.

## Variables de entorno públicas

Las variables con prefijo `VITE_` se incorporan al JavaScript del navegador. No deben contener secretos, contraseñas, tokens privados ni credenciales.

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `VITE_SITE_URL` | Antes de producción | URL HTTPS pública usada para canonical, JSON-LD y configuración SEO. |
| `VITE_FORM_ENDPOINT` | Solo si se habilita el envío | URL pública del proveedor externo que recibe los formularios mediante `POST multipart/form-data`. |

Ejemplo local:

```text
VITE_SITE_URL=https://www.example.com
VITE_FORM_ENDPOINT=https://endpoint-del-proveedor.example/forms
```

No se deben copiar estos valores a la aplicación si el dominio o el proveedor todavía no han sido confirmados.

## Despliegue en Vercel

1. Crear o seleccionar un proyecto en Vercel.
2. Conectar el repositorio `Cristianm23/ElastomerosLaRocasSAS` de GitHub.
3. Usar estos valores de configuración:
   - Framework preset: `Vite`.
   - Build command: `npm run build`.
   - Output directory: `dist`.
   - Install command: `npm ci`.
4. Definir las variables públicas necesarias en Project Settings > Environment Variables.
5. Seleccionar los entornos apropiados (`Preview` y `Production`).
6. Ejecutar un despliegue de Preview y verificar rutas directas, navegación, formularios y metadatos.
7. Asociar el dominio solo después de completar la checklist de producción.

El archivo `vercel.json` contiene el fallback de las rutas SPA hacia `index.html`. No se ha realizado ningún despliegue desde este proyecto.

## Despliegue en Cloudflare Pages

1. Crear un proyecto Pages y elegir `Connect to Git`.
2. Conectar el repositorio `Cristianm23/ElastomerosLaRocasSAS`.
3. Usar estos valores:
   - Framework preset: `Vite` o configuración personalizada.
   - Build command: `npm run build`.
   - Build output directory: `dist`.
   - Versión de Node: usar Node.js 20 LTS o la versión definida por el entorno.
4. Definir las variables públicas en Settings > Environment variables.
5. Crear primero un despliegue Preview y probar las rutas profundas.
6. Publicar en producción solo después de validar la checklist.

El archivo `public/_redirects` se copia a `dist/_redirects` durante el build y configura el fallback SPA de Cloudflare Pages. No se ha realizado ningún despliegue desde este proyecto.

## Actualizar productos, categorías y servicios

La fuente centralizada de datos se encuentra en `src/data/catalog.ts`.

- Editar `productCategories` para añadir o actualizar categorías.
- Editar `products` para añadir o actualizar productos.
- Editar `services` para añadir o actualizar servicios.
- Mantener `id` y `slug` únicos.
- Hacer coincidir `Product.categoryId` con el `id` de una categoría existente.
- Añadir especificaciones técnicas, documentos, imágenes o etiquetas solo cuando estén confirmados.
- Mantener `isDemo: true` mientras un registro sea provisional.
- No añadir precios, certificaciones, clientes, capacidades o afirmaciones no verificadas.

Después de cada actualización:

```bash
npm run build
```

Verificar el listado, búsqueda, filtros, detalles y enlaces relacionados.

## Configurar el proveedor de formularios

Consultar [FORM_CONFIGURATION.md](./FORM_CONFIGURATION.md). La aplicación no almacena mensajes ni simula envíos. La confirmación solo aparece después de una respuesta HTTP exitosa del endpoint configurado.

Antes de activar el proveedor:

- Confirmar que acepta `multipart/form-data`.
- Confirmar los nombres de campos y la recepción de adjuntos.
- Activar validación del lado del proveedor y protección contra spam.
- Definir destinatarios, retención y aviso de privacidad.
- Ejecutar un envío real controlado en Preview.
- Revisar que no se expongan claves privadas en variables `VITE_*`.

## SEO y dominio

Antes de producción:

1. Definir `VITE_SITE_URL` con la URL HTTPS final.
2. Reemplazar `{{SITE_URL}}` en `public/robots.txt` y `public/sitemap.xml`.
3. Revisar que el sitemap solo incluya rutas públicas confirmadas.
4. Comprobar canonical, Open Graph, JSON-LD y títulos desde el dominio publicado.

## Revertir un despliegue defectuoso

No se deben borrar archivos ni cambiar el repositorio para revertir una publicación.

1. Detener temporalmente la promoción del despliegue si el proveedor lo permite.
2. En Vercel, abrir el proyecto, revisar Deployments y promover un despliegue anterior conocido como estable mediante la opción de rollback.
3. En Cloudflare Pages, abrir Deployments y volver a desplegar o activar el despliegue anterior estable según la opción disponible.
4. Si el problema está en el código, crear una corrección en una rama, ejecutar `npm run build`, revisar Preview y conectar el cambio mediante GitHub.
5. Registrar el incidente, el commit o despliegue afectado y la corrección aplicada.
6. Verificar nuevamente las rutas, assets, formularios y metadatos después de la reversión.

## Checklist previa a producción

- [ ] El repositorio y la rama de producción son los correctos.
- [ ] `npm ci` termina correctamente.
- [ ] `npm run build` termina correctamente.
- [ ] El output configurado es `dist`.
- [ ] El fallback SPA está activo para el proveedor elegido.
- [ ] `VITE_SITE_URL` contiene el dominio HTTPS confirmado.
- [ ] `robots.txt` y `sitemap.xml` no contienen `{{SITE_URL}}`.
- [ ] No existen secretos en el frontend ni en variables `VITE_*`.
- [ ] Los datos de empresa, productos, categorías y servicios fueron validados.
- [ ] Los textos legales fueron revisados.
- [ ] El proveedor de formularios está configurado y probado en Preview, si se habilitará.
- [ ] El formulario no muestra confirmaciones falsas ante errores o ausencia de endpoint.
- [ ] Se verificaron las rutas directas y la página 404.
- [ ] Se revisaron navegación móvil, tema claro, tema oscuro y teclado.
- [ ] Se revisaron títulos, canonical, Open Graph, JSON-LD y sitemap.
- [ ] Se revisaron recursos, enlaces y consola del navegador.
- [ ] Existe un despliegue anterior estable identificado para rollback.

## Estado de publicación

La aplicación está preparada a nivel de configuración y documentación, pero no está publicada. La conexión con GitHub y cualquier despliegue en Vercel o Cloudflare Pages deben realizarse de forma autorizada desde la cuenta correspondiente.
