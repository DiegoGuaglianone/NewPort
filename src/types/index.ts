export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export interface Skill {
  name: string
  icon: string        // emoji fallback
  imageUrl?: string   // URL to tech logo (e.g. Simple Icons CDN)
  color?: string      // brand hex color for glow, e.g. "#61DAFB"
  years?: number
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ToastItem {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}
