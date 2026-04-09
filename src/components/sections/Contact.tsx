import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SocialLink } from '@/components/common/SocialLink'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useContactForm } from '@/hooks/useContactForm'
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { fields, errors, status, handleChange, handleSubmit } = useContactForm()

  useGSAP(
    () => {
      gsap.from(formRef.current, {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="contact" className="relative z-10 py-32 section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            subtitle="Have a project in mind or just want to say hi? My inbox is always open."
            className="mb-12"
          />
          <div className="flex flex-col gap-4">
            <SocialLink href="mailto:diegogualianone.dev@gmail.com" icon={Mail} label="diegogualianone.dev@gmail.com" external={false} />
            <SocialLink href="https://github.com/diegogualianone" icon={Github} label="github.com/diegogualianone" />
            <SocialLink href="https://linkedin.com/in/diegogualianone" icon={Linkedin} label="linkedin.com/in/diegogualianone" />
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-white/60">Name</label>
            <Input
              id="name" name="name" value={fields.name} onChange={handleChange}
              placeholder="Your name"
              className={cn(errors.name && 'border-destructive/60 focus-visible:ring-destructive')}
              autoComplete="name"
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-white/60">Email</label>
            <Input
              id="email" name="email" type="email" value={fields.email} onChange={handleChange}
              placeholder="you@example.com"
              className={cn(errors.email && 'border-destructive/60 focus-visible:ring-destructive')}
              autoComplete="email"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-white/60">Message</label>
            <Textarea
              id="message" name="message" value={fields.message} onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className={cn(errors.message && 'border-destructive/60 focus-visible:ring-destructive')}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" size="lg" disabled={status === 'loading'} className="rounded-full mt-2 shadow-lg shadow-primary/20">
            {status === 'loading' ? (
              <><Loader2 className="w-4 h-4 animate-spin" />Sending...</>
            ) : (
              'Send message'
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
