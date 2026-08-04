interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
}

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-accent mb-2 text-sm font-semibold tracking-wide uppercase">{eyebrow}</p>
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
