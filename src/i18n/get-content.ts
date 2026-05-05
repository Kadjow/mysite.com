import { cookies } from "next/headers";

import { defaultLocale, isLocale, localeCookieName, type Locale } from "./config";
import { dictionaries } from "./dictionaries";

async function resolveLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  return isLocale(cookieLocale) ? cookieLocale : defaultLocale;
}

export async function getCurrentLocale() {
  return resolveLocale();
}

export async function getCurrentContent() {
  const locale = await resolveLocale();

  return {
    locale,
    content: dictionaries[locale],
  };
}
