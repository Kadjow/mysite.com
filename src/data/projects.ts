import type { SiteContent } from "@/i18n";

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
    repoUrl: "https://github.com/BugMasters/Sistema_Vendas",
  },
  {
    key: "pdfOcrPostTranscribe",
    tone: "violet",
    featured: true,
    repoUrl: "https://github.com/Kadjow/post_transcribe",
    demoUrl: "https://post-transcribe-web.vercel.app",
  },
  {
    key: "currentPortfolio",
    tone: "indigo",
    featured: true,
    repoUrl: "https://github.com/Kadjow/Post.IA",
  },
  {
    key: "gocoffeeLandingPage",
    tone: "amber",
    featured: true,
    repoUrl: "https://github.com/Kadjow/LP_gocoffeeCascavel",
  },
  {
    key: "seuClimaHoje",
    tone: "rose",
    featured: true,
    repoUrl: "https://github.com/Kadjow/Seu-Clima-Hoje",
  },
] as const satisfies ReadonlyArray<{
  key: keyof SiteContent["projects"]["items"];
  tone: Project["tone"];
  featured: Project["featured"];
  repoUrl?: Project["repoUrl"];
  demoUrl?: Project["demoUrl"];
  caseUrl?: Project["caseUrl"];
}>;

export function getProjects(content: SiteContent): Project[] {
  return projectConfigs.map(({ key, ...config }) => ({
    ...content.projects.items[key],
    caseStudy: {
      ...content.projects.items[key].caseStudy,
    },
    ...config,
  }));
}
