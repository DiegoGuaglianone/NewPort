import { useRef, useCallback } from 'react'
import { gsap } from '@/lib/gsap'
import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const dx = e.clientX - cx
    const dy = e.clientY - cy

    const maxDeg = 18
    const rotateY = (dx / (rect.width / 2)) * maxDeg
    const rotateX = -(dy / (rect.height / 2)) * maxDeg

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    })

    // Glare: position as percentage within the card
    const glareX = ((e.clientX - rect.left) / rect.width) * 100
    const glareY = ((e.clientY - rect.top) / rect.height) * 100
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`
    glare.style.opacity = '1'
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.9,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto',
    })

    glare.style.opacity = '0'
  }, [])

  const hasImage = Boolean(skill.imageUrl)

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex-shrink-0 w-48 rounded-2xl p-8 flex flex-col items-center gap-4 cursor-default select-none relative overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-violet-500/30 hover:shadow-[0_0_24px_rgba(155,109,255,0.12)]"
      style={{
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      aria-label={`${skill.name}${skill.years ? `, ${skill.years} years experience` : ''}`}
    >
      {/* Holographic glare overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{ opacity: 0, zIndex: 10 }}
        aria-hidden="true"
      />

      {/* Brand glow blob behind logo */}
      <div
        className="absolute w-20 h-20 rounded-full blur-2xl opacity-25"
        style={{
          backgroundColor: skill.color ?? 'hsl(262 83% 68%)',
          transform: 'translateZ(-5px)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Logo / emoji — floats forward in 3D */}
      <div
        className="relative z-10 w-14 h-14 flex items-center justify-center"
        style={{ transform: 'translateZ(50px)' }}
      >
        {hasImage ? (
          <img
            src={skill.imageUrl}
            alt={skill.name}
            width={56}
            height={56}
            className="w-14 h-14 object-contain drop-shadow-lg"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const sibling = target.nextElementSibling as HTMLElement | null
              if (sibling) sibling.style.display = 'flex'
            }}
          />
        ) : null}
        {/* Emoji fallback — shown when no imageUrl or image errors */}
        <span
          role="img"
          aria-label={skill.name}
          className="text-4xl leading-none"
          style={{ display: hasImage ? 'none' : 'flex' }}
        >
          {skill.icon}
        </span>
      </div>

      {/* Name */}
      <span
        className="relative z-10 text-sm font-semibold text-white/85 text-center leading-tight tracking-wide"
        style={{ transform: 'translateZ(20px)' }}
      >
        {skill.name}
      </span>

      {/* Years */}
      {skill.years !== undefined && (
        <span
          className="relative z-10 text-xs font-medium text-white/35 tracking-wider uppercase"
          style={{ transform: 'translateZ(12px)' }}
        >
          {skill.years}y exp.
        </span>
      )}
    </div>
  )
}
