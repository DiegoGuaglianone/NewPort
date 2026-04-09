import { cn } from '@/lib/utils'

interface SkillChipProps {
  name: string
  className?: string
}

export function SkillChip({ name, className }: SkillChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-white transition-all duration-200',
        className
      )}
    >
      {name}
    </span>
  )
}
