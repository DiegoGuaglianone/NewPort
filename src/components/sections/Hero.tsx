import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useLenis } from '@/hooks/useLenis'
import { Button } from '@/components/ui/button'
import { GradientText } from '@/components/common/GradientText'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

  useGSAP(
    () => {
      const chars = titleRef.current?.querySelectorAll('.char')
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      if (chars) {
        tl.from(chars, {
          y: 100,
          opacity: 0,
          rotateX: -40,
          stagger: 0.04,
          duration: 1,
          // FIX: GSAP leaves an inline `transform` on each .char span after the
          // animation ends. That inline transform promotes each span to its own
          // compositing layer, which breaks the parent GradientText's
          // `background-clip: text` gradient — the browser can't paint the
          // gradient through isolated child compositing layers, so the text
          // stays invisible. `clearProps: 'transform'` tells GSAP to remove the
          // inline style once the tween completes, restoring normal rendering
          // and letting the gradient show through correctly.
          clearProps: 'transform',
        })
      }

      tl.from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
      tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      tl.from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, '-=0.2')
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center section-padding text-center"
    >
      <p
        className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 opacity-0 animate-fade-up"
        style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
      >
        Hey, I'm
      </p>

      {/* Main heading with split chars */}
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-4"
        style={{ perspective: '800px' }}
        aria-label="Diego Gualianone"
      >
        {'Diego'.split('').map((char, i) => (
          <span key={`name-${i}`} className="char inline-block">
            {char}
          </span>
        ))}
        <br />
        <GradientText animate>
          {'Guaglianone'.split('').map((char, i) => (
            <span key={`last-${i}`} className="char inline-block">
              {char}
            </span>
          ))}
        </GradientText>
      </h1>

      <p ref={subtitleRef} className="text-xl md:text-2xl text-white/50 font-light mb-3">
        Full Stack Developer
      </p>

      <p className="text-white/30 text-sm mb-10">
        React · TypeScript · C# · ASP.NET Core · MySql
      </p>

      {/* CTA buttons */}
      <div ref={ctaRef} className="flex flex-wrap items-center gap-4 justify-center">
        <Button
          size="lg"
          className="rounded-full px-8 bg-primary/90 hover:bg-primary border-0 shadow-lg shadow-primary/20"
          onClick={() => {
            const el = document.querySelector('#contact')
            if (el) lenis.scrollTo(el as HTMLElement, { offset: -80 })
          }}
        >
          Let's work together
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8"
          onClick={() => {
            const el = document.querySelector('#projects')
            if (el) lenis.scrollTo(el as HTMLElement, { offset: -80 })
          }}
        >
          View my work
        </Button>

        <div className="flex items-center gap-3 ml-2">
          <a
            href="https://github.com/DiegoGuaglianone"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/diego-guaglianone"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-primary"
            style={{ height: '40%', animation: 'scroll-line 1.5s ease-in-out infinite' }}
          />
        </div>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}
