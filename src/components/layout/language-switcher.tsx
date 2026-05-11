"use client";

import { useFormStatus } from "react-dom";

import type { Locale } from "@/i18n/config";
import { setLocaleCookie } from "@/i18n/set-locale";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  className?: string;
  buttonClassName?: string;
};

const localeLabels: Record<Locale, string> = {
  "pt-BR": "PT",
  "en-US": "EN",
};

type LanguageOptionButtonProps = {
  currentLocale: Locale;
  locale: Locale;
  className?: string;
};

function LanguageOptionButton({
  currentLocale,
  locale,
  className,
}: LanguageOptionButtonProps) {
  const { pending } = useFormStatus();
  const isActive = currentLocale === locale;

  return (
    <button
      type="submit"
      aria-pressed={isActive}
      aria-label={locale}
      disabled={pending}
      className={cn(
        "touch-manipulation rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {localeLabels[locale]}
    </button>
  );
}

export function LanguageSwitcher({
  currentLocale,
  className,
  buttonClassName,
}: LanguageSwitcherProps) {
  const ariaLabel =
    currentLocale === "pt-BR" ? "Selecionar idioma" : "Select language";

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-background/70 p-1 backdrop-blur",
        className,
      )}
      role="group"
    >
      {(["pt-BR", "en-US"] as const).map((locale) => {
        const action = setLocaleCookie.bind(null, locale);

        return (
          <form key={locale} action={action} className="contents">
            <LanguageOptionButton
              currentLocale={currentLocale}
              locale={locale}
              className={buttonClassName}
            />
          </form>
        );
      })}
    </div>
  );
}
