import { content } from "@/i18n";

export type ProjectCaseStudy = {
  problem: string;
  solution: string;
  impact: string;
};

export type Project = {
  name: string;
  description: string;
  preview: string;
  caseStudy: ProjectCaseStudy;
  tags: string[];
  status: string;
  tone: "cyan" | "emerald" | "amber" | "violet" | "rose" | "indigo";
  featured: boolean;
  highlight?: string;
  repoUrl?: string;
  demoUrl?: string;
  caseUrl?: string;
};

const projectConfigs = [
  {
    key: "poAgentOpenclaw",
    tone: "cyan",
    featured: true,
  },
  {
    key: "sparkSalesSystem",
    tone: "emerald",
    featured: true,
  },
  {
    key: "pdfOcrPostTranscribe",
    tone: "violet",
    featured: true,
    repoUrl: "https://github.com/Kadjow/post_transcribe",
    demoUrl: "https://post-transcribe-web.vercel.app",
  },
  {
    key: "gocoffeeLandingPage",
    tone: "amber",
    featured: false,
    repoUrl: "https://github.com/Kadjow/LP_gocoffeeCascavel",
  },
  {
    key: "currentPortfolio",
    tone: "indigo",
    featured: false,
    repoUrl: "https://github.com/Kadjow/diogo.a.gulhak.github.io",
    demoUrl: "https://kadjow.github.io/diogo.a.gulhak.github.io/",
  },
  {
    key: "seuClimaHoje",
    tone: "rose",
    featured: false,
    repoUrl: "https://github.com/Kadjow/Seu-Clima-Hoje",
  },
] as const satisfies ReadonlyArray<{
  key: keyof typeof content.projects.items;
  tone: Project["tone"];
  featured: Project["featured"];
  repoUrl?: Project["repoUrl"];
  demoUrl?: Project["demoUrl"];
  caseUrl?: Project["caseUrl"];
}>;

export const projects: Project[] = projectConfigs.map(({ key, ...config }) => ({
  ...content.projects.items[key],
  caseStudy: {
    ...content.projects.items[key].caseStudy,
  },
  ...config,
}));
