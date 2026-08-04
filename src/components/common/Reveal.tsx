import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type RevealTag = 'div' | 'li' | 'article'

interface RevealProps {
  children: ReactNode
  as?: RevealTag
  delay?: number
  className?: string
}

export function Reveal({ children, as = 'div', delay = 0, className = '' }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, rootMargin: '0px 0px -10% 0px' })
  const Tag = as

  const revealState = inView
    ? 'motion-safe:translate-y-0 motion-safe:opacity-100'
    : 'motion-safe:translate-y-4 motion-safe:opacity-0'

  return (
    <Tag
      // @ts-expect-error -- ref type is narrowed per intrinsic tag by React; useInView's generic HTMLElement ref is compatible at runtime for the tags Reveal supports
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={`motion-safe:transition motion-safe:duration-700 motion-safe:ease-out ${revealState} ${className}`}
    >
      {children}
    </Tag>
  )
}
