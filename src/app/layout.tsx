import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Curso de NextJS",
  description: "Criando um blog para aprender NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
