import type { SkillCategory } from '../../types/content'
import { Badge } from '../common/Badge'
import { Reveal } from '../common/Reveal'

interface SkillCategoryCardProps {
  category: SkillCategory
  delay?: number
}

export function SkillCategoryCard({ category, delay = 0 }: SkillCategoryCardProps) {
  return (
    <Reveal delay={delay} className="bg-surface border-border border p-6">
      <h3 className="font-display text-ink mb-4 text-lg font-semibold">{category.label}</h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </Reveal>
  )
}
