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
    <Card className="surface-card rounded-[1.8rem] py-0 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:border-border/90 hover:shadow-[var(--shadow-soft)]">
      <CardContent className="space-y-5 px-6 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground transition-[background-color,box-shadow,color] duration-300 ease-out group-hover/card:bg-muted/90 group-hover/card:text-accent group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_-18px_var(--surface-glow)] motion-reduce:transition-none">
                <Icon className="size-5 transition-transform duration-300 ease-out group-hover/card:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" />
              </span>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {experience.company}
                </p>
                <p className="text-sm text-muted-foreground">{experience.role}</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              {experience.summary}
            </p>
          </div>
          <Badge
            variant="outline"
            className="rounded-full border-border/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-[border-color,background-color,color] duration-300 ease-out group-hover/card:border-border/95 group-hover/card:bg-background/75 group-hover/card:text-foreground/80 motion-reduce:transition-none"
          >
            {experience.category}
          </Badge>
        </div>

        <ul className="grid gap-3 text-sm leading-7 text-foreground/88">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-[1.35rem] border border-border/70 bg-background/55 p-4 transition-[border-color,background-color] duration-300 ease-out group-hover/card:border-border/85 group-hover/card:bg-background/68 motion-reduce:transition-none">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {productStrengthLabel}
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/88">
            {experience.whyItMatters}
          </p>
        </div>

        <TagList items={experience.tags} />
      </CardContent>
    </Card>
  );
}
