import { Playfair_Display, Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--f-display", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], style: ["italic"], weight: ["400", "500"], variable: "--f-accent", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-mono", display: "swap" });

export const fontVars = [playfair, cormorant, inter, plex].map((f) => f.variable).join(" ");