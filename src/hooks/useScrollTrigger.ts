import { useEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface Options {
  animation: gsap.TweenVars
  start?: string
  once?: boolean
}

export function useScrollTrigger(
  ref: RefObject<Element | null>,
  { animation, start = 'top 85%', once = true }: Options
) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    gsap.set(el, { opacity: 0, y: 40 })
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ...animation }),
    })
    return () => st.kill()
  }, [ref, animation, start, once])
}
