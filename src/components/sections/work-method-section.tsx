import { MethodCard } from "@/components/cards/method-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { workMethod } from "@/data/work-method";

export function WorkMethodSection() {
  return (
    <SectionWrapper>
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Método"
            title="Uma forma de trabalhar que equilibra contexto, execução e evolução contínua."
            description="O processo é simples na superfície, mas disciplinado por dentro: entender bem, estruturar com critério, construir com qualidade e validar o que precisa mudar."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-4">
          {workMethod.map((item, index) => (
            <Reveal key={item.step} delay={0.05 * index}>
              <MethodCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
