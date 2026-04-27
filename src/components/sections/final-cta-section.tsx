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
        <div className="surface-card mesh-border overflow-hidden rounded-[2.4rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-5">
              <p className="eyebrow">Contato</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {profile.finalCtaTitle}
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
