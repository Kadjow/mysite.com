export const locales = ["pt-BR", "en-US"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeCookieName = "portfolio-locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
