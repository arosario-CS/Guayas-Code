import type { MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  // --------------------------------------------------
  // Platos Típicos
  // --------------------------------------------------

  {
    id: "caldo-de-salchicha",
    name: "Caldo de salchicha",
    price: 16,
    image: "/images/Caldo-de-salchicha.jpg",
    category: "Platos Típicos",
  },

  {
    id: "caldo-de-bola",
    name: "Caldo de bola",
    price: 16,
    image: "/images/Caldo-de-bola.jpg",
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
    image: "/images/Encebollado.jpg",
    category: "Platos Típicos",
  },

  {
    id: "encebollado-mixto",
    name: "Encebollado mixto",
    description: {
      es: "Sopa de pescado preparada con atún albacora y yuca, acompañada de camarones, cebolla, cilantro y jugo de limón.",
      en: "A fish soup made with Albacore fish and cassava, topped with shrimp, onions, cilantro, and lime juice.",
    },
    price: 18,
    image: "/images/Encebollado-mixto.jpg",
    category: "Platos Típicos",
  },

  {
    id: "chaulafan",
    name: "Chaulafan",
    description: {
      es: "Arroz frito ecuatoriano con pollo, camarones, cerdo, cebolla, pimientos verdes y cilantro.",
      en: "Ecuadorian fried rice mixed with chicken, shrimp, pork, onions, green peppers, and cilantro.",
    },
    price: 22,
    image: "/images/Chaulafan.jpg",
    category: "Platos Típicos",
  },

  {
    id: "bandera",
    name: "Bandera",
    description: {
      es: "Una combinación de seco de chivo, guatita y guiso de pescado, servida con arroz amarillo y maduros.",
      en: "A combination of goat stew, tripe stew, and fish stew served with yellow rice and sweet plantains.",
    },
    price: 22,
    image: "/images/Bandera.jpg",
    category: "Platos Típicos",
  },

  {
    id: "guatita",
    name: "Guatita",
    description: {
      es: "Guiso de mondongo con papas, servido con arroz blanco, maduros fritos y aguacate.",
      en: "Tripe stew with potatoes served with white rice, fried sweet plantains, and avocado.",
    },
    price: 15,
    category: "Platos Típicos",
  },

  {
    id: "seco-de-gallina",
    name: "Seco de gallina",
    description: {
      es: "Guiso de gallina servido con una porción de arroz amarillo.",
      en: "Hen stew served with a portion of yellow rice.",
    },
    price: 15,
    image: "/images/Seco-de-gallina.jpg",
    category: "Platos Típicos",
  },

  {
    id: "seco-de-chivo",
    name: "Seco de chivo",
    description: {
      es: "Guiso de chivo servido con arroz amarillo y maduros.",
      en: "Goat stew served with yellow rice and sweet plantains.",
    },
    price: 15,
    image: "/images/Seco-de-chivo.jpg",
    category: "Platos Típicos",
  },

  {
    id: "lomo-salteado",
    name: "Lomo salteado",
    price: 18,
    image: "/images/Lomo-salteado.jpg",
    category: "Platos Típicos",
  },

  {
    id: "yapingacho",
    name: "Yapingacho",
    description: {
      es: "Tortillas gruesas de papa rellenas de queso y doradas en la sartén hasta quedar crujientes, servidas con ensalada, salchichas ecuatorianas, huevo frito y salsa de maní.",
      en: "Thick potato patties stuffed with cheese and pan-fried until crispy, served alongside salad, Ecuadorian sausages, a fried egg, and peanut sauce.",
    },
    price: 18,
    image: "/images/Yapingacho.jpg",
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
    image: "/images/Ceviche-de-camaron.jpg",
    category: "Platos Típicos",
  },

  {
    id: "tortillas-de-camaron",
    name: "Tortillas de camarón",
    description: {
      es: "Arroz y menestra con tortilla de camarón y maduros.",
      en: "Rice and beans with shrimp fritter and sweet plantains.",
    },
    price: 20,
    image: "/images/Tortillas-de-camaron.jpg",
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
    image: "/images/Bolon-de-queso.jpg",
    category: "Platos Típicos",
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
      en: "Mashed plantains mixed with pork.",
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
      en: "Mashed plantains mixed with cheese and pork.",
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
    image: "/images/Humita.jpg",
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
    image: "/images/Carne-asada.jpg",
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
    image: "/images/Pescado-frito.jpg",
    category: "Platos Típicos",
  },

  {
    id: "sango-de-pescado",
    name: "Sango de pescado",
    description: {
      es: "Puré de plátano con atún albacora, servido con arroz blanco, maduro y aguacate.",
      en: "Plantain puree with Albacore fish served with white rice, sweet plantain, and avocado.",
    },
    price: 15,
    image: "/images/sango-de-pescado.jpg",
    category: "Platos Típicos",
  },

  {
    id: "sango-de-camaron",
    name: "Sango de camarón",
    description: {
      es: "Puré de plátano con camarones tiernos, servido con arroz blanco.",
      en: "Plantain puree with tender shrimp served with white rice.",
    },
    price: 17,
    image: "/images/Sango-de-camaron.jpg",
    category: "Platos Típicos",
  },

  {
    id: "sango-mixto",
    name: "Sango mixto",
    description: {
      es: "Puré de plátano con atún albacora y camarón, servido con arroz blanco.",
      en: "Plantain puree with Albacore fish and shrimp served with white rice.",
    },
    price: 20,
    category: "Platos Típicos",
  },

  {
    id: "encocado-de-pescado",
    name: "Encocado de pescado",
    description: {
      es: "Atún albacora cocinado en una salsa cremosa de leche de coco, servido con arroz blanco, maduro y aguacate.",
      en: "Albacore fish simmered in a rich coconut milk sauce served with white rice, sweet plantain, and avocado.",
    },
    price: 16,
    category: "Platos Típicos",
  },

  {
    id: "encocado-de-camaron",
    name: "Encocado de camaron",
    description: {
      es: "Camarones cocinados en una salsa cremosa de leche de coco, servidos con arroz blanco, maduro y aguacate.",
      en: "Shrimp simmered in a rich coconut milk sauce served with white rice, sweet plantain, and avocado.",
    },
    price: 18,
    category: "Platos Típicos",
  },

  {
    id: "encocado-mixto",
    name: "Encocado mixto",
    description: {
      es: "Atún albacora y camarón cocinados en una salsa cremosa de leche de coco, servidos con arroz blanco, maduro y aguacate.",
      en: "Albacore fish and shrimp simmered in a rich coconut milk sauce served with white rice, sweet plantain, and avocado.",
    },
    price: 22,
    image: "/images/Encocado-Mixto.jpg",
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
    image: "/images/patacones.jpg",
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
    image: "/images/maduros.jpg",
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
    price: 2.5,
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
    image: "/images/Quaker.jpg",
    category: "Bebidas",
  },

  // --------------------------------------------------
  // Helados
  // --------------------------------------------------

  {
    id: "helados",
    name: "Helados",
    description: {
      es: "Coco, chocolate, piña y come y bebe.",
      en: "Coconut, chocolate, pineapple, and come y bebe.",
    },
    price: 4,
    image: "/images/Helados.png",
    category: "Helados",
  },
];
