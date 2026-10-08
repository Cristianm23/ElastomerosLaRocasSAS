import { useEffect } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronDown,
  CircleHelp,
  Factory,
  FileCheck2,
  Mail,
  MessageSquareQuote,
  Settings2,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories, products, services, frequentlyAskedQuestions } from '../data/catalog';
import { companyConfig } from '../data/company';
import { paths } from '../routes/paths';

const valuePropositions = [
  {
    icon: ShieldCheck,
    title: 'Enfoque técnico',
    description: '[Contenido provisional] Propuesta de valor pendiente de validación.',
  },
  {
    icon: Settings2,
    title: 'Atención orientada a la necesidad',
    description: '[Contenido provisional] Alcance del acompañamiento pendiente de confirmar.',
  },
  {
    icon: BadgeCheck,
    title: 'Información clara',
    description: '[Contenido provisional] Compromiso comercial pendiente de validación.',
  },
];

export function HomePage() {
  useEffect(() => {
    document.title = 'Soluciones en elastómeros | Elastómeros La Roca';
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div className="site-container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">Elastómeros La Roca S.A.S.</p>
            <h1>Soluciones en elastómeros para necesidades industriales.</h1>
            <p className="home-hero__lead">
              Información de productos y servicios para empresas. El contenido técnico y
              corporativo se actualizará con la información confirmada por la organización.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--accent" to={paths.contact}>
                Solicitar información <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button--hero-secondary" to={paths.products}>
                Explorar productos
              </Link>
            </div>
            <p className="demo-note">
              <CircleHelp aria-hidden="true" size={16} />
              Sitio en construcción: algunos contenidos son provisionales.
            </p>
          </div>
          <div className="home-hero__visual" aria-label="Identificación visual provisional">
            <div className="hero-visual__grid" aria-hidden="true" />
            <div className="hero-visual__panel">
              <span className="hero-visual__label">LR / INDUSTRIAL</span>
              <Factory aria-hidden="true" size={80} strokeWidth={1.1} />
              <strong>Precisión que acompaña tus procesos</strong>
              <span className="hero-visual__line" />
              <small>Identidad visual provisional</small>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="company-title">
        <div className="site-container intro-grid">
          <div>
            <p className="eyebrow">Conócenos</p>
            <h2 id="company-title">Una base confiable para tus requerimientos.</h2>
          </div>
          <div className="section-copy">
            <p>{companyConfig.description}</p>
            <Link className="text-link" to={paths.about}>
              Conocer la empresa <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-section--muted" aria-labelledby="categories-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="Portafolio"
            title="Categorías de productos"
            description="Explora las categorías disponibles. Los nombres y descripciones mostrados son provisionales hasta recibir el catálogo confirmado."
            link={{ label: 'Ver todas las categorías', to: paths.categories }}
          />
          <div className="home-card-grid">
            {productCategories.map((category) => (
              <Link
                className="home-card category-card"
                key={category.id}
                to={paths.categoryDetail(category.slug)}
              >
                <span className="card-icon">
                  <Boxes aria-hidden="true" size={24} />
                </span>
                <span className="home-card__content">
                  <strong>{category.name}</strong>
                  <span>{category.description}</span>
                </span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="products-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="Selección"
            title="Productos destacados"
            description="Consulta una muestra inicial del catálogo. Las especificaciones se publicarán únicamente cuando sean validadas."
            link={{ label: 'Ver productos', to: paths.products }}
          />
          <div className="home-card-grid">
            {products.map((product) => (
              <Link className="home-card product-card" key={product.id} to={paths.productDetail(product.slug)}>
                <div className="product-card__visual">
                  <Wrench aria-hidden="true" size={34} />
                  <span>Producto</span>
                </div>
                <div className="home-card__content">
                  <strong>{product.name}</strong>
                  <span>{product.description}</span>
                </div>
                <span className="text-link">
                  Ver detalle <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--blue" aria-labelledby="services-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="Capacidades"
            title="Servicios para acompañar tu proceso"
            description="Conoce los servicios previstos para el portafolio. El alcance final requiere confirmación de la empresa."
            link={{ label: 'Ver servicios', to: paths.services }}
            inverse
          />
          <div className="home-card-grid">
            {services.map((service) => (
              <Link className="home-card home-card--dark" key={service.id} to={paths.serviceDetail(service.slug)}>
                <span className="card-icon card-icon--light">
                  <Wrench aria-hidden="true" size={24} />
                </span>
                <span className="home-card__content">
                  <strong>{service.name}</strong>
                  <span>{service.description}</span>
                </span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="value-title">
        <div className="site-container">
          <SectionHeading
            id="value-title"
            eyebrow="Nuestra forma de trabajar"
            title="Una propuesta de valor en construcción"
            description="Estas líneas resumen la dirección del sitio y serán ajustadas con la información corporativa oficial."
          />
          <div className="value-grid">
            {valuePropositions.map(({ icon: Icon, title, description }) => (
              <article className="value-item" key={title}>
                <Icon aria-hidden="true" size={28} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--muted" aria-labelledby="faq-title">
        <div className="site-container faq-grid">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="faq-title">Respuestas para empezar.</h2>
            <p className="section-copy">
              Las preguntas y respuestas definitivas se incorporarán cuando sean confirmadas por el equipo.
            </p>
            <Link className="text-link" to={paths.faq}>
              Ver preguntas frecuentes <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="faq-list">
            {frequentlyAskedQuestions.map((faq) => (
              <details className="faq-item" key={faq.id}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" size={18} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <div className="site-container home-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Hablemos de tu necesidad</p>
            <h2 id="cta-title">¿Buscas información para un proyecto?</h2>
            <p>Cuéntanos qué necesitas y te contactaremos por los canales que sean confirmados.</p>
          </div>
          <Link className="button button--light" to={paths.contact}>
            Solicitar cotización <MessageSquareQuote aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <div className="site-container contact-strip">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 id="contact-title">Estamos preparando nuestros canales.</h2>
          </div>
          <div className="contact-strip__details">
            <p><Mail aria-hidden="true" size={18} /> {companyConfig.contact.email}</p>
            <Link className="button button--primary" to={paths.contact}>
              Ir a contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  link,
  inverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  link?: { label: string; to: string };
  inverse?: boolean;
}) {
  return (
    <div className={`section-heading${inverse ? ' section-heading--inverse' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <div className="section-heading__copy">
        <p>{description}</p>
        {link && (
          <Link className="text-link" to={link.to}>
            {link.label} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
