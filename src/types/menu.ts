import type { Language } from "./language";

export type Category =
  | "Platos Típicos"
  | "Acompañamientos"
  | "Bebidas"
  | "Helados";

export interface MenuOption {
  label: Record<Language, string>;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: Partial<Record<Language, string>>;
  price?: number;
  image?: string;
  category: Category;
  featured?: boolean;
  options?: MenuOption[];
}
