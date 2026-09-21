import { translations } from "../data/translations";

import type { Language } from "../types/language";
import type { Category } from "../types/menu";

export type FilterCategory = "all" | Category;

interface CategoryFilterProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  language: Language;
}

const categories: FilterCategory[] = [
  "all",
  "Platos Típicos",
  "Acompañamientos",
  "Bebidas",
  "Helados",
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  language,
}: CategoryFilterProps) {
  const copy = translations[language];

  const getLabel = (category: FilterCategory) => {
    if (category === "all") {
      return copy.menu.all;
    }

    return copy.categories[category];
  };

  const navigationLabel =
    language === "es" ? "Categorías del menú" : "Menu categories";

  return (
    <nav className="category-filter" aria-label={navigationLabel}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
          aria-pressed={selectedCategory === category}
        >
          {getLabel(category)}
        </button>
      ))}
    </nav>
  );
}
