import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollTrigger(ref, { animation: { ease: 'power3.out' } })

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-lg max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
