interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-accent font-display mb-1 text-base italic">{eyebrow}</p>
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
