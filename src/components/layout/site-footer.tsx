import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p>{profile.footerNote}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p>{new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}
