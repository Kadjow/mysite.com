import { Card, CardContent } from "@/components/ui/card";

type MetricCardProps = {
  value: string;
  label: string;
  description: string;
};

export function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <Card className="surface-card rounded-[1.75rem] py-0">
      <CardContent className="space-y-2 px-5 py-5">
        <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {value}
        </p>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
