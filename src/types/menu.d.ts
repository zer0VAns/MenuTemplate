export type FeaturedTag = "bestseller" | "new" | "chef-recommended" | "house-special";

export type DietTag = "vegan" | "spicy" | "gluten-free" | "lactose-free" | "vegetarian";

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  ingredients?: string[];
  allergens?: string[];
  dietTags?: DietTag[];
  featuredTags?: FeaturedTag[];
  available?: boolean; // default true si no se especifica
  calories?: number;
  relatedProductIds?: string[]; // para "recomendaciones relacionadas" en el detalle
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  products: Product[];
}

export interface BusinessHours {
  isOpenNow: boolean;
  // opcional: texto custom tipo "Abre a las 9:00"
  statusLabel?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor?: string;
  fontFamily: string;
  logoUrl?: string;
    bannerUrl?: string;
}

export interface BusinessConfig {
  businessName: string;
  businessType: "cafeteria" | "restaurante" | "hamburgueseria" | "pizzeria" | "sushi" | "pasteleria" | "heladeria" | "bar-saludable" | "bar-cocteleria" | "panaderia";
  currency: string; // ej: "ARS", "USD", "EUR"
  language: string; // ej: "es", "en"
  theme: ThemeConfig;
  hours: BusinessHours;
  enabledFilters: DietTag[]; // qué filtros mostrar según el negocio
}

export interface MenuData {
  categories: Category[];
}