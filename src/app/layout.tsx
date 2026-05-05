import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { getCurrentContent, getCurrentLocale } from "@/i18n";

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

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getCurrentContent();

  return {
    title: content.site.metadata.title,
    description: content.site.metadata.description,
    keywords: content.site.metadata.keywords,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
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
