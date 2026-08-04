import {
  FiActivity,
  FiBriefcase,
  FiCode,
  FiCompass,
  FiCpu,
  FiFileText,
  FiMap,
  FiMusic,
  FiShield,
  FiTerminal,
  FiUsers,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

const iconByProjectId: Record<string, IconType> = {
  unskunked: FiMap,
  'job-finder': FiBriefcase,
  tinymusician: FiMusic,
  'union-campaign-tracker': FiUsers,
  identifyhub: FiShield,
  'neoracer-mujoco': FiCpu,
  'neoracer-rl': FiActivity,
  'build-interpreter': FiTerminal,
  'contract-answerer': FiFileText,
  daleelna: FiCompass,
}

interface ProjectCardIconProps {
  projectId: string
}

export function ProjectCardIcon({ projectId }: ProjectCardIconProps) {
  const Icon = iconByProjectId[projectId] ?? FiCode

  return (
    <div
      aria-hidden="true"
      className="from-accent-muted to-surface flex aspect-[16/10] items-center justify-center rounded-t-xl bg-gradient-to-br"
    >
      <Icon className="text-accent" size={40} strokeWidth={1.5} />
    </div>
  )
}
