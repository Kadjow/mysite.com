import Image from "next/image";
import { ArrowRight, Download, MessageCircleMore } from "lucide-react";

import profileImage from "@/assets/images/profile/diogo-gulhak.png";
import { MetricCard } from "@/components/cards/metric-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { content } from "@/i18n";

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
            {content.hero.badge}
          </Badge>

          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {content.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ExternalLinkButton href="#projetos" variant="default">
              {content.common.actions.viewProjects}
              <ArrowRight />
            </ExternalLinkButton>
            <ExternalLinkButton href="#contato" variant="outline">
              {content.common.actions.contact}
              <MessageCircleMore />
            </ExternalLinkButton>
            <ExternalLinkButton
              href={profile.resumeUrl}
              variant="ghost"
              className="border border-border/70 bg-background/65"
              download
            >
              {content.common.actions.downloadResume}
              <Download />
            </ExternalLinkButton>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.hero.metrics.map(({ id, ...metric }, index) => (
              <Reveal key={id} delay={0.06 * (index + 1)}>
                <MetricCard {...metric} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[30rem]">
            <div className="absolute -inset-5 rounded-[2.6rem] bg-[radial-gradient(circle,oklch(0.74_0.111_190_/_0.16),transparent_62%)] blur-3xl" />
            <div className="surface-card mesh-border relative rounded-[2.5rem] border border-border/55 p-3 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.7)] sm:p-4">
              <div className="rounded-[2.1rem] border border-border/60 bg-background/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-4">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.08))]">
                  <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,oklch(0.18_0.02_250_/_0.18),transparent)]" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.26))]" />
                  <Image
                    src={profileImage}
                    alt={content.hero.profilePhotoAlt}
                    preload
                    className="aspect-[7/9] w-full object-cover object-[82%_center]"
                  />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3 sm:mt-5">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-[1.15rem]">
                      {content.site.brand.fullName}
                    </p>
                    <p className="text-sm text-muted-foreground/90">
                      {content.common.person.location}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="h-auto shrink-0 rounded-full border-border/70 bg-background/88 px-3 py-1.5 text-[0.72rem] font-semibold text-foreground shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-md hover:bg-background/95"
                  >
                    {content.hero.productDeliveryBadge}
                  </Badge>
                </div>
              </div>

              <div className="absolute left-3 top-3 z-10 rounded-2xl border border-border/65 bg-background/84 px-3.5 py-2.5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] backdrop-blur-md sm:left-4 sm:top-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {content.hero.productionLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {content.hero.publishedAppsLabel}
                </p>
              </div>

              <div className="absolute bottom-28 right-3 z-10 rounded-2xl border border-border/65 bg-background/84 px-3.5 py-2.5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] backdrop-blur-md sm:bottom-32 sm:right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {content.hero.scaleLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {content.hero.whiteLabelSaasLabel}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
