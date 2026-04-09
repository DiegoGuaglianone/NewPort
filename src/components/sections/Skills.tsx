import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SkillCard } from '@/components/cards/SkillCard'
import type { Skill } from '@/types'

const CDN = 'https://cdn.simpleicons.org'

const SKILLS: Skill[] = [
  {
    name: 'React',
    icon: '⚛️',
    imageUrl: `${CDN}/react/61DAFB`,
    color: '#61DAFB',
    years: 3,
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    imageUrl: `${CDN}/typescript/3178C6`,
    color: '#3178C6',
    years: 2,
  },
  {
    name: 'Node.js',
    icon: '🟢',
    imageUrl: `${CDN}/nodedotjs/339933`,
    color: '#339933',
    years: 3,
  },
  {
    name: 'Vite',
    icon: '⚡',
    imageUrl: `${CDN}/vite/646CFF`,
    color: '#646CFF',
    years: 2,
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    imageUrl: `${CDN}/tailwindcss/06B6D4`,
    color: '#06B6D4',
    years: 2,
  },
  {
    name: 'Supabase',
    icon: '🗄️',
    imageUrl: `${CDN}/supabase/3ECF8E`,
    color: '#3ECF8E',
    years: 1,
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    imageUrl: `${CDN}/postgresql/4169E1`,
    color: '#4169E1',
    years: 2,
  },
  {
    name: 'GSAP',
    icon: '🎬',
    imageUrl: `${CDN}/greensock/88CE02`,
    color: '#88CE02',
    years: 1,
  },
  {
    name: 'Git',
    icon: '🌿',
    imageUrl: `${CDN}/git/F05032`,
    color: '#F05032',
    years: 3,
  },
  {
    name: 'Vercel',
    icon: '▲',
    imageUrl: `${CDN}/vercel/ffffff`,
    color: '#ffffff',
    years: 2,
  },
  {
    name: 'Python',
    icon: '🐍',
    imageUrl: `${CDN}/python/3776AB`,
    color: '#3776AB',
    years: 2,
  },
  {
    name: 'Java',
    icon: '☕',
    imageUrl: `${CDN}/openjdk/ED8B00`,
    color: '#ED8B00',
    years: 2,
  },
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
      <div
        ref={pinRef}
        className="h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="section-padding max-w-7xl mx-auto w-full mb-12">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills &amp; Experience"
            subtitle="Technologies I work with daily to build modern web applications."
          />
        </div>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-6 pl-6 md:pl-24"
          style={{ width: 'max-content' }}
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
