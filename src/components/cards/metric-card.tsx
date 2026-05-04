import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/shared/count-up";

type MetricCardProps = {
  value: string;
  label: string;
  description: string;
};

function parseMetricValue(value: string) {
  const match = value.match(/^(\d+)(\+)?(.*)$/);

  if (!match) {
    return null;
  }

  const [, numericValue, suffix = "", rest = ""] = match;

  return {
    to: Number(numericValue),
    suffix,
    rest,
  };
}

export function MetricCard({ value, label, description }: MetricCardProps) {
  const animatedValue = parseMetricValue(value);

  return (
    <Card className="surface-card rounded-[1.75rem] py-0">
      <CardContent className="space-y-2 px-5 py-5">
        <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {animatedValue ? (
            <>
              <span aria-hidden="true">
                <CountUp to={animatedValue.to} suffix={animatedValue.suffix} />
                {animatedValue.rest}
              </span>
              <span className="sr-only">{value}</span>
            </>
          ) : (
            value
          )}
        </p>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
