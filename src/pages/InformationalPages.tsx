import { ArrowLeft, FileCheck2, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { frequentlyAskedQuestions } from '../data/catalog';
import { aboutContent, privacyContent, termsContent, type InformationalSection } from '../data/informational';
import { paths } from '../routes/paths';

export function AboutPage() {
  return <InformationalPage eyebrow="La empresa" title="Nosotros" intro="Experiencia, familia y fortaleza al servicio de la industria." sections={aboutContent} icon={<ShieldCheck aria-hidden="true" size={30} />} />;
}

export function PrivacyPage() {
  return <InformationalPage eyebrow="Información legal" title="Política de privacidad" intro="Documento provisional pendiente de revisión legal." sections={privacyContent} icon={<FileCheck2 aria-hidden="true" size={30} />} />;
}

export function TermsPage() {
  return <InformationalPage eyebrow="Información legal" title="Términos y condiciones" intro="Documento provisional pendiente de revisión legal." sections={termsContent} icon={<FileCheck2 aria-hidden="true" size={30} />} />;
}

export function FaqPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-header"><div className="site-container"><p className="eyebrow">Ayuda</p><h1>Preguntas frecuentes</h1><p>Respuestas provisionales para orientar la navegación del sitio.</p></div></section>
      <section className="home-section"><div className="site-container faq-page-list">
        {frequentlyAskedQuestions.map((faq) => <details className="faq-item" key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div></section>
    </main>
  );
}

export function NotFoundPage() {
  return <main className="page-placeholder site-container"><p className="eyebrow">Error 404</p><h1>Página no encontrada</h1><p>La dirección solicitada no existe o fue movida.</p><div className="not-found-actions"><Link className="button button--primary" to={paths.home}>Ir al inicio</Link><Link className="button button--secondary" to={paths.contact}>Contactar</Link></div></main>;
}

function InformationalPage({ eyebrow, title, intro, sections, icon }: { eyebrow: string; title: string; intro: string; sections: InformationalSection[]; icon: ReactNode }) {
  return (
    <main className="catalog-page">
      <section className="catalog-header"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>
      <section className="home-section"><div className="site-container informational-content"><div className="informational-icon">{icon}</div>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<Link className="button button--secondary" to={paths.home}><ArrowLeft size={17} /> Volver al inicio</Link></div></section>
    </main>
  );
}
