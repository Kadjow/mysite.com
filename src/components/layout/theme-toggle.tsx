"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  ariaLabel: string;
  className?: string;
};

const toggleSurfaceClassName =
  "rounded-full border-border/70 bg-background/70 backdrop-blur";

export function ThemeToggle({ ariaLabel, className }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safe mount gate for next-themes to avoid hydration mismatches.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-background/70 backdrop-blur",
          className,
        )}
        aria-hidden="true"
      >
        <span
          className="flex h-5 w-5 items-center justify-center"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/45" />
        </span>
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      key="theme-toggle-ready"
      type="button"
      variant="outline"
      size="icon"
      className={cn(toggleSurfaceClassName, className)}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunMedium className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonStar className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
}
