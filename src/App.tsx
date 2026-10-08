import { BrowserRouter, useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes/routeConfig';
import { paths } from './routes/paths';

function RoutePlaceholder({ label }: { label: string }) {
  return (
    <main>
      <h1>{label}</h1>
      <p>Contenido de esta sección pendiente de desarrollo en fases posteriores.</p>
    </main>
  );
}

function AppRoutes() {
  return useRoutes([
    ...publicRoutes.map((route) => ({
      path: route.path,
      element: <RoutePlaceholder label={route.label} />,
    })),
    { path: paths.productDetail(':slug'), element: <RoutePlaceholder label="Detalle de producto" /> },
    { path: paths.categoryDetail(':slug'), element: <RoutePlaceholder label="Detalle de categoría" /> },
    { path: '*', element: <RoutePlaceholder label="Página no encontrada" /> },
  ]);
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
