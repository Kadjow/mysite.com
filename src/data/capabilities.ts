import { content } from "@/i18n";

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
  key: keyof typeof content.capabilities.items;
  icon: Capability["icon"];
}>;

export const capabilities: Capability[] = capabilityConfigs.map(({ key, ...config }) => ({
  ...content.capabilities.items[key],
  ...config,
}));
