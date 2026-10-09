import { useEffect } from 'react';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Cog,
  FileText,
  Gauge,
  MessageCircle,
  Settings,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig, whatsappContacts } from '../data/company';
import { paths } from '../routes/paths';

const productCards = [
  {
    title: 'Rodillos industriales',
    description: 'Fabricación y recubrimiento de rodillos para diferentes aplicaciones industriales.',
    to: paths.products,
    variant: 'rollers',
  },
  {
    title: 'Piñones en poliuretano',
    description: 'Piñones, engranajes y ruedas de alto desempeño para transmisión.',
    to: paths.products,
    variant: 'gears',
  },
  {
    title: 'Barras de poliuretano',
    description: 'Barras, placas y perfiles en diferentes durezas y dimensiones.',
    to: paths.products,
    variant: 'bars',
  },
  {
    title: 'Fabricaciones especiales',
    description: 'Piezas especiales sobre plano o muestra para requerimientos específicos.',
    to: paths.services,
    variant: 'parts',
  },
];

export function HomePage() {
  useEffect(() => {
    document.title = 'Soluciones industriales en poliuretano y caucho | Elastómeros La Roca';
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div className="site-container home-hero__inner">
          <div className="home-hero__content">
            <h1>Soluciones industriales en poliuretano y caucho</h1>
            <p className="home-hero__lead">
              Fabricación de piezas especiales, rodillos industriales, recubrimientos y
              componentes técnicos sobre plano o muestra.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--accent" to={paths.contact}>
                <FileText aria-hidden="true" size={22} />
                Solicitar cotización
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button--hero-secondary" to={paths.products}>
                <BookOpen aria-hidden="true" size={22} />
                Ver catálogo
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <div className="hero-benefits" aria-label="Beneficios">
              <span><Cog aria-hidden="true" size={34} /> Alta resistencia y durabilidad</span>
              <span><ShieldCheck aria-hidden="true" size={34} /> Soluciones a la medida</span>
              <span><Settings aria-hidden="true" size={34} /> Calidad industrial</span>
              <span><Truck aria-hidden="true" size={34} /> Atención en toda Colombia</span>
            </div>
          </div>
          <div className="industrial-scene" aria-hidden="true">
            <span className="roller roller--large" />
            <span className="roller roller--small" />
            <span className="roller roller--mini" />
            <span className="poly-gear poly-gear--yellow" />
            <span className="poly-gear poly-gear--dark" />
            <span className="block block--yellow" />
            <span className="block block--orange" />
            <span className="ring ring--front" />
          </div>
        </div>
      </section>

      <section className="products-showcase" aria-labelledby="products-title">
        <div className="site-container">
          <p className="eyebrow">Nuestros productos</p>
          <h2 id="products-title">Soluciones en poliuretano y caucho para la industria</h2>
          <div className="product-showcase-grid">
            {productCards.map((product) => (
              <Link className="showcase-card" to={product.to} key={product.title}>
                <ProductIllustration variant={product.variant} />
                <span className="showcase-card__body">
                  <strong>{product.title}</strong>
                  <span>{product.description}</span>
                </span>
                <span className="showcase-card__arrow"><ArrowRight aria-hidden="true" size={24} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="special-quote" aria-labelledby="special-title">
        <div className="site-container special-quote__inner">
          <div>
            <h2 id="special-title">¿Necesitas una pieza especial?</h2>
            <p>Envíanos tu plano, muestra o requerimiento técnico y nuestro equipo te asesorará para desarrollar la mejor solución.</p>
          </div>
          <div className="special-quote__actions">
            <div className="whatsapp-pair">
              {whatsappContacts.map((contact) => (
                <a className="whatsapp-cta" href={`https://wa.me/${contact.number}`} target="_blank" rel="noreferrer" key={contact.number}>
                  <MessageCircle aria-hidden="true" size={30} />
                  {contact.label}
                </a>
              ))}
            </div>
            <small>Atención rápida por WhatsApp</small>
          </div>
        </div>
      </section>

      <section className="home-location" aria-labelledby="location-title">
        <div className="site-container home-location__grid">
          <div>
            <p className="eyebrow">Ubicación</p>
            <h2 id="location-title">Encuéntranos en Bogotá</h2>
            <p>Consulta nuestra ubicación en el mapa y abre Google Maps para obtener indicaciones.</p>
            <a className="button button--secondary" href={companyConfig.contact.locationUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="home-location__map">
            <iframe
              title="Ubicación de Elastómeros La Roca S.A.S. en Google Maps"
              src={companyConfig.contact.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductIllustration({ variant }: { variant: string }) {
  return (
    <div className={`product-illustration product-illustration--${variant}`} aria-hidden="true">
      {variant === 'rollers' && (
        <>
          <span className="mini-roller mini-roller--one" />
          <span className="mini-roller mini-roller--two" />
          <span className="mini-roller mini-roller--three" />
        </>
      )}
      {variant === 'gears' && (
        <>
          <Cog size={78} />
          <Cog size={66} />
          <Cog size={44} />
        </>
      )}
      {variant === 'bars' && (
        <>
          <span className="bar bar--yellow" />
          <span className="bar bar--orange" />
          <span className="bar bar--dark" />
        </>
      )}
      {variant === 'parts' && (
        <>
          <span className="part part--block" />
          <span className="part part--ring" />
          <span className="part part--cone" />
          <Gauge size={54} />
          <Zap size={38} />
          <ClipboardList size={34} />
        </>
      )}
    </div>
  );
}
