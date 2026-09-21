import { translations } from "../data/translations";

import type { Language } from "../types/language";

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const copy = translations[language];

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src="/images/ecuador-logo.png" alt="Guayas Comida Ecuatoriana" />
      </a>

      <div className="navbar-links">
        <a href="#menu" className="navbar-link">
          {copy.nav.menu}
        </a>

        <div className="language-toggle" aria-label={copy.nav.languageLabel}>
          <button
            type="button"
            className={`language-button ${language === "es" ? "active" : ""}`}
            onClick={() => onLanguageChange("es")}
            aria-pressed={language === "es"}
          >
            ES
          </button>

          <button
            type="button"
            className={`language-button ${language === "en" ? "active" : ""}`}
            onClick={() => onLanguageChange("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>

        <a href="#contact" className="navbar-order-link">
          {copy.nav.order}
        </a>
      </div>
    </nav>
  );
}
