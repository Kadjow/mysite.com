import { ProjectCard } from "@/components/cards/project-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <SectionWrapper id="projetos">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos que mostram entrega real, cuidado com produto e capacidade de sair da ideia para a execução."
            description="A seleção principal prioriza produtos em produção, casos com impacto em UX e sistemas que exigem arquitetura, integração e clareza operacional. Os links públicos reforçam essa narrativa sem poluir o portfólio com experimentos menos maduros."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.name} delay={0.05 * index}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.name} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
