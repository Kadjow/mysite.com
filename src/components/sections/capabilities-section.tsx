import { CapabilityCard } from "@/components/cards/capability-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCapabilities } from "@/data/capabilities";
import type { SiteContent } from "@/i18n";

type CapabilitiesSectionProps = {
  content: SiteContent;
};

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  const capabilities = getCapabilities(content);

  return (
    <SectionWrapper id="stack">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.capabilities.eyebrow}
            title={content.sections.capabilities.title}
            description={content.sections.capabilities.description}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={0.05 * index}>
              <CapabilityCard capability={capability} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
