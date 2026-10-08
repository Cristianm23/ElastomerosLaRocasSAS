import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { productCategories, products } from '../data/catalog';
import { paths } from '../routes/paths';
import { Link } from 'react-router-dom';

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesQuery =
          !normalizedQuery ||
          [product.name, product.description, ...product.tags]
            .join(' ')
            .toLocaleLowerCase()
            .includes(normalizedQuery);
        const matchesCategory = categoryId === 'all' || product.categoryId === categoryId;
        return matchesQuery && matchesCategory;
      }),
    [categoryId, normalizedQuery],
  );

  return (
    <main className="catalog-page">
      <section className="catalog-header">
        <div className="site-container">
          <p className="eyebrow">Catálogo</p>
          <h1>Productos</h1>
          <p>Explora el catálogo disponible y solicita información sobre el producto que necesitas.</p>
          <p className="demo-note demo-note--dark">Los datos marcados como provisionales requieren validación empresarial.</p>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container">
          <div className="catalog-toolbar" aria-label="Filtros de productos">
            <label className="catalog-search">
              <Search aria-hidden="true" size={19} />
              <span className="sr-only">Buscar productos</span>
              <input
                type="search"
                value={query}
                placeholder="Buscar por nombre, descripción o etiqueta"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label className="catalog-filter">
              <SlidersHorizontal aria-hidden="true" size={18} />
              <span className="sr-only">Filtrar por categoría</span>
              <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
                <option value="all">Todas las categorías</option>
                {productCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="catalog-results-heading">
            <p aria-live="polite">{filteredProducts.length} resultado(s)</p>
            <Link className="text-link" to={paths.categories}>Ver categorías</Link>
          </div>
          {filteredProducts.length ? (
            <div className="catalog-grid">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <EmptyState query={query} onClear={() => { setQuery(''); setCategoryId('all'); }} />
          )}
        </div>
      </section>
    </main>
  );
}

function EmptyState({ query, onClear }: { query: string; onClear: () => void }) {
  return (
    <div className="catalog-empty" role="status">
      <h2>No encontramos productos</h2>
      <p>{query ? 'Prueba con otros términos o limpia los filtros para ver el catálogo disponible.' : 'Aún no hay productos publicados con esta categoría.'}</p>
      <button className="button button--secondary" type="button" onClick={onClear}>Limpiar filtros</button>
    </div>
  );
}
