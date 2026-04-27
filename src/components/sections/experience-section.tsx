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
            eyebrow="Experiência"
            title="Uma trajetória que conecta software, operação, conversão, liderança e comunidade."
            description="As experiências mais fortes não aparecem só na stack. Elas aparecem na forma de tomar decisão, organizar contexto, lidar com gente, priorizar entrega e transformar necessidade real em produto melhor."
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
