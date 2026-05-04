import { ArrowUpRight, CircleDot, FolderGit2 } from "lucide-react";

import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { TagList } from "@/components/shared/tag-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const toneMap = {
  cyan: "from-cyan-400/18 via-cyan-300/5 to-transparent",
  emerald: "from-emerald-400/18 via-emerald-300/5 to-transparent",
  amber: "from-amber-400/18 via-amber-300/5 to-transparent",
  violet: "from-violet-400/18 via-violet-300/5 to-transparent",
  rose: "from-rose-400/18 via-rose-300/5 to-transparent",
  indigo: "from-indigo-400/18 via-indigo-300/5 to-transparent",
} as const;

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "surface-card mesh-border relative rounded-[2rem] py-0",
        featured ? "min-h-full" : "h-full",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-48 rounded-t-[2rem] bg-gradient-to-br",
          toneMap[project.tone],
        )}
      />
      <CardContent className="relative flex h-full flex-col gap-5 px-6 py-6 sm:px-7 sm:py-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-border/80 bg-background/65 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground"
          >
            {project.status}
          </Badge>
          {project.highlight ? (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <CircleDot className="size-3 text-accent" />
              {project.highlight}
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
          <p className="text-sm leading-7 text-muted-foreground sm:text-[0.98rem]">
            {project.description}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Problema
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/88">{project.caseStudy.problem}</p>
        </div>

        <TagList items={project.tags} />

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.repoUrl ? (
            <ExternalLinkButton href={project.repoUrl} variant="outline" size="default">
              GitHub
              <FolderGit2 />
            </ExternalLinkButton>
          ) : null}
          {project.demoUrl ? (
            <ExternalLinkButton href={project.demoUrl} variant="default" size="default">
              Demo
              <ArrowUpRight />
            </ExternalLinkButton>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
