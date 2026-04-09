import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectCard } from '@/components/cards/ProjectCard'
import type { Project } from '@/types'

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'TinDog',
    description: 'A fun landing page for a dog-matching app, built with Bootstrap and modern CSS animations.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/diegogualianone',
  },
  {
    id: '2',
    title: 'Mondrian Art',
    description: "A CSS Grid reproduction of Piet Mondrian's iconic abstract compositions.",
    tech: ['HTML', 'CSS Grid'],
    githubUrl: 'https://github.com/diegogualianone',
  },
  {
    id: '3',
    title: 'Portfolio v1',
    description: 'First version of my personal portfolio with scroll animations and glass morphism design.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'GSAP'],
    githubUrl: 'https://github.com/diegogualianone',
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll('.project-card-wrapper')
      if (!cards) return

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="projects" className="relative z-10 py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          subtitle="Things I've built — from experiments to production apps."
          className="mb-16"
        />

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
