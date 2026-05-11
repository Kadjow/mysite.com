import type { SiteContent } from "@/i18n";

export type BeyondCodeExperience = {
  organization: string;
  role: string;
  category: string;
  icon: "community" | "scouting";
  summary: string;
  narrative: string;
  highlights: string[];
  strategicValue: string;
  softSkills: string[];
  tags: string[];
};

const beyondCodeConfigs = [
  {
    key: "devprDevParana",
    icon: "community",
  },
  {
    key: "grupoEscoteiroAldeiaVerde",
    icon: "scouting",
  },
] as const satisfies ReadonlyArray<{
  key: keyof SiteContent["beyondCode"]["items"];
  icon: BeyondCodeExperience["icon"];
}>;

export function getBeyondCodeExperiences(
  content: SiteContent,
): BeyondCodeExperience[] {
  return beyondCodeConfigs.map(({ key, ...config }) => ({
    ...content.beyondCode.items[key],
    ...config,
  }));
}
