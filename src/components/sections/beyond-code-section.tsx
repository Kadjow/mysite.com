import {
  Coffee,
  Flag,
  MessageSquareText,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

const iconMap: Record<(typeof profile.humanFacets)[number]["icon"], LucideIcon> = {
  community: Users,
  scouting: Flag,
  service: Coffee,
  communication: MessageSquareText,
};

export function BeyondCodeSection() {
  return (
    <SectionWrapper>
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Fora do código"
            title="O lado humano também entra na qualidade de um produto."
            description="Comunidade, escotismo, operação e comunicação não ficam separados da prática técnica. Eles aparecem na forma de liderar, colaborar, ouvir melhor e sustentar decisões com mais maturidade."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profile.humanFacets.map((facet, index) => {
            const Icon = iconMap[facet.icon];

            return (
              <Reveal key={facet.title} delay={0.05 * index}>
                <Card className="surface-card rounded-[1.8rem] py-0">
                  <CardContent className="space-y-4 px-6 py-6">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {facet.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {facet.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
