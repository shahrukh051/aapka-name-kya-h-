import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './PageHero.css'

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    reveals.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <main className="page-enter">

      {/* Page Hero */}
      <section className="page-hero section-dark">
        <div className="page-hero-bg">
          <div className="page-hero-glow" />
        </div>
        <div className="inner page-hero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />
            <span className="eyebrow-label">The Product</span>
          </div>
          <h1 className="display reveal" style={{ color: 'var(--warmwhite)', maxWidth: '18ch' }}>
            A working ecosystem, engineered like an instrument.
          </h1>
          <p className="body-lg on-dark reveal reveal-delay-1" style={{ maxWidth: '52ch', marginTop: 28 }}>
            UDRAH houses a living microalgae culture inside a precision-machined chamber —
            purifying air mechanically while the biological core absorbs CO₂ and releases
            oxygen, visibly, in real time.
          </p>
        </div>
      </section>

      {/* Studio shot placeholder */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="inner">
          <div className="media-frame reveal" style={{ aspectRatio: '16/9', marginTop: -80, zIndex: 2, position: 'relative' }}>
            <div className="video-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="3" width="20" height="18" rx="3"/>
                <polygon points="9 8 17 12 9 16 9 8"/>
              </svg>
              <span>Studio Photography — Coming Soon</span>
            </div>
            <div className="frame-label">UDRAH — Studio Reference</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">How It Works</span>
          </div>
          <h2 className="h2 reveal" style={{ maxWidth: '22ch', marginBottom: 72 }}>Three systems, one continuous cycle.</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line-soft-dark)', border: '1px solid var(--line-soft-dark)', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { id: '01 / Purify', title: 'Mechanical purification', body: 'Air is drawn through a graded filtration stage engineered to capture particulate matter, allergens and airborne pollutants before it ever reaches the biological chamber — precision hardware doing what hardware does best.' },
              { id: '02 / Live',   title: 'A living biological core', body: 'At the center of UDRAH sits a cultured microalgae system, visible through a semi-transparent chamber wall. It\'s maintained, not simulated — a genuinely living organism working continuously inside the machine.' },
              { id: '03 / Breathe',title: 'Photosynthetic oxygen output', body: 'As the algae photosynthesizes, it draws in carbon dioxide and releases oxygen into your space — a slow, natural exchange happening at a scale you can actually feel indoors.' },
            ].map((row, i) => (
              <div key={row.id} className={`reveal reveal-delay-${i}`}
                style={{ background: 'var(--warmwhite)', padding: '48px 40px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 32, alignItems: 'start' }}>
                <span className="tech-index" style={{ color: 'var(--algae)', fontSize: '0.85rem' }}>{row.id}</span>
                <div>
                  <h3 className="h3" style={{ fontSize: '1.4rem' }}>{row.title}</h3>
                  <p className="body" style={{ marginTop: 14, maxWidth: '58ch' }}>{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowline */}
      <svg className="flowline" viewBox="0 0 1280 64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="flowP" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8BDDD1" stopOpacity="0" />
            <stop offset="50%" stopColor="#19A878" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8BDDD1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path style={{ stroke: 'url(#flowP)' }} d="M0,32 C 220,54 340,10 640,32 C 940,54 1060,10 1280,32" />
        <circle className="pulse" r="3" style={{ offsetPath: "path('M0,32 C 220,54 340,10 640,32 C 940,54 1060,10 1280,32')" }} />
      </svg>

      {/* Materials */}
      <section className="section section-charcoal">
        <div className="inner grid-2" style={{ alignItems: 'center' }}>
          <div className="reveal">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span className="eyebrow-label">Materials &amp; Detail</span>
            </div>
            <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>Built like a precision instrument, not an appliance.</h2>
            <p className="body-lg on-dark" style={{ marginTop: 24, maxWidth: '46ch' }}>
              Brushed metal housing, soft-touch surfaces and edge-lit detailing reflect a single idea —
              that a living system deserves an enclosure as considered as the biology inside it.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 36 }}>
              {['Brushed aluminum housing','Semi-transparent chamber','Edge-lit status ring'].map(t => (
                <span key={t} className="chip on-dark">{t}</span>
              ))}
            </div>
          </div>
          <div className="media-frame reveal reveal-delay-1" style={{ aspectRatio: '4/5' }}>
            <div className="frame-label">Chamber — Macro Detail</div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section">
        <div className="inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">Specifications</span>
          </div>
          <h2 className="h2 reveal" style={{ marginBottom: 56 }}>Designed for real rooms.</h2>
          <div className="reveal">
            {[
              ['Coverage area',   'Up to 40m² per unit'],
              ['Biological core', 'Live cultured microalgae'],
              ['Filtration stage','Multi-layer particulate filtration'],
              ['Monitoring',      'Real-time air quality & oxygen sensing'],
              ['Maintenance',     'Guided care cycle via companion app'],
            ].map(([k, v]) => (
              <React.Fragment key={k}>
                <div className="divider" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '22px 0' }}>
                  <span className="body" style={{ color: 'var(--obsidian)' }}>{k}</span>
                  <span className="body">{v}</span>
                </div>
              </React.Fragment>
            ))}
            <div className="divider" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="inner reveal" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>Ready to bring UDRAH home?</h2>
          <p className="body-lg on-dark" style={{ marginTop: 18 }}>Founding units are limited each cycle. Reserve your place in line.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 40 }}>
            <Link to="/reserve" className="btn btn-primary-on-dark">Be The Member <span className="btn-arrow">→</span></Link>
            <Link to="/smart-air" className="btn btn-secondary-on-dark">See Smart Air <span className="btn-arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
