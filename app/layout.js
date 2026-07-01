import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "THE OGS",
  description: "Luxury Footwear & Watches",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
