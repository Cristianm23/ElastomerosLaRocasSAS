import { useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { companyConfig } from '../data/company';
import { publicRoutes } from '../routes/routeConfig';
import { paths } from '../routes/paths';
import { ThemeControl } from '../components/ThemeControl';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="brand" to={paths.home} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            LR
          </span>
          <span>
            <strong>{companyConfig.displayName}</strong>
            <small>S.A.S.</small>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? ' primary-navigation--open' : ''}`}
          aria-label="Navegación principal"
        >
          <div className="primary-navigation__links">
            {publicRoutes.map((route) => (
              <NavLink
                key={route.path}
                className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
                end={route.path === paths.home}
                to={route.path}
                onClick={closeMenu}
              >
                {route.label}
              </NavLink>
            ))}
          </div>
          <div className="primary-navigation__actions">
            <ThemeControl />
            <Link className="button button--accent" to={paths.contact} onClick={closeMenu}>
              Solicitar información
            </Link>
          </div>
        </nav>
      </div>
      {location.pathname && <span className="sr-only">Página actual: {location.pathname}</span>}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div>
          <Link className="brand brand--footer" to={paths.home}>
            <span className="brand__mark" aria-hidden="true">
              LR
            </span>
            <span>
              <strong>{companyConfig.displayName}</strong>
              <small>S.A.S.</small>
            </span>
          </Link>
          <p>{companyConfig.description}</p>
        </div>
        <div>
          <h2 className="site-footer__title">Explorar</h2>
          <Link to={paths.products}>Productos</Link>
          <Link to={paths.services}>Servicios</Link>
          <Link to={paths.about}>Nosotros</Link>
          <Link to={paths.contact}>Contacto</Link>
        </div>
        <div>
          <h2 className="site-footer__title">Información legal</h2>
          <Link to={paths.privacy}>Política de privacidad</Link>
          <Link to={paths.terms}>Términos y condiciones</Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-container">
          <small>© {new Date().getFullYear()} {companyConfig.legalName}</small>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <Header />
      <div className="site-main" id="main-content" tabIndex={-1}>{children}</div>
      <Footer />
    </div>
  );
}
