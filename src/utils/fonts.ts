import { Montserrat, Krona_One, Goldman } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["Arial", "sans-serif"],
  display: "swap",
  variable: "--font-anton",
});

export const goldman = Goldman({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-goldman",
});

export const krona = Krona_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-krona",
});
