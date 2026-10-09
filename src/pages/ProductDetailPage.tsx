import { ArrowLeft, FileText, ImageOff, MessageSquareQuote, Wrench } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { productCategories, products } from '../data/catalog';
import { paths } from '../routes/paths';

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) return <CatalogNotFound label="Producto no encontrado" />;
  const category = productCategories.find(({ id }) => id === product.categoryId);

  return (
    <main className="catalog-page">
      <section className="catalog-header"><div className="site-container"><Link className="back-link" to={paths.products}><ArrowLeft size={16} /> Volver a productos</Link><p className="eyebrow">Detalle de producto</p><h1>{product.name}</h1><p>{product.description}</p></div></section>
      <section className="home-section">
        <div className="site-container detail-grid">
          <div className="detail-media">{product.image ? <img src={product.image} alt={`Producto: ${product.name}`} width="1152" height="768" /> : <><Wrench size={64} /><span><ImageOff size={15} /> Imagen pendiente de confirmar</span></>}</div>
          <div className="detail-content">
            <span className="catalog-card__category">{category?.name ?? 'Categoría pendiente'}</span>
            <h2>Información disponible</h2>
            <p>{product.isDemo ? 'Este registro es demostrativo y deberá sustituirse por información validada.' : product.description}</p>
            {product.features.length > 0 && <DetailList title="Características" items={product.features} />}
            {product.applications.length > 0 && <DetailList title="Aplicaciones" items={product.applications} />}
            {product.technicalSpecifications.length > 0 && <SpecificationTable product={product} />}
            {product.technicalDocumentUrl && <a className="button button--secondary" href={product.technicalDocumentUrl} target="_blank" rel="noreferrer"><FileText size={17} /> Documento técnico</a>}
            <Link className="button button--accent" to={paths.contact}><MessageSquareQuote size={17} /> Solicitar información</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <div className="detail-list"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

function SpecificationTable({ product }: { product: NonNullable<ReturnType<typeof products.find>> }) {
  return <div className="detail-list"><h3>Especificaciones técnicas confirmadas</h3><dl className="spec-list">{product.technicalSpecifications.map((spec) => <div key={spec.name}><dt>{spec.name}</dt><dd>{spec.value}{spec.unit ? ` ${spec.unit}` : ''}</dd></div>)}</dl></div>;
}

export function CatalogNotFound({ label }: { label: string }) {
  return <main className="page-placeholder site-container"><h1>{label}</h1><p>Revisa la dirección o vuelve al catálogo.</p><Link className="button button--primary" to={paths.products}>Ir a productos</Link></main>;
}
