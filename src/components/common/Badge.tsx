import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-accent-muted text-accent px-2.5 py-1 text-xs font-medium">{children}</span>
  )
}
