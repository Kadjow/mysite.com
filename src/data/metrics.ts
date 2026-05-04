import { content } from "@/i18n";

export const metrics = content.hero.metrics.map((metric) => ({
  value: metric.value,
  label: metric.label,
  description: metric.description,
}));
