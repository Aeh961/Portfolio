import type { ProjectImage } from '../../types/content'

interface ProjectCardImageProps {
  image: ProjectImage
}

export function ProjectCardImage({ image }: ProjectCardImageProps) {
  return (
    <div className="from-accent-muted to-surface flex aspect-[16/10] items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-br p-4">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full rounded-md object-contain shadow-sm"
      />
    </div>
  )
}
