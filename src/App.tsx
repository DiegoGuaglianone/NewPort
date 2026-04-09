import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import { AnimatedBackground } from '@/components/background'
import { Navbar, Footer } from '@/components/layout'
import { Hero, About, ParallaxShowcase, Projects, Skills, Contact } from '@/components/sections'

export default function App() {
  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ParallaxShowcase />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
