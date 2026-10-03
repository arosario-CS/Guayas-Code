import { translations } from "../data/translations";

import type { Language } from "../types/language";
import type { Category } from "../types/menu";

export type FilterCategory = Category;

interface CategoryFilterProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  language: Language;
}

const categories: FilterCategory[] = [
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
          {copy.categories[category]}
        </button>
      ))}
    </nav>
  );
}
