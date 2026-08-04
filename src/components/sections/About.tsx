import { site } from '../../data/site'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="about-heading" eyebrow="About" title="Building things that ship" />
        <div className="max-w-3xl space-y-5 text-base leading-relaxed sm:text-lg">
          {site.aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}
