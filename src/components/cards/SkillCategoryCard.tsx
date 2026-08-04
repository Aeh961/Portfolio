import type { SkillCategory } from '../../types/content'
import { Badge } from '../common/Badge'

interface SkillCategoryCardProps {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="bg-surface border-border shadow-card rounded-xl border p-6">
      <h3 className="text-ink mb-4 font-semibold">{category.label}</h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </div>
  )
}
