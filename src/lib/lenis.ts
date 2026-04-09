import Lenis from 'lenis'
import { gsap } from './gsap'

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 1.5,
})

gsap.ticker.add((time: number) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
