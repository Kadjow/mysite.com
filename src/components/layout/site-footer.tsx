import { getSocialLinks } from "@/data/social-links";
import type { SiteContent } from "@/i18n";

type SiteFooterProps = {
  content: SiteContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const socialLinks = getSocialLinks(content);

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <p className="pr-2 text-sm leading-6 font-medium text-foreground">
            &copy; {year} {content.site.brand.fullName}.
          </p>

          <nav aria-label={content.footer.socialLinksAriaLabel}>
            <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 sm:gap-x-2 sm:gap-y-1">
              {socialLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label} className="flex items-center gap-x-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="hidden sm:inline">
                        &middot;
                      </span>
                    ) : null}
                    <a
                      href={link.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex min-h-11 items-center rounded-full px-3.5 py-1.5 leading-none touch-manipulation transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-0 sm:px-0 sm:py-0 sm:leading-normal"
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
