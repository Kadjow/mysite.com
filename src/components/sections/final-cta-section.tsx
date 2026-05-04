import {
  FolderGit2,
  Link2,
  Mail,
  MessageCircleMore,
  type LucideIcon,
} from "lucide-react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { Reveal } from "@/components/shared/reveal";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

const iconMap: Record<(typeof socialLinks)[number]["icon"], LucideIcon> = {
  github: FolderGit2,
  linkedin: Link2,
  email: Mail,
  whatsapp: MessageCircleMore,
};

export function FinalCtaSection() {
  return (
    <SectionWrapper id="contato" className="pb-20 sm:pb-24">
      <Reveal>
        <div className="group surface-card mesh-border relative overflow-hidden rounded-[2.4rem] border border-transparent px-6 py-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_28px_80px_-40px_rgba(8,145,178,0.5)] dark:hover:border-cyan-300/30 dark:hover:shadow-[0_32px_90px_-42px_rgba(34,211,238,0.35)] sm:px-8 sm:py-10 lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-x-8 -top-24 h-48 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/12 dark:bg-cyan-300/0 dark:group-hover:bg-cyan-300/12" />
            <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-teal-400/0 blur-3xl transition-all duration-500 group-hover:bg-teal-400/10 dark:bg-teal-300/0 dark:group-hover:bg-teal-300/10" />
            <div className="absolute inset-0 bg-linear-to-br from-cyan-400/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-cyan-300/5" />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-5">
              <p className="eyebrow">Contato</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground transition-all duration-500 group-hover:translate-x-1 sm:text-4xl">
                <span className="bg-linear-to-r from-foreground via-foreground to-cyan-700 bg-clip-text transition-all duration-500 group-hover:text-transparent dark:to-cyan-200">
                  {profile.finalCtaTitle}
                </span>
              </h2>
              <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                {profile.finalCtaText}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <ExternalLinkButton
                    key={link.label}
                    href={link.href}
                    variant={link.label === "LinkedIn" ? "default" : "outline"}
                    className={
                      link.label === "LinkedIn"
                        ? "transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:brightness-105 group-hover:shadow-[0_18px_32px_-20px_rgba(8,145,178,0.55)]"
                        : "transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-cyan-400/30 group-hover:bg-background/90 group-hover:shadow-[0_18px_32px_-22px_rgba(8,145,178,0.4)] dark:group-hover:border-cyan-300/25 dark:group-hover:bg-background/60"
                    }
                  >
                    {link.label}
                    <Icon />
                  </ExternalLinkButton>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
