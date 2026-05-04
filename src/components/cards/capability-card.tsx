import {
  Boxes,
  BriefcaseBusiness,
  MonitorSmartphone,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import type { Capability } from "@/data/capabilities";
import { TagList } from "@/components/shared/tag-list";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<Capability["icon"], LucideIcon> = {
  mobile: Smartphone,
  frontend: MonitorSmartphone,
  architecture: Boxes,
  product: BriefcaseBusiness,
};

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = iconMap[capability.icon];

  return (
    <Card className="surface-card rounded-[1.9rem] py-0 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:border-border/90 hover:shadow-[var(--shadow-soft)]">
      <CardContent className="space-y-5 px-6 py-6">
        <div className="space-y-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-foreground transition-[background-color,box-shadow,color] duration-300 ease-out group-hover/card:bg-muted/90 group-hover/card:text-accent group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_-18px_var(--surface-glow)] motion-reduce:transition-none">
            <Icon className="size-5 transition-transform duration-300 ease-out group-hover/card:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" />
          </span>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {capability.title}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {capability.description}
            </p>
          </div>
        </div>

        <TagList
          items={capability.items}
          className="transition-[border-color,background-color,color,box-shadow] duration-300 ease-out motion-reduce:transition-none group-hover/card:[&_[data-slot=badge]]:border-border/85 group-hover/card:[&_[data-slot=badge]]:bg-background/82 group-hover/card:[&_[data-slot=badge]]:text-foreground/78"
        />
      </CardContent>
    </Card>
  );
}
