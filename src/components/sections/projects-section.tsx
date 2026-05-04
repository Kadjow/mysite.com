import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectSpotlightCarousel } from "@/components/sections/projects/project-spotlight-carousel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projetos">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos apresentados com foco editorial, hierarquia clara e um spotlight que valoriza contexto, solução e impacto."
            description="Em vez de uma grade genérica, a seção agora destaca um projeto por vez e usa os previews laterais para sugerir continuidade sem competir pela atenção principal."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ProjectSpotlightCarousel projects={projects} />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
