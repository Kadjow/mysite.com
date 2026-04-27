import { CapabilityCard } from "@/components/cards/capability-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesSection() {
  return (
    <SectionWrapper id="stack">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Capacidades"
            title="A stack existe, mas o valor está em como cada área sustenta o produto."
            description="Em vez de listar tecnologias soltas, a V1 organiza competências por contexto de trabalho: engenharia mobile, front-end e SaaS, arquitetura e qualidade, além da camada de produto e negócio."
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
