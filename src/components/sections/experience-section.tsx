import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experiencia">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Experiência profissional"
            title="Uma trajetória orientada a produto, entrega e operação em contexto real."
            description="A experiência principal concentra a carreira formal: software, produto, operação e conversão aplicados a ambientes com responsabilidade de execução, impacto de negócio e qualidade de entrega."
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
