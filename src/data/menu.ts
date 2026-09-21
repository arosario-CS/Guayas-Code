import type { MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  // --------------------------------------------------
  // Platos Típicos
  // --------------------------------------------------

  {
    id: "caldo-de-salchicha",
    name: "Caldo de salchicha",
    price: 16,
    category: "Platos Típicos",
  },

  {
    id: "caldo-de-bola",
    name: "Caldo de bola",
    price: 16,
    category: "Platos Típicos",
  },

  {
    id: "encebollado",
    name: "Encebollado",
    description: {
      es: "Caldo de pescado preparado con atún albacora y yuca, servido con cebolla, cilantro y jugo de limón.",
      en: "A fish stew made with Albacore fish and cassava, topped with onions, cilantro, and lime juice.",
    },
    price: 15,
    image: "/images/encen.jpg",
    category: "Platos Típicos",
    featured: true,
  },

  {
    id: "encebollado-mixto",
    name: "Encebollado mixto",
    description: {
      es: "Sopa de pescado preparada con atún albacora y yuca, acompañada de camarones, cebolla, cilantro y jugo de limón.",
      en: "A fish soup made with Albacore fish and cassava, topped with shrimps, onions, cilantro, and lime juice.",
    },
    price: 18,
    image: "/images/mixto.jpg",
    category: "Platos Típicos",
    featured: true,
  },

  {
    id: "chaulafan",
    name: "Chaulafan",
    description: {
      es: "Arroz frito ecuatoriano con pollo, camarones, cerdo, cebolla, pimientos verdes y cilantro.",
      en: "Ecuadorian fried rice, mixed with chicken, shrimps, pork, onions, green peppers, and cilantro.",
    },
    price: 22,
    category: "Platos Típicos",
    featured: true,
  },

  {
    id: "bandera",
    name: "Bandera",
    description: {
      es: "Una combinación de seco de chivo, guatita y guiso de pescado, servida con arroz amarillo y maduros.",
      en: "A combination of Goat stew, Tripe stew, and Fish stew served alongside a portion of yellow rice and sweet plantains.",
    },
    price: 22,
    category: "Platos Típicos",
  },

  {
    id: "guatita",
    name: "Guatita",
    description: {
      es: "Guiso de mondongo con papas, servido con arroz blanco, maduros fritos y aguacate.",
      en: "Tripe stew with potatoes served alongside a portion of white rice, fried sweet plantains, and avocado.",
    },
    price: 15,
    category: "Platos Típicos",
  },

  {
    id: "seco-de-gallina",
    name: "Seco de gallina",
    description: {
      es: "Guiso de gallina servido con una porción de arroz amarillo.",
      en: "Hen stew served alongside a portion of yellow rice.",
    },
    price: 15,
    category: "Platos Típicos",
  },

  {
    id: "seco-de-chivo",
    name: "Seco de chivo",
    description: {
      es: "Guiso de chivo servido con arroz amarillo y maduros.",
      en: "Goat stew served alongside a portion of yellow rice and sweet plantains.",
    },
    price: 15,
    category: "Platos Típicos",
  },

  {
    id: "lomo-salteado",
    name: "Lomo salteado",
    price: 18,
    category: "Platos Típicos",
  },

  {
    id: "yapingacho",
    name: "Yapingacho",
    price: 18,
    category: "Platos Típicos",
  },

  {
    id: "ceviche-de-camaron",
    name: "Ceviche de camarón",
    description: {
      es: "Ceviche de camarón servido con chifles.",
      en: "Shrimp ceviche served with fried plantain chips.",
    },
    price: 20,
    image: "/images/ceviche-de-camaron.jpeg",
    category: "Platos Típicos",
    featured: true,
  },

  {
    id: "tortillas-de-camaron",
    name: "Tortillas de camarón",
    description: {
      es: "Arroz y menestra con tortilla de camarón y maduros.",
      en: "Rice and beans with shrimp fritter, and sweet plantains.",
    },
    price: 20,
    category: "Platos Típicos",
  },

  {
    id: "bolon-de-queso",
    name: "Bolon de queso",
    description: {
      es: "Plátano majado mezclado con queso.",
      en: "Mashed plantains mixed with cheese.",
    },
    price: 8,
    category: "Platos Típicos",
    featured: true,
    options: [
      {
        label: {
          es: "Con huevo y café",
          en: "With egg and coffee",
        },
        price: 12,
      },
    ],
  },

  {
    id: "bolon-de-chicharron",
    name: "Bolon de chicharron",
    description: {
      es: "Plátano majado mezclado con chicharrón.",
      en: "Mashed plantains mixed with pork grind.",
    },
    price: 10,
    category: "Platos Típicos",
    options: [
      {
        label: {
          es: "Con huevo y café",
          en: "With egg and coffee",
        },
        price: 14,
      },
    ],
  },

  {
    id: "bolon-mixto",
    name: "Bolon mixto",
    description: {
      es: "Plátano majado mezclado con queso y chicharrón.",
      en: "Mashed plantains mixed with cheese and pork grind.",
    },
    price: 12,
    category: "Platos Típicos",
    options: [
      {
        label: {
          es: "Con huevo y café",
          en: "With egg and coffee",
        },
        price: 16,
      },
    ],
  },

  {
    id: "salchipapa",
    name: "Salchipapa",
    price: 9,
    category: "Platos Típicos",
  },

  {
    id: "humita",
    name: "Humita",
    description: {
      es: "Preparación de maíz rellena de queso y envuelta en hoja de maíz.",
      en: "Corn dish filled with cheese and wrapped in corn husk.",
    },
    price: 7,
    category: "Platos Típicos",
  },

  {
    id: "carne-asada",
    name: "Carne asada",
    description: {
      es: "Arroz y menestra con carne asada, patacones y aguacate.",
      en: "Rice and beans with steak, fried green plantains, and avocado.",
    },
    price: 20,
    category: "Platos Típicos",
  },

  {
    id: "pescado-frito",
    name: "Pescado frito",
    description: {
      es: "Arroz y menestra con pescado frito, patacones y aguacate.",
      en: "Rice and beans with fried fish, fried green plantains, and avocado.",
    },
    price: 20,
    category: "Platos Típicos",
  },

  {
    id: "sango-de-pescado",
    name: "Sango de pescado",
    description: {
      es: "Puré de plátano con atún albacora, servido con arroz blanco, maduro y aguacate.",
      en: "Plantain puree with Albacore fish served alongside white rice, sweet plantain, and avocado.",
    },
    price: 15,
    category: "Platos Típicos",
  },

  {
    id: "sango-de-camaron",
    name: "Sango de camarón",
    description: {
      es: "Puré de plátano con camarones tiernos, servido con arroz blanco.",
      en: "Plantain puree with succulent tender shrimps and served alongside white rice.",
    },
    price: 17,
    category: "Platos Típicos",
  },

  {
    id: "sango-mixto",
    name: "Sango mixto",
    description: {
      es: "Puré de plátano con atún albacora y camarón, servido con arroz blanco.",
      en: "Plantain puree with Albacore fish and shrimp served alongside white rice.",
    },
    price: 20,
    category: "Platos Típicos",
  },

  {
    id: "encocado-de-pescado",
    name: "Encocado de pescado",
    description: {
      es: "Atún albacora cocinado en una salsa cremosa de leche de coco, servido con arroz blanco, maduro y aguacate.",
      en: "Albacore fish simmered in a rich, creamy coconut milk sauce served alongside white rice, sweet plantain, and avocado.",
    },
    price: 16,
    category: "Platos Típicos",
  },

  {
    id: "encocado-de-camaron",
    name: "Encocado de camaron",
    description: {
      es: "Camarones cocinados en una salsa cremosa de leche de coco, servidos con arroz blanco, maduro y aguacate.",
      en: "Succulent shrimp simmered in a rich, creamy coconut milk sauce served alongside white rice, sweet plantain, and avocado.",
    },
    price: 18,
    category: "Platos Típicos",
  },

  {
    id: "encocado-mixto",
    name: "Encocado mixto",
    description: {
      es: "Atún albacora y camarón cocinados en una salsa cremosa de leche de coco, servidos con arroz blanco, maduro y aguacate.",
      en: "Albacore fish and succulent shrimp simmered in a rich, creamy coconut milk sauce served alongside white rice, sweet plantain, and avocado.",
    },
    price: 22,
    category: "Platos Típicos",
  },

  // --------------------------------------------------
  // Acompañamientos
  // --------------------------------------------------

  {
    id: "patacones",
    name: "Patacones",
    description: {
      es: "Plátanos verdes fritos.",
      en: "Fried green plantains.",
    },
    price: 8,
    category: "Acompañamientos",
  },

  {
    id: "maduros",
    name: "Maduros",
    description: {
      es: "Plátanos maduros fritos.",
      en: "Fried sweet plantains.",
    },
    price: 8,
    category: "Acompañamientos",
  },

  {
    id: "arroz",
    name: "Arroz",
    description: {
      es: "Arroz blanco o amarillo.",
      en: "White or yellow rice.",
    },
    price: 4,
    category: "Acompañamientos",
  },

  {
    id: "chifles",
    name: "Chifles",
    description: {
      es: "Chips de plátano fritos.",
      en: "Fried plantain chips.",
    },
    price: 2,
    category: "Acompañamientos",
  },

  // --------------------------------------------------
  // Bebidas
  // --------------------------------------------------

  {
    id: "soft-drinks",
    name: "Coke · Sprite · Fanta · Water · Tropical · Manzana · Inka",
    category: "Bebidas",
  },

  {
    id: "quaker",
    name: "Quaker",
    description: {
      es: "Bebida afrutada de avena, 32 oz.",
      en: "Fruity oatmeal drink, 32 oz.",
    },
    price: 7,
    category: "Bebidas",
    featured: true,
  },

  // --------------------------------------------------
  // Helados
  // --------------------------------------------------

  {
    id: "helados",
    name: "Helados",
    description: {
      es: "Coco, chocolate, pina y come y bebe.",
      en: "Coconut, chocolate, pineapple, and come y bebe.",
    },
    price: 4,
    category: "Helados",
    featured: true,
  },
];
