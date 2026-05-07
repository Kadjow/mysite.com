import Image from "next/image";
import { ArrowRight, Download, MessageCircleMore } from "lucide-react";

import profileImage from "@/assets/images/profile/diogo-gulhak.png";
import { MetricCard } from "@/components/cards/metric-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ExternalLinkButton } from "@/components/shared/external-link-button";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import type { SiteContent } from "@/i18n";

type HeroSectionProps = {
  content: SiteContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <SectionWrapper
      id="inicio"
      className="py-14 pt-8 sm:py-24 sm:pt-14"
      containerClassName="space-y-10"
    >
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal className="space-y-5 sm:space-y-7">
          <Badge
            variant="outline"
            className="inline-flex max-w-full justify-center rounded-full border-border/70 bg-background/70 px-3 py-1.25 text-center text-[0.62rem] leading-[1.15] whitespace-normal uppercase tracking-[0.18em] text-muted-foreground sm:max-w-none sm:px-4 sm:py-1.5 sm:text-[0.72rem] sm:leading-normal sm:whitespace-nowrap sm:tracking-[0.24em]"
          >
            {content.hero.badge}
          </Badge>

          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-balance text-4xl leading-[1.02] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {content.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
            <ExternalLinkButton
              href="#projetos"
              variant="default"
              className="w-full px-3.5 sm:w-auto sm:px-5"
            >
              {content.common.actions.viewProjects}
              <ArrowRight />
            </ExternalLinkButton>
            <ExternalLinkButton
              href="#contato"
              variant="outline"
              className="w-full px-3.5 sm:w-auto sm:px-5"
            >
              {content.common.actions.contact}
              <MessageCircleMore />
            </ExternalLinkButton>
            <ExternalLinkButton
              href={profile.resumeUrl}
              variant="ghost"
              className="col-span-2 w-full border border-border/70 bg-background/65 px-3.5 sm:col-span-1 sm:w-auto sm:px-5"
              download
            >
              {content.common.actions.downloadResume}
              <Download />
            </ExternalLinkButton>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-4">
            {content.hero.metrics.map(({ id, ...metric }, index) => (
              <Reveal key={id} delay={0.06 * (index + 1)}>
                <MetricCard {...metric} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[30rem]">
            <div className="absolute -inset-4 rounded-[2.35rem] bg-[radial-gradient(circle,oklch(0.74_0.111_190_/_0.16),transparent_62%)] blur-3xl sm:-inset-5 sm:rounded-[2.6rem]" />
            <div className="surface-card mesh-border relative rounded-[2.2rem] border border-border/55 p-2.5 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.7)] sm:rounded-[2.5rem] sm:p-4">
              <div className="rounded-[1.85rem] border border-border/60 bg-background/55 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[2.1rem] sm:p-4">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.08))] sm:rounded-[1.75rem]">
                  <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,oklch(0.18_0.02_250_/_0.18),transparent)] sm:h-24" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.02_250_/_0.26))] sm:h-24" />
                  <Image
                    src={profileImage}
                    alt={content.hero.profilePhotoAlt}
                    preload
                    className="aspect-[4/5] w-full object-cover object-[82%_center] sm:aspect-[7/9]"
                  />
                </div>
                <div className="mt-3.5 flex items-end justify-between gap-2.5 sm:mt-5 sm:gap-3">
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-base font-semibold tracking-[-0.02em] text-foreground sm:text-[1.15rem]">
                      {content.site.brand.fullName}
                    </p>
                    <p className="text-[0.8125rem] text-muted-foreground/90 sm:text-sm">
                      {content.common.person.location}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="h-auto shrink-0 rounded-full border-border/70 bg-background/88 px-2.5 py-1 text-[0.68rem] font-semibold text-foreground shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-md hover:bg-background/95 sm:px-3 sm:py-1.5 sm:text-[0.72rem]"
                  >
                    {content.hero.productDeliveryBadge}
                  </Badge>
                </div>
              </div>

              <div className="absolute left-2.5 top-2.5 z-10 rounded-2xl border border-border/65 bg-background/84 px-3 py-2 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] backdrop-blur-md sm:left-4 sm:top-4 sm:px-3.5 sm:py-2.5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                  {content.hero.productionLabel}
                </p>
                <p className="mt-0.5 text-[0.8125rem] font-medium text-foreground sm:mt-1 sm:text-sm">
                  {content.hero.publishedAppsLabel}
                </p>
              </div>

              <div className="absolute bottom-24 right-2.5 z-10 rounded-2xl border border-border/65 bg-background/84 px-3 py-2 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] backdrop-blur-md sm:bottom-32 sm:right-4 sm:px-3.5 sm:py-2.5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                  {content.hero.scaleLabel}
                </p>
                <p className="mt-0.5 text-[0.8125rem] font-medium text-foreground sm:mt-1 sm:text-sm">
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
