import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { publicRoutes } from './routes/routeConfig';
import { paths } from './routes/paths';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';

function RoutePlaceholder({ label }: { label: string }) {
  return (
    <main className="page-placeholder site-container">
      <h1>{label}</h1>
      <p>Contenido de esta sección pendiente de desarrollo en fases posteriores.</p>
    </main>
  );
}

function AppRoutes() {
  return useRoutes([
    { path: paths.home, element: <HomePage /> },
    ...publicRoutes.filter((route) => route.path !== paths.home).map((route) => ({
      path: route.path,
      element: <RoutePlaceholder label={route.label} />,
    })),
    { path: paths.productDetail(':slug'), element: <RoutePlaceholder label="Detalle de producto" /> },
    { path: paths.categoryDetail(':slug'), element: <RoutePlaceholder label="Detalle de categoría" /> },
    { path: paths.serviceDetail(':slug'), element: <RoutePlaceholder label="Detalle de servicio" /> },
    { path: paths.privacy, element: <RoutePlaceholder label="Política de privacidad" /> },
    { path: paths.terms, element: <RoutePlaceholder label="Términos y condiciones" /> },
    { path: paths.notFound, element: <RoutePlaceholder label="Página no encontrada" /> },
    { path: '*', element: <RoutePlaceholder label="Página no encontrada" /> },
  ]);
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SiteLayout>
          <AppRoutes />
        </SiteLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
