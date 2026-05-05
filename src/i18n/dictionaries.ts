import type { Locale } from "./config";
import { enUS } from "./locales/en-US";
import { ptBR } from "./locales/pt-BR";

export const dictionaries = {
  "pt-BR": ptBR,
  "en-US": enUS,
} satisfies Record<Locale, typeof ptBR>;
