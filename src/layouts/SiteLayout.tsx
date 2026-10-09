import { useState, type ReactNode } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { companyConfig } from "../data/company";
import { paths } from "../routes/paths";
import { WhatsAppButton } from "../components/WhatsAppButton";

const mainNavigation = [
  { path: paths.home, label: "Inicio" },
  { path: paths.about, label: "Nosotros" },
  { path: paths.products, label: "Productos" },
  { path: paths.services, label: "Fabricaciones especiales" },
  { path: paths.contact, label: "Contacto" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="brand" to={paths.home} onClick={closeMenu}>
          <img
            className="brand__logo"
            src="/logo-elastomeros.jpg"
            alt="Elast&#243;meros La Roca S.A.S. Dise&#241;o y fabricaci&#243;n de productos en poliuretano y caucho"
          />
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen
              ? "Cerrar men\u00fa principal"
              : "Abrir men\u00fa principal"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? " primary-navigation--open" : ""}`}
          aria-label="NavegaciÃƒÆ’Ã‚Â³n principal"
        >
          <div className="primary-navigation__links">
            {mainNavigation.map((route) => (
              <NavLink
                key={route.path}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                end={route.path === paths.home}
                to={route.path}
                onClick={closeMenu}
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      {location.pathname && (
        <span className="sr-only">P&#225;gina actual: {location.pathname}</span>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div>
          <Link className="brand brand--footer" to={paths.home}>
            <img
              className="brand__logo"
              src="/logo-elastomeros.jpg"
              alt="Elast&#243;meros La Roca S.A.S. Dise&#241;o y fabricaci&#243;n de productos en poliuretano y caucho"
            />
          </Link>
        </div>
        <div>
          <p>
            <MapPin aria-hidden="true" size={24} />
            <span>
              <strong>Carrera 69 Bis #31-02 Sur Bogot&#225;, Colombia</strong>
              Atendemos clientes en todo el pa&#237;s.
            </span>
          </p>
        </div>
        <div>
          <p>
            <Mail aria-hidden="true" size={24} />
            <span>{companyConfig.contact.email}</span>
          </p>
          <p>
            <Phone aria-hidden="true" size={24} />
            <span>{companyConfig.contact.phone}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <Header />
      <div className="site-main" id="main-content" tabIndex={-1}>
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
