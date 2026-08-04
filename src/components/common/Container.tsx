import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-content mx-auto w-full px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
