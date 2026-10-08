import { CategoryCard } from '../components/CategoryCard';
import { productCategories, products } from '../data/catalog';

export function CategoriesPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-header">
        <div className="site-container">
          <p className="eyebrow">Organización del catálogo</p>
          <h1>Categorías</h1>
          <p>Consulta las categorías disponibles para encontrar productos con mayor facilidad.</p>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container">
          {productCategories.length ? (
            <div className="catalog-grid">
              {productCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  productCount={products.filter(({ categoryId }) => categoryId === category.id).length}
                />
              ))}
            </div>
          ) : (
            <div className="catalog-empty"><h2>Categorías pendientes</h2><p>Las categorías se publicarán cuando sean confirmadas.</p></div>
          )}
        </div>
      </section>
    </main>
  );
}
