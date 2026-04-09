import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SkillChip } from '@/components/common/SkillChip'

const HIGHLIGHTS = [
  { label: 'Years coding', value: '3+' },
  { label: 'Projects shipped', value: '10+' },
  { label: 'Cups of coffee', value: '∞' },
]

const TAGS = [
  'React', 'TypeScript', 'Node.js', 'Supabase',
  'Tailwind CSS', 'GSAP', 'PostgreSQL', 'Vite', 'Vercel',
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(statsRef.current?.querySelectorAll('.stat-item') ?? [], {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
      })

      gsap.from(imageRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="about" className="relative z-10 py-32 section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow="About me"
            title="Crafting digital experiences"
            className="mb-8"
          />
          <div className="space-y-4 text-white/50 leading-relaxed">
            <p>
              I'm a Full Stack Developer based in Brazil, passionate about building
              web applications that are fast, beautiful, and accessible. I love the
              intersection of design and engineering — where clean code meets great UX.
            </p>
            <p>
              Currently focused on React, TypeScript, and Node.js ecosystems,
              with a strong interest in animations and interactive interfaces.
              I believe the web should be alive — not static.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {TAGS.map((tag) => (
              <SkillChip key={tag} name={tag} />
            ))}
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-6 mt-12">
            {HIGHLIGHTS.map(({ label, value }) => (
              <div key={label} className="stat-item">
                <p className="text-3xl font-display font-bold gradient-text">{value}</p>
                <p className="text-xs text-white/40 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-full border border-primary/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-primary/5 scale-125" />

            <div className="w-full h-full rounded-full glass overflow-hidden flex items-center justify-center">
              <img
                src="/images/avatar.webp"
                alt="Diego Gualianone"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'block'
                }}
              />
              <span className="text-6xl font-display font-black gradient-text select-none hidden">
                DG
              </span>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-white/10">
              <p className="text-xs text-white/40">Available for</p>
              <p className="text-sm font-semibold text-primary">Freelance work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
