export const COMPANY = {
  name: "NovaNest Software e.U. (Demo)",
  brand: "NovaNest",
  location: "Wien, Österreich (Demo)",
  email: "support@example.com"
};

export const PRODUCTS = [
  {
    id: "p1",
    slug: "novanest-pro",
    name: "NovaNest Pro",
    price: 49.00,
    billing: "Einmalzahlung (Demo)",
    short: "Team-Dashboard, Aufgaben, Export – für kleine Teams.",
    audience: "KMU, Projektteams, Vereine",
    features: [
      "Aufgaben & Boards",
      "Team-Rollen (Demo)",
      "PDF/CSV-Export",
      "Offline-Notizen (Demo)"
    ],
    media: {
      img: "../assets/img/product-pro.svg",
      imgRoot: "./assets/img/product-pro.svg",
      alt: "Illustration: Dashboard von NovaNest Pro (Demo)"
    }
  },
  {
    id: "p2",
    slug: "novanest-lite",
    name: "NovaNest Lite",
    price: 9.00,
    billing: "Einmalzahlung (Demo)",
    short: "Fokusmodus & To-do – für Einzelpersonen.",
    audience: "Studierende, Freelancer",
    features: [
      "Fokus-Timer (Demo)",
      "Einfache To-dos",
      "Export als Text (Demo)"
    ],
    media: {
      img: "../assets/img/product-lite.svg",
      imgRoot: "./assets/img/product-lite.svg",
      alt: "Illustration: NovaNest Lite (Demo)"
    }
  }
];

export function findProductById(id){ return PRODUCTS.find(p => p.id === id); }
export function findProductBySlug(slug){ return PRODUCTS.find(p => p.slug === slug); }
