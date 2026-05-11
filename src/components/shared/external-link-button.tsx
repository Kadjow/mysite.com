import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ExternalLinkButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  download?: boolean;
  ariaLabel?: string;
};

export function ExternalLinkButton({
  href,
  children,
  icon,
  className,
  variant = "outline",
  size = "lg",
  download = false,
  ariaLabel,
}: ExternalLinkButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        "min-h-11 min-w-11 touch-manipulation rounded-full px-4 sm:min-h-0 sm:min-w-0 sm:px-5",
        className,
      )}
    >
      <a
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={isExternal && !download ? "_blank" : undefined}
        rel={isExternal && !download ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon}
      </a>
    </Button>
  );
}
