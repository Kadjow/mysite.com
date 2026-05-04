import { CheckCircle2, GraduationCap, MapPin } from "lucide-react";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre"
            title="Tecnologia como meio para construir produto útil, coerente e pronto para crescer."
            description={profile.aboutLead}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="surface-card rounded-[2rem] py-0">
            <CardContent className="space-y-6 px-6 pt-6 pb-7 sm:px-7 sm:pt-7 sm:pb-8">
              <p className="display-title text-2xl leading-[1.35] text-foreground sm:text-3xl">
                “{profile.aboutQuote}”
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-border/70 bg-background/60 p-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <MapPin className="size-4 text-accent" />
                    {profile.location}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Base no Brasil, com experiência em produtos digitais, operação e comunicação.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-border/70 bg-background/60 p-4">
                  <div className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{profile.education}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Formação alinhada com prática profissional e entrega em produção.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  O que orienta meu trabalho
                </p>
                <ul className="grid gap-3 text-sm leading-7 text-foreground/88">
                  {profile.differentiators.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
