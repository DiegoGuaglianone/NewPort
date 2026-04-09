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
  icon: string
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
