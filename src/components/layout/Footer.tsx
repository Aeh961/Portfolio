import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { site } from '../../data/site'
import { Container } from '../common/Container'

const icons = { github: FiGithub, linkedin: FiLinkedin, email: FiMail }

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <Container className="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <p className="text-ink-muted text-sm">
          © {year} {site.name}
        </p>

        <div className="flex items-center gap-4">
          {site.social.map((link) => {
            const Icon = icons[link.icon]
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === 'email' ? undefined : '_blank'}
                rel={link.icon === 'email' ? undefined : 'noreferrer'}
                aria-label={link.label}
                className="text-ink-muted hover:text-accent transition-colors"
              >
                <Icon aria-hidden="true" size={18} />
              </a>
            )
          })}
        </div>

        <a href="#top" className="text-ink-muted hover:text-accent text-sm transition-colors">
          Back to top
        </a>
      </Container>
    </footer>
  )
}
