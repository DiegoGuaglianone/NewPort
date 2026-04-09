import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Code2, Layers, Rocket } from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'Pixel-perfect interfaces with React, TypeScript, and modern CSS. Performant, accessible, and animated.',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
  },
  {
    icon: Layers,
    title: 'Backend',
    description: 'Scalable APIs with Node.js, real-time data with Supabase, and serverless functions on Vercel.',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/20',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'CI/CD pipelines, Vercel deployments, and cloud infrastructure. Ship fast, ship confident.',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/20',
  },
]

export function ParallaxShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      const sticky = stickyRef.current
      if (!wrapper || !sticky) return

      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        pin: sticky,
        pinSpacing: false,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      tl.to(bgTextRef.current, { y: -120, ease: 'none' }, 0)
      tl.to(headingRef.current, { y: -60, ease: 'none' }, 0)

      const cards = cardsRef.current?.querySelectorAll('.parallax-card')
      cards?.forEach((card, i) => {
        tl.to(card, { y: -(40 + i * 30), ease: 'none' }, 0)
      })

      tl.to(ringRef.current, { y: -200, rotate: 45, ease: 'none' }, 0)
    },
    { scope: wrapperRef }
  )

  return (
    <div ref={wrapperRef} className="relative h-[300vh]" id="what-i-do">
      <div ref={stickyRef} className="h-screen overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto section-padding">

          {/* Decorative background text */}
          <div
            ref={bgTextRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <span
              className="text-[20vw] font-display font-black text-white leading-none"
              style={{ opacity: 0.02, letterSpacing: '-0.05em' }}
            >
              BUILD
            </span>
          </div>

          {/* Decorative ring */}
          <div
            ref={ringRef}
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            aria-hidden="true"
            style={{ border: '1px solid rgba(139,92,246,0.15)', transform: 'translate(30%, -30%)' }}
          />

          {/* Heading */}
          <div ref={headingRef} className="mb-16 relative z-10">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              What I do
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mt-3 leading-tight">
              I build things<br />
              <span className="gradient-text">that matter</span>
            </h2>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="relative z-10 grid md:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, description, color, border }) => (
              <div
                key={title}
                className={`parallax-card glass rounded-2xl p-8 border ${border} group hover:scale-[1.02] transition-transform duration-500`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
