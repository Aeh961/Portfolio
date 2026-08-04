import type { ProjectImage } from '../../types/content'

interface ProjectCardImageProps {
  image: ProjectImage
}

export function ProjectCardImage({ image }: ProjectCardImageProps) {
  return (
    <div className="bg-accent-muted flex aspect-[16/10] items-center justify-center overflow-hidden p-4">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full border border-black/5 object-contain"
      />
    </div>
  )
}
