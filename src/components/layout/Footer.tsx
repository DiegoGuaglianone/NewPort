import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-10 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Diego Gualianone. Built with React + Vite.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/diegogualianone" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/diegogualianone" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:diegogualianone.dev@gmail.com" className="text-white/40 hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
