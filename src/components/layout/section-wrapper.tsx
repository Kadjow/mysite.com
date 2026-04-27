import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-18 sm:py-24", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
