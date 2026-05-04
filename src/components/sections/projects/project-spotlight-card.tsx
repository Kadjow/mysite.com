import { ArrowUpRight, CircleDot, FileText, FolderGit2 } from "lucide-react";

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

type ProjectSpotlightCardProps = {
  project: Project;
  variant: "active" | "preview";
  onSelect?: () => void;
  className?: string;
};

export function ProjectSpotlightCard({
  project,
  variant,
  onSelect,
  className,
}: ProjectSpotlightCardProps) {
  const isActive = variant === "active";

  const content = (
    <Card
      className={cn(
        "surface-card mesh-border relative overflow-hidden rounded-[2rem] border-border/75 py-0 text-left transition-[border-color,box-shadow,opacity,transform] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        isActive
          ? "min-h-[34rem] border-border/90 shadow-[var(--shadow-soft)]"
          : "min-h-[18rem] border-border/75 opacity-60 hover:opacity-78",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-br",
          toneMap[project.tone],
          isActive ? "h-56" : "h-40",
        )}
      />
      <div className="pointer-events-none absolute inset-x-10 top-8 h-24 rounded-full bg-accent/10 blur-3xl" />

      <CardContent
        className={cn(
          "relative flex h-full flex-col",
          isActive ? "gap-6 px-6 py-6 sm:px-7 sm:py-7" : "gap-4 px-5 py-5",
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-border/80 bg-background/70 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground"
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

        <div className={cn("space-y-3", isActive ? "max-w-2xl" : "max-w-sm")}>
          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              isActive ? "text-2xl sm:text-[2rem]" : "text-xl",
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              "text-muted-foreground",
              isActive ? "text-sm leading-7 sm:text-[0.98rem]" : "text-sm leading-6",
            )}
          >
            {isActive ? project.description : project.preview}
          </p>
        </div>

        {isActive ? (
          <>
            <div className="grid gap-3 lg:grid-cols-3">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/72 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Problema
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/88">{project.caseStudy.problem}</p>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-background/72 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Solução
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/88">{project.caseStudy.solution}</p>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-background/72 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Impacto
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/88">{project.caseStudy.impact}</p>
              </div>
            </div>

            <TagList items={project.tags.slice(0, 6)} />

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
              {project.caseUrl ? (
                <ExternalLinkButton href={project.caseUrl} variant="secondary" size="default">
                  Case
                  <FileText />
                </ExternalLinkButton>
              ) : null}
            </div>
          </>
        ) : (
          <div className="mt-auto flex items-center justify-between gap-3 pt-2 text-xs text-muted-foreground">
            <span className="max-w-[16rem] leading-6">{project.highlight ?? project.preview}</span>
            <span className="shrink-0 uppercase tracking-[0.18em]">Ver destaque</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (!isActive && onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-label={`Destacar projeto ${project.name}`}
        className="group block w-full cursor-pointer rounded-[2rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </button>
    );
  }

  return content;
}
