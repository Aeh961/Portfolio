import { experience } from '../../data/experience'
import { ExperienceItem } from '../cards/ExperienceItem'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Where I've worked" />
        <ol className="space-y-10">
          {experience.map((entry) => (
            <ExperienceItem key={entry.id} entry={entry} />
          ))}
        </ol>
      </Container>
    </section>
  )
}
