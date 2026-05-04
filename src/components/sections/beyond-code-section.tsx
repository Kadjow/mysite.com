import { BeyondCodeCard } from "@/components/cards/beyond-code-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { beyondCodeExperiences } from "@/data/beyond-code";
import { content } from "@/i18n";

export function BeyondCodeSection() {
  return (
    <SectionWrapper id="alem-do-codigo">
      <div className="space-y-10">
        <div className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.sections.beyondCode.eyebrow}
              title={content.sections.beyondCode.title}
              description={content.sections.beyondCode.description}
            />
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {beyondCodeExperiences.map((experience, index) => (
            <Reveal key={experience.organization} delay={0.05 * index}>
              <BeyondCodeCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
