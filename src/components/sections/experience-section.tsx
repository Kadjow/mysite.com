import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/experiences";
import { content } from "@/i18n";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experiencia">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.experience.eyebrow}
            title={content.sections.experience.title}
            description={content.sections.experience.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={0.05 * index}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
