import { ArrowUpRight, CircleDot, FileText, FolderGit2 } from "lucide-react";

import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { TagList } from "@/components/shared/tag-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import type { SiteContent } from "@/i18n";
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
  projectLabels: SiteContent["projects"]["labels"];
  spotlight: SiteContent["projectSpotlight"];
  onSelect?: () => void;
  className?: string;
};

export function ProjectSpotlightCard({
  project,
  variant,
  projectLabels,
  spotlight,
  onSelect,
  className,
}: ProjectSpotlightCardProps) {
  const isActive = variant === "active";
  const previewClampClass =
    "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]";
  const activeClampClass = cn(previewClampClass, "text-balance");
  const caseStudyItems = [
    {
      label: spotlight.problemLabel,
      value: project.caseStudy.problem,
    },
    {
      label: spotlight.solutionLabel,
      value: project.caseStudy.solution,
    },
    {
      label: spotlight.impactLabel,
      value: project.caseStudy.impact,
    },
  ];

  const contentCard = (
    <Card
      className={cn(
        "surface-card mesh-border relative overflow-hidden rounded-[2rem] border-border/75 py-0 text-left transition-[border-color,box-shadow,background-color,transform] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        isActive
          ? "min-h-[34rem] border-border/90 bg-card/90 shadow-[var(--shadow-soft)] dark:border-white/12 dark:bg-white/[0.055]"
          : "min-h-[20.5rem] border-border/85 bg-background/82 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.28)] group-hover:-translate-y-1 group-hover:border-border/95 group-hover:bg-background/88 group-hover:shadow-[var(--shadow-soft)] dark:border-white/12 dark:bg-white/[0.05] dark:shadow-[0_26px_80px_-48px_rgba(0,0,0,0.78)] dark:group-hover:border-white/20 dark:group-hover:bg-white/[0.075]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-br transition-opacity duration-300",
          toneMap[project.tone],
          isActive ? "h-56 opacity-100" : "h-40 opacity-90 group-hover:opacity-100",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-10 top-8 h-24 rounded-full blur-3xl",
          isActive ? "bg-accent/10" : "bg-accent/12 dark:bg-accent/16",
        )}
      />

      <CardContent
        className={cn(
          "relative flex h-full flex-col",
          isActive ? "gap-5 px-6 py-6 sm:px-7 sm:py-7" : "gap-5 px-5 py-5 lg:px-6 lg:py-6",
        )}
      >
        <div
          className={cn(
            "flex gap-3",
            isActive ? "flex-wrap items-center justify-between" : "flex-col items-start",
          )}
        >
          <Badge
            variant="outline"
            className={cn(
              "rounded-full px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em]",
              isActive
                ? "border-border/80 bg-background/70 text-muted-foreground dark:border-white/10 dark:bg-white/[0.06]"
                : "border-border/85 bg-background/78 text-foreground/72 dark:border-white/12 dark:bg-white/[0.065] dark:text-foreground/84",
            )}
          >
            {project.status}
          </Badge>

          {project.highlight ? (
            <div
              className={cn(
                "inline-flex max-w-full items-center gap-2 text-xs font-medium",
                isActive
                  ? "text-muted-foreground"
                  : "rounded-full border border-accent/18 bg-accent/10 px-3 py-1 text-foreground/74 dark:border-accent/28 dark:bg-accent/14 dark:text-foreground/86",
              )}
            >
              <CircleDot className="size-3 shrink-0 text-accent" />
              <span className={cn(!isActive && "block max-w-full truncate")}>{project.highlight}</span>
            </div>
          ) : null}
        </div>

        <div className={cn("space-y-3", isActive ? "max-w-2xl" : "max-w-none")}>
          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              isActive
                ? `text-2xl sm:text-[2rem] ${activeClampClass} [-webkit-line-clamp:2]`
                : "text-[1.2rem] leading-tight lg:text-[1.32rem]",
              !isActive && `${previewClampClass} [-webkit-line-clamp:2]`,
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              isActive
                ? `text-sm leading-6 text-muted-foreground sm:text-[0.98rem] ${activeClampClass} [-webkit-line-clamp:3]`
                : "text-sm leading-6 text-foreground/74 dark:text-foreground/82",
            )}
          >
            {isActive ? (
              project.description
            ) : (
              <span className={cn(previewClampClass, "[-webkit-line-clamp:2]")}>
                {project.preview}
              </span>
            )}
          </p>
        </div>

        {isActive ? (
          <>
            <div className="grid gap-2.5">
              {caseStudyItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-border/70 bg-background/70 px-4 py-3.5 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-6 text-foreground/88",
                      previewClampClass,
                      "[-webkit-line-clamp:3]",
                    )}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <TagList items={project.tags.slice(0, 6)} />

            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              {project.repoUrl ? (
                <ExternalLinkButton href={project.repoUrl} variant="outline" size="default">
                  {projectLabels.github}
                  <FolderGit2 />
                </ExternalLinkButton>
              ) : null}
              {project.demoUrl ? (
                <ExternalLinkButton href={project.demoUrl} variant="default" size="default">
                  {projectLabels.demo}
                  <ArrowUpRight />
                </ExternalLinkButton>
              ) : null}
              {project.caseUrl ? (
                <ExternalLinkButton href={project.caseUrl} variant="secondary" size="default">
                  {projectLabels.case}
                  <FileText />
                </ExternalLinkButton>
              ) : null}
            </div>
          </>
        ) : (
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs dark:border-white/10">
            <span className="shrink-0 font-semibold uppercase tracking-[0.2em] text-foreground/76 dark:text-foreground/86">
              {spotlight.viewHighlightLabel}
            </span>
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/76 text-foreground/76 transition-colors duration-300 group-hover:border-accent/30 group-hover:text-foreground dark:border-white/12 dark:bg-white/[0.06] dark:text-foreground/84 dark:group-hover:border-accent/36">
              <ArrowUpRight className="size-4" />
            </span>
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
        aria-label={spotlight.selectProjectAriaLabel.replace("{name}", project.name)}
        className="group block w-full cursor-pointer rounded-[2rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {contentCard}
      </button>
    );
  }

  return contentCard;
}
