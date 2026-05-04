"use client";

import { useCallback, useMemo, useState } from "react";

import type { Project } from "@/data/projects";

type UseProjectCarouselReturn = {
  activeIndex: number;
  activeProject?: Project;
  previousProject?: Project;
  nextProject?: Project;
  goNext: () => void;
  goPrevious: () => void;
  goToIndex: (index: number) => void;
};

export function useProjectCarousel(projects: Project[]): UseProjectCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectCount = projects.length;

  const getWrappedIndex = useCallback(
    (index: number) => {
      if (projectCount === 0) {
        return 0;
      }

      return (index + projectCount) % projectCount;
    },
    [projectCount],
  );
  const normalizedActiveIndex = projectCount > 0 ? getWrappedIndex(activeIndex) : 0;

  const goToIndex = useCallback(
    (index: number) => {
      if (projectCount < 2) {
        return;
      }

      setActiveIndex(getWrappedIndex(index));
    },
    [getWrappedIndex, projectCount],
  );

  const goNext = useCallback(() => {
    if (projectCount < 2) {
      return;
    }

    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + 1));
  }, [getWrappedIndex, projectCount]);

  const goPrevious = useCallback(() => {
    if (projectCount < 2) {
      return;
    }

    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex - 1));
  }, [getWrappedIndex, projectCount]);

  const activeProject = projectCount > 0 ? projects[normalizedActiveIndex] : undefined;
  const previousProject =
    projectCount > 1 ? projects[getWrappedIndex(normalizedActiveIndex - 1)] : activeProject;
  const nextProject =
    projectCount > 1 ? projects[getWrappedIndex(normalizedActiveIndex + 1)] : activeProject;

  return useMemo(
    () => ({
      activeIndex: normalizedActiveIndex,
      activeProject,
      previousProject,
      nextProject,
      goNext,
      goPrevious,
      goToIndex,
    }),
    [
      normalizedActiveIndex,
      activeProject,
      goNext,
      goPrevious,
      goToIndex,
      nextProject,
      previousProject,
    ],
  );
}
