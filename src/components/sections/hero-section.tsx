import Image from "next/image";
import { ArrowRight, Download, MessageCircleMore } from "lucide-react";

import profileImage from "@/assets/images/profile/diogo-gulhak.png";
import { MetricCard } from "@/components/cards/metric-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { metrics } from "@/data/metrics";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <SectionWrapper
      id="inicio"
      className="pt-10 sm:pt-14"
      containerClassName="space-y-10"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal className="space-y-7">
          <Badge
            variant="outline"
            className="rounded-full border-border/70 bg-background/70 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground"
          >
            Mobile, front-end, arquitetura e produto
          </Badge>

          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.heroTitle}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {profile.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ExternalLinkButton href="#projetos" variant="default">
              Ver projetos
              <ArrowRight />
            </ExternalLinkButton>
            <ExternalLinkButton href="#contato" variant="outline">
              Falar comigo
              <MessageCircleMore />
            </ExternalLinkButton>
            <ExternalLinkButton
              href={profile.resumeHref}
              variant="ghost"
              className="border border-border/70 bg-background/65"
              download
            >
              Baixar currículo
              <Download />
            </ExternalLinkButton>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={0.06 * (index + 1)}>
                <MetricCard {...metric} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[30rem]">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-[radial-gradient(circle,oklch(0.74_0.111_190_/_0.18),transparent_60%)] blur-3xl" />
            <div className="surface-card mesh-border relative rounded-[2.4rem] p-4 sm:p-5">
              <div className="rounded-[2rem] border border-border/60 bg-muted/45 p-3">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/60 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.08))]">
                  <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.18))]" />
                  <Image
                    src={profileImage}
                    alt="Foto profissional de Diogo Arthur Gulhak"
                    priority
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {profile.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {profile.location}
                    </p>
                  </div>
                  <Badge className="rounded-full px-3 py-1.5">
                    Produto + entrega
                  </Badge>
                </div>
              </div>

              <div className="absolute top-8 -left-4 rounded-2xl border border-border/70 bg-background/88 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur sm:-left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Produção real
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  4 apps publicados
                </p>
              </div>

              <div className="absolute right-2 bottom-8 rounded-2xl border border-border/70 bg-background/88 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur sm:-right-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Escala
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  White label + SaaS
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
