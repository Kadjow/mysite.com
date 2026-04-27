import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/shared/theme-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diogo Arthur Gulhak | Produto, Front-end e Mobile",
  description:
    "Portfólio profissional de Diogo Arthur Gulhak, desenvolvedor orientado a produto com experiência em mobile, front-end, arquitetura, UI/UX, apps publicados e SaaS.",
  keywords: [
    "Diogo Arthur Gulhak",
    "portfolio",
    "Next.js",
    "mobile",
    "front-end",
    "produto digital",
    "UI UX",
    "Flutter",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${manrope.variable} ${fraunces.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
