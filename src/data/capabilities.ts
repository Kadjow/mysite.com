import type { SiteContent } from "@/i18n";

export type Capability = {
  title: string;
  description: string;
  items: string[];
  icon: "mobile" | "frontend" | "architecture" | "product";
};

const capabilityConfigs = [
  {
    key: "mobileEngineering",
    icon: "mobile",
  },
  {
    key: "frontEndSaas",
    icon: "frontend",
  },
  {
    key: "architectureQuality",
    icon: "architecture",
  },
  {
    key: "productBusiness",
    icon: "product",
  },
] as const satisfies ReadonlyArray<{
  key: keyof SiteContent["capabilities"]["items"];
  icon: Capability["icon"];
}>;

export function getCapabilities(content: SiteContent): Capability[] {
  return capabilityConfigs.map(({ key, ...config }) => ({
    ...content.capabilities.items[key],
    ...config,
  }));
}
