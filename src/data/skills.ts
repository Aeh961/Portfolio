import type { SkillCategory } from '../types/content'

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Java', 'Python', 'Kotlin', 'Swift', 'C#', 'JavaScript', 'TypeScript', 'SQL'].map(
      (name) => ({ name }),
    ),
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    skills: [
      'LLMs',
      'ONNX Runtime',
      'Reinforcement Learning',
      'Prompt Engineering',
      'Semantic Search',
      'AI Agents',
      'Mobile AI',
      'RAG',
    ].map((name) => ({ name })),
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Android', 'Jetpack Compose'].map(
      (name) => ({ name }),
    ),
  },
  {
    id: 'cloud-tools',
    label: 'Cloud / Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Firebase', 'Prisma', 'PostgreSQL'].map((name) => ({
      name,
    })),
  },
]
