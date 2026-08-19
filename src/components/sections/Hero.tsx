import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { site } from '../../data/site'
import { Container } from '../common/Container'

export function Hero() {
  const github = site.social.find((link) => link.icon === 'github')
  const linkedin = site.social.find((link) => link.icon === 'linkedin')

  return (
    <section aria-labelledby="hero-heading" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap gap-2">
          {site.roleTags.map((tag) => (
            <span
              key={tag}
              className="border-border text-ink-muted rounded-full border px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          id="hero-heading"
          className="text-display mt-6 max-w-3xl font-semibold tracking-tight text-balance"
        >
          {site.heroHeadline}
        </h1>

        <p className="text-ink-muted mt-6 max-w-2xl text-lg text-balance">{site.heroSubheadline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-accent text-accent-ink inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            View Projects
            <FiArrowRight aria-hidden="true" size={16} />
          </a>
          <a
            href="#contact"
            className="border-border text-ink hover:border-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              aria-label={github.label}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              <FiGithub aria-hidden="true" size={20} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label={linkedin.label}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              <FiLinkedin aria-hidden="true" size={20} />
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
