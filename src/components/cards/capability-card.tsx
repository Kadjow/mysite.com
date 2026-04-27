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
    <Card className="surface-card rounded-[1.9rem] py-0">
      <CardContent className="space-y-5 px-6 py-6">
        <div className="space-y-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-foreground">
            <Icon className="size-5" />
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

        <TagList items={capability.items} />
      </CardContent>
    </Card>
  );
}
