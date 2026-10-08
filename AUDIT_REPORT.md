# Informe de auditoría — Fase 9

Fecha: 2026-02-13

## Resumen ejecutivo

La aplicación compila correctamente y las rutas, navegación principal, catálogo, filtros, formularios, temas y estados de error revisados funcionan en el entorno local. No se identificaron problemas críticos ni altos de ejecución durante las pruebas funcionales.

La aplicación continúa siendo un sitio estático con contenido empresarial provisional. El envío real de formularios, el dominio de producción y la revisión legal todavía requieren configuración externa y validación de la empresa.

## Comandos ejecutados

| Comando | Resultado |
| --- | --- |
| `npm.cmd ci` | Correcto |
| `npm.cmd run build` | Correcto: `tsc -b && vite build` |
| `npm.cmd run lint` | No disponible: no existe el script `lint` |
| `npm.cmd audit --omit=dev` | Correcto: 0 vulnerabilidades de producción |
| `npm.cmd audit --audit-level=moderate` | 7 vulnerabilidades transitivas de desarrollo: 5 altas y 2 moderadas |
| `git diff --check` | Sin errores de espacios o formato |
| `git grep` para patrones comunes de credenciales | No se encontraron patrones comunes en archivos rastreados |

El primer intento de compilación durante la auditoría se ejecutó en paralelo con `npm ci` y falló por la concurrencia sobre `node_modules`. La compilación repetida de forma secuencial pasó correctamente; el fallo no fue reproducible en condiciones normales.

## Pruebas funcionales

### Rutas y navegación

Se verificaron mediante navegador local las siguientes rutas:

- `/`
- `/productos`
- `/productos/producto-pendiente`
- `/categorias`
- `/categorias/categoria-pendiente`
- `/servicios`
- `/servicios/servicio-pendiente`
- `/nosotros`
- `/preguntas-frecuentes`
- `/contacto`
- `/politica-de-privacidad`
- `/terminos-y-condiciones`
- `/404`
- Una ruta inexistente, con redirección visual al contenido 404

Todas renderizaron un elemento `main`, un encabezado principal y un título de documento específico. No se registraron errores de consola durante la navegación.

En la página de inicio se revisaron 29 referencias internas; todas respondieron con estado HTTP 200 en el servidor local.

### Catálogo

- La búsqueda local actualiza los resultados.
- Una búsqueda sin coincidencias muestra el estado accesible `No encontramos productos`.
- El control de categoría está disponible.
- Los enlaces de categorías y detalles se generan desde los datos centralizados.
- No se presentan precios, especificaciones ni documentos que no estén presentes en los datos.

### Formularios

- Los formularios de contacto y cotización se renderizan correctamente.
- Un envío vacío genera dos alertas accesibles, una por formulario.
- Se marcaron nueve controles inválidos mediante `aria-invalid`.
- Los campos requeridos y los mensajes de validación son visibles.
- No se simuló una confirmación de envío.
- No se ejecutó un envío real porque no existe `VITE_FORM_ENDPOINT` configurado.
- La protección honeypot y el control de adjuntos permanecen sujetos a la validación del proveedor externo.

### Responsive y temas

- En viewport móvil de 390 × 844 px, el menú móvil se abre correctamente.
- El selector de tema aplica el tema oscuro.
- No se detectó overflow horizontal en la página de inicio móvil.
- La aplicación respeta la estructura de temas claro, oscuro y preferencia del sistema implementada en fases anteriores.

### Accesibilidad básica

- Existe enlace para saltar al contenido principal.
- Los formularios tienen etiquetas y mensajes asociados.
- Los estados de validación usan `aria-invalid` y regiones de alerta.
- Los estados sin resultados usan una región `status`.
- No se encontraron imágenes sin texto alternativo en la página de inicio probada.
- El foco visible y `prefers-reduced-motion` están definidos en los estilos globales.

### Recursos y rendimiento

- El build de producción genera `dist` correctamente.
- Tamaño medido de `dist`: aproximadamente 262 KB.
- Assets generados: JavaScript de aproximadamente 232 KB y CSS de aproximadamente 28 KB.
- No hay imágenes rasterizadas reales incorporadas actualmente; por tanto, no se detectaron imágenes rotas en las rutas probadas.
- Las páginas son estáticas y no contienen operaciones asíncronas que requieran indicadores de carga artificiales.

## Clasificación de hallazgos

### Críticos

Ninguno identificado.

### Altos

Ninguno identificado en ejecución o en dependencias de producción.

### Medios

1. **Vulnerabilidades transitivas de tooling** — `npm audit` reporta 5 vulnerabilidades altas y 2 moderadas asociadas principalmente con Tailwind CSS 3.x y su cadena de herramientas (`braces`, `chokidar`, `micromatch`, `fast-glob`, `postcss-selector-parser` y dependencias relacionadas). La corrección automática requiere `npm audit fix --force`, que actualizaría Tailwind a 4.x y constituye un cambio mayor. No se aplicó durante esta auditoría para evitar una migración no solicitada y no verificada.
2. **Proveedor de formularios sin configurar** — El envío real permanece pendiente. La interfaz informa esta limitación y no muestra confirmaciones falsas.
3. **Dominio de producción pendiente** — `VITE_SITE_URL` no está configurado. Por ello canonical y JSON-LD se omiten localmente, y `public/robots.txt` y `public/sitemap.xml` conservan el marcador `{{SITE_URL}}`.

### Bajos

1. No existe un script `lint` en `package.json`; la calidad estática se verifica actualmente mediante TypeScript y el build.
2. Los datos empresariales, legales, productos, servicios y canales de contacto continúan marcados como provisionales y requieren validación.
3. No se implementó PWA, service worker, analítica ni reporte de errores porque no hay una necesidad confirmada ni configuración de consentimiento/proveedor.
4. El comportamiento offline no está soportado deliberadamente. Las páginas ya cargadas no presentan una confirmación falsa de formularios cuando no existe proveedor configurado.

## Archivos modificados en la Fase 9

- `AUDIT_REPORT.md`

No fue necesario modificar código de la aplicación: no se reprodujeron defectos funcionales que requirieran una corrección segura durante la auditoría.

## Recomendaciones antes de producción

1. Validar los textos empresariales, legales, productos, servicios y datos de contacto.
2. Configurar un proveedor externo de formularios en `VITE_FORM_ENDPOINT` y ejecutar un envío real controlado antes de publicar.
3. Definir `VITE_SITE_URL` en el entorno de producción y reemplazar `{{SITE_URL}}` en `robots.txt` y `sitemap.xml`.
4. Evaluar por separado la actualización de Tailwind CSS 4.x, con revisión de configuración y pruebas visuales completas.
5. Incorporar un linter únicamente cuando se defina la configuración y dependencia aprobadas para el proyecto.
6. Ejecutar una auditoría automatizada de accesibilidad y rendimiento en el dominio publicado.
7. Verificar las reglas de fallback SPA del proveedor elegido para que las rutas profundas funcionen al recargar directamente.
