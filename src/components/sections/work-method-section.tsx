import { MethodCard } from "@/components/cards/method-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { workMethod } from "@/data/work-method";
import { content } from "@/i18n";

export function WorkMethodSection() {
  return (
    <SectionWrapper>
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.workMethod.eyebrow}
            title={content.sections.workMethod.title}
            description={content.sections.workMethod.description}
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
