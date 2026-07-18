import type { BusinessConfig } from "../types/menu";

export const config: BusinessConfig = {
  businessName: "La Parrilla del Sur",
  businessType: "restaurante",
  currency: "ARS",
  language: "es",
  theme: {
    primaryColor: "#7A1E1E",
    secondaryColor: "#F4EDE4",
    fontFamily: "Playfair Display",
    logoUrl: "/images/logo.png",
    bannerUrl: "/images/banner.jpg",
  },
  hours: {
    isOpenNow: true,
    statusLabel: "Abierto hasta las 00:00",
  },
  enabledFilters: ["vegan", "vegetarian", "gluten-free", "spicy"],
};