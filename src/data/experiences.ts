import { content } from "@/i18n";

export type Experience = {
  company: string;
  role: string;
  category: string;
  icon: "atlas" | "slingui" | "gocoffee" | "marcondes";
  summary: string;
  highlights: string[];
  whyItMatters: string;
  tags: string[];
};

const experienceConfigs = [
  {
    key: "atlas",
    icon: "atlas",
  },
  {
    key: "slingui",
    icon: "slingui",
  },
  {
    key: "gocoffee",
    icon: "gocoffee",
  },
  {
    key: "marcondes",
    icon: "marcondes",
  },
] as const satisfies ReadonlyArray<{
  key: keyof typeof content.experience.items;
  icon: Experience["icon"];
}>;

export const experiences: Experience[] = experienceConfigs.map(({ key, ...config }) => ({
  ...content.experience.items[key],
  ...config,
}));
