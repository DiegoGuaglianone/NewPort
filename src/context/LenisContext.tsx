import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { lenis } from '@/lib/lenis'
import { ScrollTrigger } from '@/lib/gsap'

const LenisContext = createContext(lenis)

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}

export function useLenisInstance() {
  return useContext(LenisContext)
}
