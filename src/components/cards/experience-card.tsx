import {
  BriefcaseBusiness,
  Coffee,
  Megaphone,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import type { Experience } from "@/data/experiences";
import { TagList } from "@/components/shared/tag-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<Experience["icon"], LucideIcon> = {
  atlas: Smartphone,
  slingui: BriefcaseBusiness,
  gocoffee: Coffee,
  marcondes: Megaphone,
};

type ExperienceCardProps = {
  experience: Experience;
  productStrengthLabel: string;
};

export function ExperienceCard({
  experience,
  productStrengthLabel,
}: ExperienceCardProps) {
  const Icon = iconMap[experience.icon];

  return (
    <Card className="surface-card rounded-[1.5rem] py-0 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:border-border/90 hover:shadow-[var(--shadow-soft)] sm:rounded-[1.8rem]">
      <CardContent className="space-y-4 px-4 py-4 sm:space-y-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-muted text-foreground transition-[background-color,box-shadow,color] duration-300 ease-out group-hover/card:bg-muted/90 group-hover/card:text-accent group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_-18px_var(--surface-glow)] motion-reduce:transition-none sm:size-11">
                <Icon className="size-[1.125rem] transition-transform duration-300 ease-out group-hover/card:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none sm:size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {experience.company}
                </p>
                <p className="text-[0.8125rem] leading-5 text-muted-foreground sm:text-sm">
                  {experience.role}
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground sm:leading-7">
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

        <ul className="grid gap-2 text-sm leading-6 text-foreground/88 sm:gap-3 sm:leading-7">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 sm:gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-[1.2rem] border border-border/70 bg-background/55 p-3.5 transition-[border-color,background-color] duration-300 ease-out group-hover/card:border-border/85 group-hover/card:bg-background/68 motion-reduce:transition-none sm:rounded-[1.35rem] sm:p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.72rem] sm:tracking-[0.18em]">
            {productStrengthLabel}
          </p>
          <p className="mt-1.5 text-sm leading-6 text-foreground/88 sm:mt-2 sm:leading-7">
            {experience.whyItMatters}
          </p>
        </div>

        <TagList
          items={experience.tags}
          className="gap-1.5 sm:gap-2 [&>*]:h-auto [&>*]:px-2.5 [&>*]:py-1 [&>*]:text-[0.68rem] sm:[&>*]:px-3 sm:[&>*]:text-[0.72rem]"
        />
      </CardContent>
    </Card>
  );
}
