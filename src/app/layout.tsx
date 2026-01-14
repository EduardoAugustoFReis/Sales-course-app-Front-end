import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const titleFont = Poppins({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Course",
  description: "Site para criação e venda de cursos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${titleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
