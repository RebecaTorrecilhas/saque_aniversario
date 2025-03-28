import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  adjustFontFallback: false,
  weight: ['400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
  title: "Saque de Aniversário",
  description: "Saque de Aniversário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable}`}>
        <img className="background-image" src="/images/hero.webp" alt="" />
        <div className="background-layer"></div>
        {children}
      </body>
    </html>
  );
}
