import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getExperiences } from "@/data/experiences";
import type { SiteContent } from "@/i18n";

type ExperienceSectionProps = {
  content: SiteContent;
};

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const experiences = getExperiences(content);

  return (
    <SectionWrapper id="experiencia" className="py-14 sm:py-24">
      <div className="space-y-8 sm:space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.experience.eyebrow}
            title={content.sections.experience.title}
            description={content.sections.experience.description}
          />
        </Reveal>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={0.05 * index}>
              <ExperienceCard
                experience={experience}
                productStrengthLabel={content.experience.labels.productStrengthLabel}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
