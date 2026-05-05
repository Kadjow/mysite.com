import type { SiteContent } from "@/i18n";

export function getMetrics(content: SiteContent) {
  return content.hero.metrics.map((metric) => ({
    value: metric.value,
    label: metric.label,
    description: metric.description,
  }));
}
