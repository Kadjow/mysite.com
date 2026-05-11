import { BeyondCodeCard } from "@/components/cards/beyond-code-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getBeyondCodeExperiences } from "@/data/beyond-code";
import type { SiteContent } from "@/i18n";

type BeyondCodeSectionProps = {
  content: SiteContent;
};

export function BeyondCodeSection({ content }: BeyondCodeSectionProps) {
  const beyondCodeExperiences = getBeyondCodeExperiences(content);

  return (
    <SectionWrapper id="alem-do-codigo" className="py-14 sm:py-24">
      <div className="space-y-8 sm:space-y-10">
        <div className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.sections.beyondCode.eyebrow}
              title={content.sections.beyondCode.title}
              description={content.sections.beyondCode.description}
            />
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {beyondCodeExperiences.map((experience, index) => (
            <Reveal key={experience.organization} delay={0.05 * index}>
              <BeyondCodeCard
                experience={experience}
                labels={content.beyondCode.labels}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
