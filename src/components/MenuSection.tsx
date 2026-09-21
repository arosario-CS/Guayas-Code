import type { Language } from "../types/language";
import type { MenuItem } from "../types/menu";

import MenuCard from "./MenuCard";

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  language: Language;
}

export default function MenuSection({
  title,
  items,
  language,
}: MenuSectionProps) {
  return (
    <section className="menu-preview">
      <div className="menu-preview-heading">
        <h3>{title}</h3>
      </div>

      <div className="menu-card-grid">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} language={language} />
        ))}
      </div>
    </section>
  );
}
