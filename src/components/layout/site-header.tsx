"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircleMore, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale, SiteContent } from "@/i18n";

type SiteHeaderProps = {
  content: SiteContent;
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: content.navigation.items.home, href: "#inicio" },
    { label: content.navigation.items.about, href: "#sobre" },
    { label: content.navigation.items.experience, href: "#experiencia" },
    { label: content.navigation.items.projects, href: "#projetos" },
    { label: content.navigation.items.stack, href: "#stack" },
    { label: content.navigation.items.contact, href: "#contato" },
  ];
  const mobileMenuButtonLabel = locale === "pt-BR" ? "Abrir menu" : "Open menu";
  const mobileMenuCloseLabel =
    locale === "pt-BR" ? "Fechar menu" : "Close menu";
  const mobileNavigationLabel =
    locale === "pt-BR" ? "Navegacao principal" : "Primary navigation";

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative">
          {isMobileMenuOpen ? (
            <button
              type="button"
              aria-label={mobileMenuCloseLabel}
              className="fixed inset-0 z-10 bg-background/20 backdrop-blur-[1px] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : null}

          <div className="surface-card relative z-20 flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                DAG
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {content.site.brand.shortName}
                </p>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  {content.site.brand.subtitle}
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher
                currentLocale={locale}
                className="min-h-11 sm:min-h-0"
                buttonClassName="min-h-9 px-3 text-[0.72rem] sm:min-h-0 sm:px-2.5 sm:text-[0.68rem]"
              />
              <ThemeToggle
                ariaLabel={content.common.accessibility.toggleTheme}
                className="size-10 sm:size-8"
              />
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                className={cn(
                  "rounded-full border-border/70 bg-background/70 backdrop-blur lg:hidden",
                  isMobileMenuOpen && "bg-muted text-foreground",
                )}
                aria-label={
                  isMobileMenuOpen
                    ? mobileMenuCloseLabel
                    : mobileMenuButtonLabel
                }
                aria-controls="site-header-mobile-nav"
                aria-expanded={isMobileMenuOpen}
                onClick={() =>
                  setIsMobileMenuOpen((currentOpen) => !currentOpen)
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
              <Button
                asChild
                className="hidden rounded-full px-5 lg:inline-flex"
              >
                <a href="#contato">
                  {content.common.actions.contact}
                  <MessageCircleMore />
                </a>
              </Button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <nav
              id="site-header-mobile-nav"
              aria-label={mobileNavigationLabel}
              className="surface-card absolute inset-x-0 top-[calc(100%+0.75rem)] z-30 overflow-hidden rounded-[1.75rem] px-3 py-3 shadow-lg shadow-black/10 lg:hidden"
            >
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex min-h-11 items-center rounded-2xl px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
