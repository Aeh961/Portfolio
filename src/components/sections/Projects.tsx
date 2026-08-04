import { projects } from '../../data/projects'
import { ProjectCard } from '../cards/ProjectCard'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="projects-heading" eyebrow="Projects" title="Selected work" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
