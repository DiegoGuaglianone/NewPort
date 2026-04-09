import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
  onDismiss: (id: string) => void
}

export function Toast({ id, title, description, variant = 'default', onDismiss }: ToastProps) {
  return (
    <div
      className={cn(
        'pointer-events-auto flex w-full max-w-sm items-center justify-between gap-4 rounded-lg border p-4 shadow-lg transition-all duration-300',
        variant === 'destructive'
          ? 'border-red-800 bg-red-950 text-red-100'
          : 'border-white/10 bg-neutral-900 text-white'
      )}
    >
      <div className="flex flex-col gap-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {description && <p className="text-xs text-white/60">{description}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="shrink-0 rounded-md p-1 opacity-60 hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
