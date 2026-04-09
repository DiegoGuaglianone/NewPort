import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  className?: string
  external?: boolean
}

export function SocialLink({ href, icon: Icon, label, className, external = true }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200',
        className
      )}
    >
      <span className="relative">
        <Icon className="w-5 h-5" />
        <span className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
      </span>
      <span className="relative overflow-hidden">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  )
}
