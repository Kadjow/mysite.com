import { Flag, Users, type LucideIcon } from "lucide-react";

import { TagList } from "@/components/shared/tag-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BeyondCodeExperience } from "@/data/beyond-code";
import type { SiteContent } from "@/i18n";

const iconMap: Record<BeyondCodeExperience["icon"], LucideIcon> = {
  community: Users,
  scouting: Flag,
};

type BeyondCodeCardProps = {
  experience: BeyondCodeExperience;
  labels: SiteContent["beyondCode"]["labels"];
};

export function BeyondCodeCard({
  experience,
  labels,
}: BeyondCodeCardProps) {
  const Icon = iconMap[experience.icon];

  return (
    <Card className="surface-card rounded-[1.8rem] py-0 transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-1 hover:border-border/90 hover:shadow-[var(--shadow-soft)]">
      <CardContent className="space-y-4 px-4 py-4 sm:space-y-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-muted text-foreground transition-[background-color,box-shadow,color] duration-300 ease-out group-hover/card:bg-muted/90 group-hover/card:text-accent group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_-18px_var(--surface-glow)] motion-reduce:transition-none sm:size-11">
                <Icon className="size-4 transition-transform duration-300 ease-out group-hover/card:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none sm:size-5" />
              </span>
              <div>
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {experience.organization}
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {experience.role}
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground transition-colors duration-300 ease-out group-hover/card:text-muted-foreground/90 motion-reduce:transition-none sm:leading-7">
              {experience.summary}
            </p>
          </div>
          <Badge
            variant="outline"
            className="rounded-full border-border/80 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground transition-[border-color,background-color,color] duration-300 ease-out group-hover/card:border-border/95 group-hover/card:bg-background/75 group-hover/card:text-foreground/80 motion-reduce:transition-none sm:px-3 sm:py-1 sm:text-[0.7rem] sm:tracking-[0.16em]"
          >
            {experience.category}
          </Badge>
        </div>

        <div className="rounded-[1.2rem] border border-border/70 bg-background/55 p-3 transition-[border-color,background-color] duration-300 ease-out group-hover/card:border-border/85 group-hover/card:bg-background/68 motion-reduce:transition-none sm:rounded-[1.35rem] sm:p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.72rem] sm:tracking-[0.18em]">
            {labels.humanNarrative}
          </p>
          <p className="mt-1.5 text-sm leading-6 text-foreground/88 sm:mt-2 sm:leading-7">
            {experience.narrative}
          </p>
        </div>

        <ul className="grid gap-2.5 text-sm leading-6 text-foreground/88 sm:gap-3 sm:leading-7">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 sm:gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 sm:space-y-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.72rem] sm:tracking-[0.18em]">
            {labels.softSkillsHighlight}
          </p>
          <TagList
            items={experience.softSkills}
            className="gap-1.5 transition-all duration-300 ease-out motion-reduce:transition-none [&_[data-slot=badge]]:px-2.5 [&_[data-slot=badge]]:text-[0.68rem] sm:gap-2 sm:[&_[data-slot=badge]]:px-3 sm:[&_[data-slot=badge]]:py-1 sm:[&_[data-slot=badge]]:text-[0.72rem] group-hover/card:[&_[data-slot=badge]]:border-border/90 group-hover/card:[&_[data-slot=badge]]:bg-background/80 group-hover/card:[&_[data-slot=badge]]:text-foreground/80 group-hover/card:[&_[data-slot=badge]]:shadow-[0_12px_28px_-22px_var(--surface-glow)]"
          />
        </div>

        <div className="rounded-[1.2rem] border border-border/70 bg-background/55 p-3 transition-[border-color,background-color] duration-300 ease-out group-hover/card:border-border/85 group-hover/card:bg-background/68 motion-reduce:transition-none sm:rounded-[1.35rem] sm:p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.72rem] sm:tracking-[0.18em]">
            {labels.strategicDifferential}
          </p>
          <p className="mt-1.5 text-sm leading-6 text-foreground/88 sm:mt-2 sm:leading-7">
            {experience.strategicValue}
          </p>
        </div>

        <TagList
          items={experience.tags}
          className="gap-1.5 transition-all duration-300 ease-out motion-reduce:transition-none [&_[data-slot=badge]]:px-2.5 [&_[data-slot=badge]]:text-[0.68rem] sm:gap-2 sm:[&_[data-slot=badge]]:px-3 sm:[&_[data-slot=badge]]:py-1 sm:[&_[data-slot=badge]]:text-[0.72rem] group-hover/card:[&_[data-slot=badge]]:border-border/90 group-hover/card:[&_[data-slot=badge]]:bg-background/80 group-hover/card:[&_[data-slot=badge]]:text-foreground/80 group-hover/card:[&_[data-slot=badge]]:shadow-[0_12px_28px_-22px_var(--surface-glow)]"
        />
      </CardContent>
    </Card>
  );
}
