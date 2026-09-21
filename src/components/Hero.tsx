import { translations } from "../data/translations";

import type { Language } from "../types/language";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const copy = translations[language];

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">{copy.hero.eyebrow}</p>

          <h1>
            {copy.hero.titleLead}
            <span> {copy.hero.titleAccent}</span>
          </h1>

          <p className="hero-description">{copy.hero.description}</p>

          <a href="#menu" className="hero-button">
            {copy.hero.button}
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-brand" aria-hidden="true">
          <div className="hero-logo-ring">
            <img src="/images/ecuador-logo.png" alt="" className="hero-logo" />
          </div>

          <div className="hero-accent hero-accent-yellow" />
          <div className="hero-accent hero-accent-red" />
        </div>
      </div>
    </section>
  );
}
