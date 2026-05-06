"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";

import { ProjectSpotlightCard } from "@/components/sections/projects/project-spotlight-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { useProjectCarousel } from "@/hooks/use-project-carousel";
import type { SiteContent } from "@/i18n";
import { cn } from "@/lib/utils";

type ProjectSpotlightCarouselProps = {
  projects: Project[];
  roleDescription: SiteContent["projects"]["carousel"]["roleDescription"];
  projectLabels: SiteContent["projects"]["labels"];
  spotlight: SiteContent["projectSpotlight"];
};

type CarouselSlot = {
  project: Project;
  variant: "active" | "preview";
  position: "previous" | "active" | "next";
  onSelect?: () => void;
};

const transition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function ProjectSpotlightCarousel({
  projects,
  roleDescription,
  projectLabels,
  spotlight,
}: ProjectSpotlightCarouselProps) {
  const reduceMotion = useReducedMotion();
  const {
    activeIndex,
    activeProject,
    previousProject,
    nextProject,
    goNext,
    goPrevious,
  } = useProjectCarousel(projects);

  const projectCount = projects.length;

  const desktopSlots = useMemo<CarouselSlot[]>(() => {
    if (!activeProject) {
      return [];
    }

    if (projectCount === 1) {
      return [{ project: activeProject, variant: "active", position: "active" }];
    }

    if (projectCount === 2 && previousProject) {
      return [
        {
          project: previousProject,
          variant: "preview",
          position: "previous",
          onSelect: goPrevious,
        },
        { project: activeProject, variant: "active", position: "active" },
      ];
    }

    return [
      previousProject
        ? {
            project: previousProject,
            variant: "preview",
            position: "previous",
            onSelect: goPrevious,
          }
        : null,
      { project: activeProject, variant: "active", position: "active" },
      nextProject
        ? {
            project: nextProject,
            variant: "preview",
            position: "next",
            onSelect: goNext,
          }
        : null,
    ].filter((slot): slot is CarouselSlot => slot !== null);
  }, [activeProject, goNext, goPrevious, nextProject, previousProject, projectCount]);

  if (!activeProject) {
    return null;
  }

  const formattedIndex = String(activeIndex + 1).padStart(2, "0");
  const formattedTotal = String(projectCount).padStart(2, "0");

  return (
    <div
      role="region"
      aria-roledescription={roleDescription}
      aria-label={spotlight.carouselAriaLabel}
      tabIndex={projectCount > 1 ? 0 : -1}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrevious();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
      className="surface-card mesh-border relative overflow-hidden rounded-[2.4rem] border-border/75 px-4 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-8 xl:px-12 xl:py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-10 h-40 rounded-full bg-[radial-gradient(circle,oklch(0.74_0.111_190_/_0.14),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,oklch(0.79_0.122_190_/_0.18),transparent_72%)]" />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {spotlight.carouselLabel}
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {spotlight.carouselDescription}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <p
              aria-live="polite"
              aria-atomic="true"
              className="min-w-[5.5rem] text-right text-sm font-medium tracking-[0.2em] text-muted-foreground"
            >
              {formattedIndex} / {formattedTotal}
              <span className="sr-only">
                {spotlight.currentProjectSrLabel.replace("{name}", activeProject.name)}
              </span>
            </p>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={spotlight.previousProjectAriaLabel}
                onClick={goPrevious}
                disabled={projectCount < 2}
                className="rounded-full"
              >
                <ChevronLeft />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={spotlight.nextProjectAriaLabel}
                onClick={goNext}
                disabled={projectCount < 2}
                className="rounded-full"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.name}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={transition}
            >
              <ProjectSpotlightCard
                project={activeProject}
                variant="active"
                projectLabels={projectLabels}
                spotlight={spotlight}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative hidden overflow-x-clip md:block">
          <LayoutGroup>
            <motion.div
              layout
              className="flex items-stretch justify-center gap-4 lg:gap-5 xl:gap-6"
              transition={transition}
            >
              <AnimatePresence initial={false} mode="popLayout">
                {desktopSlots.map((slot) => (
                  <motion.div
                    key={slot.project.name}
                    layout
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.9,
                            x: slot.position === "next" ? 48 : -48,
                          }
                    }
                    animate={{
                      opacity: slot.variant === "active" ? 1 : 0.96,
                      scale: slot.variant === "active" ? 1 : 0.95,
                      y: slot.variant === "active" ? 0 : 18,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.88,
                            x: slot.position === "next" ? -42 : 42,
                          }
                    }
                    transition={transition}
                    className={cn(
                      "w-full shrink-0",
                      slot.variant === "active"
                        ? "min-w-0 md:max-w-[46rem] md:flex-[1.18_1_0] xl:max-w-[48rem]"
                        : "md:flex-[0_0_clamp(16rem,22vw,18.75rem)]",
                    )}
                  >
                    <ProjectSpotlightCard
                      project={slot.project}
                      variant={slot.variant}
                      projectLabels={projectLabels}
                      spotlight={spotlight}
                      onSelect={slot.onSelect}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
}
