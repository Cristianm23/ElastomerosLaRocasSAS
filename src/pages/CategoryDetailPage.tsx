import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { productCategories, products } from '../data/catalog';
import { paths } from '../routes/paths';

export function CategoryDetailPage() {
  const { slug } = useParams();
  const category = productCategories.find((item) => item.slug === slug);
  if (!category) return <main className="page-placeholder site-container"><h1>Categoría no encontrada</h1><Link className="button button--primary" to={paths.categories}>Ir a categorías</Link></main>;
  const categoryProducts = products.filter(({ categoryId }) => categoryId === category.id);
  return <main className="catalog-page">
    <section className="catalog-header"><div className="site-container"><Link className="back-link" to={paths.categories}><ArrowLeft size={16} /> Volver a categorías</Link><p className="eyebrow">Categoría</p><h1>{category.name}</h1><p>{category.description}</p></div></section>
    <section className="home-section"><div className="site-container"><h2>Productos de esta categoría</h2>{categoryProducts.length ? <div className="catalog-grid catalog-grid--spaced">{categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="catalog-empty"><p>No hay productos publicados en esta categoría.</p></div>}</div></section>
  </main>;
}
