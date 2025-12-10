import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
