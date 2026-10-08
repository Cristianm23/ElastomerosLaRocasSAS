import { ArrowRight, Settings2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/catalog';
import { paths } from '../routes/paths';

export function ServicesPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-header">
        <div className="site-container">
          <p className="eyebrow">Capacidades</p>
          <h1>Servicios</h1>
          <p>Conoce los servicios previstos para acompañar los requerimientos de nuestros clientes.</p>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container">
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <span className="card-icon"><Settings2 aria-hidden="true" size={24} /></span>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <Link className="text-link" to={paths.serviceDetail(service.slug)}>
                  Ver detalle <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="content-notice"><Wrench aria-hidden="true" size={17} /> El alcance de cada servicio es provisional y requiere confirmación empresarial.</p>
        </div>
      </section>
    </main>
  );
}

export function ServiceDetailPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-header">
        <div className="site-container">
          <Link className="back-link" to={paths.services}>← Volver a servicios</Link>
          <p className="eyebrow">Detalle de servicio</p>
          <h1>Servicio pendiente de confirmar</h1>
          <p>La descripción y el alcance de este servicio se publicarán cuando sean validados.</p>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container detail-content detail-content--narrow">
          <h2>Información disponible</h2>
          <p>Este contenido es provisional. No se presentan alcances, tiempos, precios ni condiciones que no hayan sido confirmados.</p>
          <Link className="button button--accent" to={paths.contact}>Solicitar información</Link>
        </div>
      </section>
    </main>
  );
}
