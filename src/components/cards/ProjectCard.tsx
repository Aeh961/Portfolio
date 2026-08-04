import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../../types/content'
import { Badge } from '../common/Badge'
import { ProjectCardIcon } from './ProjectCardIcon'
import { ProjectCardImage } from './ProjectCardImage'

interface ProjectCardProps {
  project: Project
}

const ownershipLabel: Record<Project['ownership'], string | null> = {
  own: null,
  collaborative: 'Collaborative project',
  contribution: 'Open-source contribution',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const noteLabel = ownershipLabel[project.ownership]

  return (
    <article className="bg-surface border-border shadow-card flex flex-col overflow-hidden rounded-xl border transition-shadow hover:shadow-lg">
      {project.image ? (
        <ProjectCardImage image={project.image} />
      ) : (
        <ProjectCardIcon projectId={project.id} />
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-ink font-semibold">{project.title}</h3>
            {noteLabel && (
              <span className="border-border text-ink-muted rounded-full border px-2 py-0.5 text-[11px] font-medium">
                {noteLabel}
              </span>
            )}
            {project.status === 'active-development' && (
              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                In active development
              </span>
            )}
          </div>
          {project.ownershipNote && (
            <p className="text-ink-muted mt-1.5 text-xs italic">{project.ownershipNote}</p>
          )}
        </div>

        <p className="text-ink-muted text-sm leading-relaxed">{project.description}</p>

        <ul className="text-ink-muted space-y-1.5 text-sm leading-relaxed">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span
                className="text-accent mt-2 h-1 w-1 shrink-0 rounded-full bg-current"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="border-border mt-auto flex items-center gap-4 border-t pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-ink hover:text-accent inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <FiGithub aria-hidden="true" size={16} />
            {project.repoLabel}
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:text-accent inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <FiExternalLink aria-hidden="true" size={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
