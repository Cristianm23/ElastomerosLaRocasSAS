import { Mail, MessageSquareQuote } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { formServiceConfig } from '../data/forms';
import { companyConfig } from '../data/company';
import { paths } from '../routes/paths';
import { Link } from 'react-router-dom';

export function ContactPage() {
  return <main className="catalog-page">
    <section className="catalog-header"><div className="site-container"><p className="eyebrow">Contacto</p><h1>Conversemos sobre tu necesidad</h1><p>Usa el formulario adecuado para solicitar información o cotización.</p></div></section>
    <section className="home-section"><div className="site-container contact-page-grid">
      <div className="contact-page__aside">
        <MessageSquareQuote aria-hidden="true" size={34} />
        <h2>Canales de atención</h2>
        <p>Los datos de contacto y el proveedor de formularios están pendientes de confirmación.</p>
        <p><Mail size={17} /> {companyConfig.contact.email}</p>
        <Link className="text-link" to={paths.home}>Volver al inicio</Link>
      </div>
      <ContactForm kind="contact" />
    </div></section>
    <section className="home-section home-section--muted"><div className="site-container"><ContactForm kind="quote" /><p className="content-notice">Proveedor actual: {formServiceConfig.providerName}. La confirmación solo aparecerá después de una respuesta exitosa del proveedor.</p></div></section>
  </main>;
}
