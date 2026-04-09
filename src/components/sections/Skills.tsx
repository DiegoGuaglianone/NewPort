import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/common/SectionHeading'

const SKILLS = [
  { name: 'React', icon: '⚛️', years: 3 },
  { name: 'TypeScript', icon: '🔷', years: 2 },
  { name: 'Node.js', icon: '🟢', years: 3 },
  { name: 'Vite', icon: '⚡', years: 2 },
  { name: 'Tailwind CSS', icon: '🎨', years: 2 },
  { name: 'Supabase', icon: '🗄️', years: 1 },
  { name: 'PostgreSQL', icon: '🐘', years: 2 },
  { name: 'GSAP', icon: '🎬', years: 1 },
  { name: 'Git', icon: '🌿', years: 3 },
  { name: 'Vercel', icon: '▲', years: 2 },
  { name: 'Python', icon: '🐍', years: 2 },
  { name: 'Java', icon: '☕', years: 2 },
  // Duplicated for seamless visual loop
  { name: 'React', icon: '⚛️', years: 3 },
  { name: 'TypeScript', icon: '🔷', years: 2 },
  { name: 'Node.js', icon: '🟢', years: 3 },
  { name: 'Vite', icon: '⚡', years: 2 },
  { name: 'Tailwind CSS', icon: '🎨', years: 2 },
  { name: 'Supabase', icon: '🗄️', years: 1 },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const track = trackRef.current
      const pin = pinRef.current
      if (!track || !pin) return

      const totalWidth = track.scrollWidth
      const viewportWidth = pin.offsetWidth

      gsap.to(track, {
        x: -(totalWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth - viewportWidth}`,
          pin: pin,
          scrub: 1,
          anticipatePin: 1,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="skills" className="relative z-10" style={{ height: '250vh' }}>
      <div ref={pinRef} className="h-screen flex flex-col justify-center overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto w-full mb-12">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills &amp; Experience"
            subtitle="Technologies I work with daily to build modern web applications."
          />
        </div>

        <div ref={trackRef} className="flex gap-6 pl-6 md:pl-24" style={{ width: 'max-content' }}>
          {SKILLS.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex-shrink-0 glass rounded-2xl p-6 w-40 flex flex-col items-center gap-3 hover:border-primary/30 transition-colors duration-300"
            >
              <span className="text-4xl" role="img" aria-label={skill.name}>
                {skill.icon}
              </span>
              <span className="text-sm font-medium text-white/80 text-center">{skill.name}</span>
              {skill.years && (
                <span className="text-xs text-white/30">{skill.years}y exp.</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
