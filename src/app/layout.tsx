import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import App from "./app";
import Image from "next/image";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
        <Image className="background-image" width={2048} height={1365} src="/images/hero.webp" alt="" />
        <div className="background-layer"></div>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
