import { skills } from '../../data/skills'
import { SkillCategoryCard } from '../cards/SkillCategoryCard'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="skills-heading" eyebrow="Skills" title="Tools I work with" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} delay={(index % 2) * 80} />
          ))}
        </div>
      </Container>
    </section>
  )
}
