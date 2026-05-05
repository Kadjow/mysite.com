import type { SiteContent } from "@/i18n";

export type WorkMethodItem = {
  step: string;
  title: string;
  kicker: string;
  description: string;
  outcome: string;
};

const workMethodConfigs = [
  {
    key: "understandProblem",
    step: "01",
  },
  {
    key: "structureSolution",
    step: "02",
  },
  {
    key: "buildWithQuality",
    step: "03",
  },
  {
    key: "validateTestEvolve",
    step: "04",
  },
] as const satisfies ReadonlyArray<{
  key: keyof SiteContent["workMethod"]["items"];
  step: WorkMethodItem["step"];
}>;

export function getWorkMethod(content: SiteContent): WorkMethodItem[] {
  return workMethodConfigs.map(({ key, ...config }) => ({
    ...config,
    ...content.workMethod.items[key],
  }));
}
