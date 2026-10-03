import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter, {
  type FilterCategory,
} from "./components/CategoryFilter";
import MenuSection from "./components/MenuSection";
import OrderSection from "./components/OrderSection";
import FullMenuModal from "./components/FullMenuModal";
import Footer from "./components/Footer";

import { menuItems } from "./data/menu";
import { translations } from "./data/translations";

import type { Language } from "./types/language";

function App() {
  const [language, setLanguage] = useState<Language>("es");

  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("Platos Típicos");

  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const copy = translations[language];

  const visibleItems = menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div id="top">
      <Navbar language={language} onLanguageChange={setLanguage} />

      <Hero language={language} />

      <main>
        <section className="menu-area" id="menu">
          <div className="menu-area-heading">
            <p className="section-eyebrow">{copy.menu.eyebrow}</p>

            <h2>{copy.menu.title}</h2>

            <p className="menu-area-description">{copy.menu.description}</p>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            language={language}
          />

          {visibleItems.length > 0 ? (
            <MenuSection
              title={copy.categories[selectedCategory]}
              items={visibleItems}
              language={language}
            />
          ) : (
            <div className="category-empty">
              <p>{copy.menu.empty}</p>
            </div>
          )}

          <div className="full-menu-cta">
            <p>{copy.menu.fullMenuHint}</p>

            <button
              type="button"
              className="full-menu-button"
              onClick={() => setIsFullMenuOpen(true)}
            >
              {copy.menu.fullMenuButton}

              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </section>

        <OrderSection language={language} />
      </main>

      <Footer language={language} />

      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        language={language}
      />
    </div>
  );
}

export default App;
