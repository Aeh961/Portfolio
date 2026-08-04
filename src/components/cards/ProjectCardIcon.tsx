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
  title: string
}

export function ProjectCardIcon({ projectId, title }: ProjectCardIconProps) {
  const Icon = iconByProjectId[projectId] ?? FiCode

  return (
    <div
      aria-hidden="true"
      className="bg-accent-muted relative flex aspect-[16/10] items-center justify-center overflow-hidden"
    >
      <span className="font-display text-accent/25 absolute -bottom-6 -left-2 text-[7rem] leading-none font-semibold select-none">
        {title.charAt(0)}
      </span>
      <Icon className="text-accent relative" size={34} strokeWidth={1.5} />
    </div>
  )
}
