import { socialLinks } from "@/data/social-links";
import { content } from "@/i18n";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-foreground">
            &copy; {year} {content.site.brand.fullName}.
          </p>

          <nav aria-label={content.footer.socialLinksAriaLabel}>
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {socialLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label} className="flex items-center gap-x-2">
                    {index > 0 ? <span aria-hidden="true">·</span> : null}
                    <a
                      href={link.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
