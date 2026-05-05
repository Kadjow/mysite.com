import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectSpotlightCarousel } from "@/components/sections/projects/project-spotlight-carousel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getProjects } from "@/data/projects";
import type { SiteContent } from "@/i18n";

type ProjectsSectionProps = {
  content: SiteContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const projects = getProjects(content);

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
          <ProjectSpotlightCarousel
            projects={projects}
            roleDescription={content.projects.carousel.roleDescription}
            projectLabels={content.projects.labels}
            spotlight={content.projectSpotlight}
          />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
