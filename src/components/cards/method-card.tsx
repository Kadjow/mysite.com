import type { WorkMethodItem } from "@/data/work-method";
import { Card, CardContent } from "@/components/ui/card";

type MethodCardProps = {
  item: WorkMethodItem;
};

export function MethodCard({ item }: MethodCardProps) {
  return (
    <Card className="surface-card rounded-[1.8rem] py-0 transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:border-border/90 hover:shadow-[var(--shadow-soft)]">
      <CardContent className="space-y-4 px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow transition-colors duration-300 ease-out group-hover/card:text-foreground/80 motion-reduce:transition-none">
            Etapa {item.step}
          </span>
          <span className="rounded-full border border-border/65 bg-muted/75 px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 ease-out group-hover/card:border-border/90 group-hover/card:bg-background/80 group-hover/card:text-foreground/80 group-hover/card:shadow-[0_12px_28px_-22px_var(--surface-glow)] motion-reduce:transition-none">
            {item.kicker}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 ease-out motion-reduce:transition-none">
            {item.title}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground transition-colors duration-300 ease-out group-hover/card:text-muted-foreground/90 motion-reduce:transition-none">
            {item.description}
          </p>
        </div>
        <p className="text-sm font-medium text-foreground/88 transition-colors duration-300 ease-out group-hover/card:text-foreground motion-reduce:transition-none">
          {item.outcome}
        </p>
      </CardContent>
    </Card>
  );
}
