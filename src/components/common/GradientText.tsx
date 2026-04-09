import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = true }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text text-transparent',
        animate && 'animate-gradient-shift',
        className
      )}
      style={animate ? { backgroundSize: '200% 200%' } : undefined}
    >
      {children}
    </span>
  )
}
