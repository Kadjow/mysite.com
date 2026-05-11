import type { SiteContent } from "@/i18n";

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "email" | "whatsapp";
};

const socialLinkConfigs = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/dagulhak/",
    icon: "linkedin",
  },
  {
    key: "github",
    href: "https://github.com/Kadjow",
    icon: "github",
  },
  {
    key: "email",
    href: "mailto:dgulhak@gmail.com",
    icon: "email",
  },
  {
    key: "whatsapp",
    href: "https://wa.me/5545998549198",
    icon: "whatsapp",
  },
] as const satisfies ReadonlyArray<{
  key: keyof SiteContent["socialLinks"]["labels"];
  href: string;
  icon: SocialLink["icon"];
}>;

export function getSocialLinks(content: SiteContent): SocialLink[] {
  return socialLinkConfigs.map(({ key, ...config }) => ({
    ...config,
    label: content.socialLinks.labels[key],
  }));
}
