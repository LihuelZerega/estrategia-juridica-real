import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Estrategia Jurídica Real",
  description: "Asesoría experta en Civil, Mercantil, Familia y Juicios de Amparo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
