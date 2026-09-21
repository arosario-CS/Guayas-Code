import type { Category } from "../types/menu";
import type { Language } from "../types/language";

interface TranslationSet {
  nav: {
    menu: string;
    order: string;
    languageLabel: string;
  };

  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    button: string;
  };

  menu: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    allSectionTitle: string;
    empty: string;
    fullMenuButton: string;
    fullMenuHint: string;
  };

  categories: Record<Category, string>;

  order: {
    eyebrow: string;
    title: string;
    description: string;
    callButton: string;
    facebookButton: string;
    hours: string;
    phone: string;
    saturday: string;
    sunday: string;
  };

  footer: {
    tagline: string;
    call: string;
    navigationLabel: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationSet> = {
  es: {
    nav: {
      menu: "Menú",
      order: "Pedir",
      languageLabel: "Idioma",
    },

    hero: {
      eyebrow: "COMIDA ECUATORIANA",
      titleLead: "El sabor de Ecuador,",
      titleAccent: "hecho en casa.",
      description:
        "Sabores tradicionales ecuatorianos preparados con cariño para compartir con familia y amigos.",
      button: "Ver el menú",
    },

    menu: {
      eyebrow: "NUESTRO MENÚ",
      title: "Sabores de Ecuador",
      description:
        "Descubre algunos de nuestros platos tradicionales preparados en casa.",
      all: "Todos",
      allSectionTitle: "Favoritos del menú",
      empty: "Estamos preparando esta parte del menú.",
      fullMenuButton: "Ver menú completo",
      fullMenuHint:
        "Consulta todos nuestros platos, acompañamientos y bebidas.",
    },

    categories: {
      "Platos Típicos": "Platos Típicos",
      Acompañamientos: "Acompañamientos",
      Bebidas: "Bebidas",
      Helados: "Helados",
    },

    order: {
      eyebrow: "¿LISTO PARA HACER TU PEDIDO?",
      title: "Comida hecha en casa, lista para compartir.",
      description:
        "Llámanos para hacer tu pedido o escríbenos por Facebook para conocer disponibilidad y opciones del día.",
      callButton: "Llamar para hacer un pedido",
      facebookButton: "Facebook",
      hours: "HORARIO",
      phone: "TELÉFONO",
      saturday: "Sábado",
      sunday: "Domingo",
    },

    footer: {
      tagline: "Sabores ecuatorianos preparados en casa con cariño.",
      call: "Llamar",
      navigationLabel: "Navegación del pie de página",
      copyright: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },

  en: {
    nav: {
      menu: "Menu",
      order: "Order",
      languageLabel: "Language",
    },

    hero: {
      eyebrow: "ECUADORIAN FOOD",
      titleLead: "The taste of Ecuador,",
      titleAccent: "made at home.",
      description:
        "Traditional Ecuadorian flavors prepared with care to share with family and friends.",
      button: "View menu",
    },

    menu: {
      eyebrow: "OUR MENU",
      title: "Flavors of Ecuador",
      description:
        "Discover some of our traditional Ecuadorian dishes prepared at home.",
      all: "All",
      allSectionTitle: "Featured Favorites",
      empty: "We're preparing this part of the menu.",
      fullMenuButton: "View Full Menu",
      fullMenuHint: "Browse all of our dishes, sides, and drinks.",
    },

    categories: {
      "Platos Típicos": "Traditional Dishes",
      Acompañamientos: "Sides",
      Bebidas: "Drinks",
      Helados: "Ice Cream",
    },

    order: {
      eyebrow: "READY TO ORDER?",
      title: "Homemade food, ready to share.",
      description:
        "Call us to place your order or message us on Facebook to ask about availability and today's options.",
      callButton: "Call to order",
      facebookButton: "Facebook",
      hours: "HOURS",
      phone: "PHONE",
      saturday: "Saturday",
      sunday: "Sunday",
    },

    footer: {
      tagline: "Ecuadorian flavors prepared at home with care.",
      call: "Call",
      navigationLabel: "Footer navigation",
      copyright: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};
