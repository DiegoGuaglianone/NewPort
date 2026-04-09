import { useEffect, useRef, useState } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lenis = useLenis()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(href: string) {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) lenis.scrollTo(target as HTMLElement, { offset: -80 })
  }

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-3 glass border-b border-white/5' : 'py-6'
      )}
    >
      <nav className="section-padding max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => lenis.scrollTo(0)}
          className="text-lg font-display font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          DG<span className="gradient-text">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
        >
          Let's talk
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={cn('w-5 h-px bg-white transition-all duration-300', menuOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('w-5 h-px bg-white transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={cn('w-5 h-px bg-white transition-all duration-300', menuOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300',
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <ul className="section-padding flex flex-col gap-4 py-4 border-t border-white/5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className="text-white/70 hover:text-white transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
