import { BeyondCodeCard } from "@/components/cards/beyond-code-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { beyondCodeExperiences } from "@/data/beyond-code";

export function BeyondCodeSection() {
  return (
    <SectionWrapper id="alem-do-codigo">
      <div className="space-y-10">
        <div className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="Além do código"
              title="Liderança, comunidade e formação humana como diferencial estratégico."
              description="Estas vivências não entram como extra. Elas reforçam maturidade profissional, capacidade de conduzir pessoas, presença em comunidade e disciplina de execução, ampliando o valor da atuação técnica."
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
