import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectSpotlightCarousel } from "@/components/sections/projects/project-spotlight-carousel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { content } from "@/i18n";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projetos">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.projects.eyebrow}
            title={content.sections.projects.title}
            description={content.sections.projects.description}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ProjectSpotlightCarousel projects={projects} />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
