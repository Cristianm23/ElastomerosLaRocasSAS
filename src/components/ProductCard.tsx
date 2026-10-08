import { ArrowRight, ImageOff, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/catalog';
import { productCategories } from '../data/catalog';
import { paths } from '../routes/paths';

export function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find(({ id }) => id === product.categoryId);

  return (
    <article className="catalog-card">
      <div className="catalog-card__media">
        {product.image ? (
          <img src={product.image} alt="" loading="lazy" />
        ) : (
          <>
            <Wrench aria-hidden="true" size={34} />
            <span><ImageOff aria-hidden="true" size={15} /> Imagen pendiente</span>
          </>
        )}
      </div>
      <div className="catalog-card__body">
        <span className="catalog-card__category">{category?.name ?? 'Categoría pendiente'}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Link className="text-link" to={paths.productDetail(product.slug)}>
          Ver producto <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
