import "./Footer.css";

import { translations } from "../data/translations";

import type { Language } from "../types/language";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const copy = translations[language];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-accent" />

      <div className="footer-inner">
        <div className="footer-brand">
          <a
            href="#top"
            className="footer-logo-link"
            aria-label={copy.footer.backToTop}
          >
            <img
              src="/images/ecuador-logo.png"
              alt="Guayas Comida Ecuatoriana"
              className="footer-logo"
            />
          </a>

          <div>
            <h2>Guayas</h2>

            <p className="footer-tagline">{copy.footer.tagline}</p>
          </div>
        </div>

        <nav
          className="footer-navigation"
          aria-label={copy.footer.navigationLabel}
        >
          <a href="#menu">{copy.nav.menu}</a>

          <a href="#contact">{copy.nav.order}</a>

          <a href="tel:+17576474640">{copy.footer.call}</a>

          <a
            href="https://www.facebook.com/share/14DZb83SAW2/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Guayas. {copy.footer.copyright}
        </p>

        <a href="#top" className="footer-top-link">
          {copy.footer.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
