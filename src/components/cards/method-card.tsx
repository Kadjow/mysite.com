import type { WorkMethodItem } from "@/data/work-method";
import { Card, CardContent } from "@/components/ui/card";

type MethodCardProps = {
  item: WorkMethodItem;
};

export function MethodCard({ item }: MethodCardProps) {
  return (
    <Card className="surface-card rounded-[1.8rem] py-0">
      <CardContent className="space-y-4 px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">Etapa {item.step}</span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.kicker}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">
            {item.description}
          </p>
        </div>
        <p className="text-sm font-medium text-foreground/88">{item.outcome}</p>
      </CardContent>
    </Card>
  );
}
