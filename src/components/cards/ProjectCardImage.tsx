import type { ProjectImage } from '../../types/content'

interface ProjectCardImageProps {
  image: ProjectImage
}

export function ProjectCardImage({ image }: ProjectCardImageProps) {
  return (
    <div className="bg-surface aspect-[16/10] overflow-hidden rounded-t-xl">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </div>
  )
}
