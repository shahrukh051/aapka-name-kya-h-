import { useEffect, useRef } from 'react'

export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll ? el.querySelectorAll('.reveal') : [el]
    if (targets.length === 0 && el.classList.contains('reveal')) {
      targets = [el]
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: options.threshold || 0.12, rootMargin: options.rootMargin || '0px 0px -60px 0px' })

    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
