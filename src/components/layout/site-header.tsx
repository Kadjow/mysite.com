import { Menu, MessageCircleMore } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale, SiteContent } from "@/i18n";

type SiteHeaderProps = {
  content: SiteContent;
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  const navItems = [
    { label: content.navigation.items.home, href: "#inicio" },
    { label: content.navigation.items.about, href: "#sobre" },
    { label: content.navigation.items.experience, href: "#experiencia" },
    { label: content.navigation.items.projects, href: "#projetos" },
    { label: content.navigation.items.stack, href: "#stack" },
    { label: content.navigation.items.contact, href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="surface-card flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
              DAG
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">
                {content.site.brand.shortName}
              </p>
              <p className="text-xs text-muted-foreground">
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

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle ariaLabel={content.common.accessibility.toggleTheme} />
            <Button asChild className="rounded-full px-5">
              <a href="#contato">
                {content.common.actions.contact}
                <MessageCircleMore />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle ariaLabel={content.common.accessibility.toggleTheme} />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/70 bg-background/70"
                  aria-label={content.common.accessibility.openMenu}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] border-border bg-background/96 p-0 sm:max-w-sm"
              >
                <SheetHeader className="border-b border-border/70 pb-5">
                  <SheetTitle>{content.site.brand.shortName}</SheetTitle>
                  <SheetDescription>
                    {content.navigation.mobileDescription}
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4 py-5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button asChild className="mt-4 rounded-full">
                    <a href="#contato">
                      {content.common.actions.contact}
                      <MessageCircleMore />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
