import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TagListProps = {
  items: string[];
  className?: string;
};

export function TagList({ items, className }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Badge
          key={item}
          variant="outline"
          className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.72rem] text-muted-foreground"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}
