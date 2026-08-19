import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { site } from '../../data/site'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'

const icons = { github: FiGithub, linkedin: FiLinkedin, email: FiMail }

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Let's talk" />

        <div className="max-w-2xl">
          <p className="text-ink-muted text-lg leading-relaxed">
            I'm open to software engineering, AI/ML, and research roles. The fastest way to reach me
            is email — I'll get back to you quickly.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="text-accent mt-6 inline-block text-xl font-semibold break-all hover:underline"
          >
            {site.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {site.social
              .filter((link) => link.icon !== 'email')
              .map((link) => {
                const Icon = icons[link.icon]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-border text-ink hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <Icon aria-hidden="true" size={16} />
                    {link.label}
                  </a>
                )
              })}
          </div>
        </div>
      </Container>
    </section>
  )
}
