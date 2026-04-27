import {
  BriefcaseBusiness,
  Coffee,
  Megaphone,
  Smartphone,
  TentTree,
  Users,
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
  devpr: Users,
  escotismo: TentTree,
};

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const Icon = iconMap[experience.icon];

  return (
    <Card className="surface-card rounded-[1.8rem] py-0">
      <CardContent className="space-y-5 px-6 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground">
                <Icon className="size-5" />
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
            className="rounded-full border-border/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground"
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

        <div className="rounded-[1.35rem] border border-border/70 bg-background/55 p-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Como isso fortalece produto
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
