import { content } from "@/i18n";

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
  key: keyof typeof content.workMethod.items;
  step: WorkMethodItem["step"];
}>;

export const workMethod: WorkMethodItem[] = workMethodConfigs.map(({ key, ...config }) => ({
  ...config,
  ...content.workMethod.items[key],
}));
