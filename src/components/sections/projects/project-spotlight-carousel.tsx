"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";

import { ProjectSpotlightCard } from "@/components/sections/projects/project-spotlight-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { useProjectCarousel } from "@/hooks/use-project-carousel";
import { content } from "@/i18n";
import { cn } from "@/lib/utils";

type ProjectSpotlightCarouselProps = {
  projects: Project[];
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

export function ProjectSpotlightCarousel({ projects }: ProjectSpotlightCarouselProps) {
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
      aria-roledescription="carousel"
      aria-label={content.projectSpotlight.carouselAriaLabel}
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
      className="surface-card mesh-border relative overflow-hidden rounded-[2.4rem] border-border/75 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-10 h-40 rounded-full bg-[radial-gradient(circle,oklch(0.74_0.111_190_/_0.16),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,oklch(0.79_0.122_190_/_0.22),transparent_72%)]" />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {content.projectSpotlight.carouselLabel}
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {content.projectSpotlight.carouselDescription}
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
                {content.projectSpotlight.currentProjectSrLabel.replace(
                  "{name}",
                  activeProject.name,
                )}
              </span>
            </p>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={content.projectSpotlight.previousProjectAriaLabel}
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
                aria-label={content.projectSpotlight.nextProjectAriaLabel}
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
              <ProjectSpotlightCard project={activeProject} variant="active" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative hidden overflow-hidden md:block">
          <LayoutGroup>
            <motion.div
              layout
              className="flex items-center justify-center gap-3 lg:gap-5 xl:gap-7"
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
                      opacity: slot.variant === "active" ? 1 : 0.92,
                      scale: slot.variant === "active" ? 1 : 0.92,
                      y: slot.variant === "active" ? 0 : 28,
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
                      "shrink-0",
                      slot.variant === "active"
                        ? "w-[56%] min-w-0 xl:w-[58%]"
                        : "w-[22%] min-w-0 xl:w-[19%]",
                    )}
                  >
                    <ProjectSpotlightCard
                      project={slot.project}
                      variant={slot.variant}
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
