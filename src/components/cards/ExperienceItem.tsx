import { Reveal } from '../common/Reveal'
import type { ExperienceEntry } from '../../types/content'

interface ExperienceItemProps {
  entry: ExperienceEntry
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <Reveal
      as="li"
      className="border-border grid gap-1 border-l-2 py-2 pl-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
    >
      <div>
        <p className="text-ink-muted text-sm font-medium">
          {entry.startDate} – {entry.endDate}
        </p>
        <p className="font-display text-ink mt-1 text-lg font-semibold">
          {entry.organizationHref ? (
            <a
              href={entry.organizationHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              {entry.organization}
            </a>
          ) : (
            entry.organization
          )}
        </p>
        <p className="text-ink-muted text-sm">{entry.role}</p>
      </div>

      <ul className="text-ink-muted mt-3 space-y-2 text-sm leading-relaxed sm:mt-0">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span
              className="text-accent mt-2 h-1 w-1 shrink-0 rounded-full bg-current"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
