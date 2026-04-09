import { useState } from 'react'
import type { ContactPayload } from '@/types'
import { useToast } from './useToast'

type Status = 'idle' | 'loading' | 'success' | 'error'
type Errors = Partial<Record<keyof ContactPayload, string>>

export function useContactForm() {
  const { toast } = useToast()
  const [fields, setFields] = useState<ContactPayload>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactPayload]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): boolean {
    const newErrors: Errors = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!fields.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
      toast({
        title: 'Message sent!',
        description: "I'll get back to you as soon as possible.",
      })
    } catch {
      setStatus('error')
      toast({
        variant: 'destructive',
        title: 'Failed to send',
        description: 'Something went wrong. Please try again.',
      })
    } finally {
      setStatus('idle')
    }
  }

  return { fields, errors, status, handleChange, handleSubmit }
}
