import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './PageHero.css'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    reveals.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  const principles = [
    { title: 'Engineering leads, biology thrives', body: 'Every mechanical system exists to keep the living core in ideal condition — precision in service of biology, not the other way around.' },
    { title: 'Nothing is simulated', body: 'The algae inside UDRAH is alive and maintained, not a decorative reference to nature. What you see through the chamber wall is really happening.' },
    { title: 'Legible, not mysterious', body: 'Smart Air makes the invisible visible. You should always be able to see what your air, and your living system, are actually doing.' },
    { title: 'Made to be lived with', body: 'A machine this considered belongs in view, not tucked in a corner — designed as an object worth having in the room.' },
  ]

  return (
    <main className="page-enter">

      <section className="page-hero section-dark">
        <div className="page-hero-bg"><div className="page-hero-glow" /></div>
        <div className="inner page-hero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />
            <span className="eyebrow-label">Why UDRAH</span>
          </div>
          <h1 className="display reveal" style={{ color: 'var(--warmwhite)', maxWidth: '16ch' }}>
            Precision on the outside. Life on the inside.
          </h1>
          <p className="body-lg on-dark reveal reveal-delay-1" style={{ maxWidth: '52ch', marginTop: 28 }}>
            UDRAH began with a simple observation: purification alone treats the symptom, not the source.
            We build machines that don't just clean air — they cultivate it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="inner grid-2">
          <div className="reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
              <span className="eyebrow-label dim">Our Mission</span>
            </div>
            <h2 className="h2" style={{ maxWidth: '18ch' }}>Bring a living system into the modern indoor space.</h2>
          </div>
          <p className="body-lg reveal reveal-delay-1">
            Most of a person's life happens indoors, breathing air that's been filtered but never renewed.
            UDRAH was built to change that equation — pairing precision engineering with a genuinely living
            microalgae system, so the air in your space is actively purified and actively restored,
            at the same time, in the same machine.
          </p>
        </div>
      </section>

      {/* Flowline */}
      <svg className="flowline" viewBox="0 0 1280 64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="flowA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8BDDD1" stopOpacity="0" />
            <stop offset="50%" stopColor="#0E5B46" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8BDDD1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path style={{ stroke: 'url(#flowA)' }} d="M0,32 C 220,54 340,10 640,32 C 940,54 1060,10 1280,32" />
        <circle className="pulse" r="3" style={{ offsetPath: "path('M0,32 C 220,54 340,10 640,32 C 940,54 1060,10 1280,32')" }} />
      </svg>

      {/* Principles */}
      <section className="section section-stone">
        <div className="inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">How We Work</span>
          </div>
          <h2 className="h2 reveal" style={{ maxWidth: '22ch', marginBottom: 72 }}>
            Four principles behind every UDRAH decision.
          </h2>
          <div className="grid-2 reveal" style={{ gap: 24 }}>
            {principles.map((p, i) => (
              <div key={p.title} className={`panel reveal-delay-${i % 2}`} style={{ padding: '40px 36px' }}>
                <h3 className="h3" style={{ fontSize: '1.25rem' }}>{p.title}</h3>
                <p className="body" style={{ marginTop: 14 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="inner reveal" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="h1" style={{ color: 'var(--warmwhite)', fontWeight: 500, lineHeight: 1.2, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            "The Third Eye of Nature — a way of seeing the air we usually don't."
          </p>
          <p className="label" style={{ marginTop: 32, color: 'rgba(243,242,237,0.4)' }}>UDRAH Design Principle</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="inner reveal" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="h2">Join us at the start.</h2>
          <p className="body-lg" style={{ marginTop: 18 }}>
            Founding members shape how UDRAH grows — get early access before public release.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 40 }}>
            <Link to="/reserve" className="btn btn-primary">Be The Member <span className="btn-arrow">→</span></Link>
            <Link to="/product" className="btn btn-secondary">Explore UDRAH <span className="btn-arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
