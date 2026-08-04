export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export interface SiteContent {
  name: string
  roleTags: string[]
  heroHeadline: string
  heroSubheadline: string
  aboutParagraphs: string[]
  email: string
  social: SocialLink[]
  resumeHref: string
}

export interface ExperienceEntry {
  id: string
  organization: string
  organizationHref?: string
  role: string
  startDate: string
  endDate: string
  location?: string
  bullets: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export type ProjectOwnership = 'own' | 'collaborative' | 'contribution'

export interface Project {
  id: string
  title: string
  description: string
  highlights: string[]
  stack: string[]
  repoUrl: string
  repoLabel: string
  ownership: ProjectOwnership
  ownershipNote?: string
  status?: 'active-development'
  liveUrl?: string
  image?: ProjectImage
  featured?: boolean
}

export interface SkillItem {
  name: string
}

export interface SkillCategory {
  id: 'languages' | 'ai-ml' | 'frameworks' | 'cloud-tools'
  label: string
  skills: SkillItem[]
}
