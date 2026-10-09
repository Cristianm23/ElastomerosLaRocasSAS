import { ArrowRight, Boxes, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProductCategory } from '../types/catalog';
import { paths } from '../routes/paths';

export function CategoryCard({ category, productCount }: { category: ProductCategory; productCount: number }) {
  return (
    <article className="catalog-card">
      <div className="catalog-card__media catalog-card__media--category">
        {category.image ? (
          <img src={category.image} alt={`Categoría: ${category.name}`} loading="lazy" width="1152" height="768" />
        ) : (
          <>
            <Boxes aria-hidden="true" size={34} />
            <span><ImageOff aria-hidden="true" size={15} /> Imagen pendiente</span>
          </>
        )}
      </div>
      <div className="catalog-card__body">
        <span className="catalog-card__category">{productCount} producto(s) asociado(s)</span>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <Link className="text-link" to={paths.categoryDetail(category.slug)}>
          Explorar categoría <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
