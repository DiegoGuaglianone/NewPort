import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { Github, ExternalLink } from 'lucide-react'
import { SkillChip } from '@/components/common/SkillChip'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(card, {
      rotateY: x * 16,
      rotateX: -y * 16,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  function handleMouseLeave() {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl overflow-hidden group cursor-default"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image / Color block */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/10">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-display font-black text-white/5 select-none">
              {project.title[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <SkillChip key={t} name={t} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-200"
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors duration-200"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
