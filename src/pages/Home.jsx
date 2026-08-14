import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AlgaeSphere from '../components/AlgaeSphere'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    reveals.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <main ref={pageRef} className="page-enter">

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        {/* Fallback background in case video hasn't loaded yet */}
        <div className="hero-fallback" />

        {/* Background video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />
        <div className="hero-noise" />

        <div className="hero-content">
          <div className="eyebrow hero-eyebrow fade-in delay-0">
            <span className="eyebrow-dot" />
            <span className="eyebrow-label">Living Air Technology</span>
          </div>

          <h1 className="hero-headline fade-in delay-1">
            The Third Eye<br />of Nature
          </h1>

          <p className="hero-copy fade-in delay-2">
            Meet UDRAH — the world's first living air system that purifies air
            and increases oxygen indoors. Not just a purifier. A living, breathing ecosystem.
          </p>

          <div className="hero-actions fade-in delay-3">
            <Link to="/product" className="hero-btn">
              Explore Product <span className="hero-btn-arrow">→</span>
            </Link>
            <Link to="/smart-air" className="hero-btn">
              Discover Smart Air <span className="hero-btn-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ═══════════ PRODUCT INTRODUCTION ═══════════ */}
      <section className="section" id="how-it-works">
        <div className="inner">
          <div className="grid-2 prod-intro" style={{ alignItems: 'end', marginBottom: 72 }}>
            <div className="reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
                <span className="eyebrow-label dim">Living Air Technology</span>
              </div>
              <h2 className="h2">More than clean air.<br />A new way to live with it.</h2>
            </div>
            <p className="body-lg reveal reveal-delay-1">
              UDRAH brings advanced air purification and living microalgae
              technology together in one intelligent system. Designed for modern
              spaces, it doesn't just clean the air around you — it introduces a
              living biological system into the way you breathe, live, and
              experience your environment.
            </p>
          </div>

          {/* Video section */}
          <div className="media-frame reveal" style={{ aspectRatio: '16/8' }}>
            <div className="video-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              <span>Product Video — Coming Soon</span>
            </div>
            <div className="frame-label">UDRAH — System in Motion</div>
          </div>
        </div>
      </section>

      {/* ═══════════ PURIFY / LIVE / BREATHE ═══════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="inner">
          <div className="grid-3 reveal">
            <div>
              <span className="tech-index">01</span>
              <h3 className="h3" style={{ margin: '20px 0 14px' }}>Purify</h3>
              <p className="body">
                Advanced purification designed to remove airborne pollutants,
                engineered with precision at every stage of airflow.
              </p>
            </div>
            <div>
              <span className="tech-index">02</span>
              <h3 className="h3" style={{ margin: '20px 0 14px' }}>Live</h3>
              <p className="body">
                A living microalgae system forms the biological core of UDRAH —
                visibly alive, quietly at work inside its chamber.
              </p>
            </div>
            <div>
              <span className="tech-index">03</span>
              <h3 className="h3" style={{ margin: '20px 0 14px' }}>Breathe</h3>
              <p className="body">
                Through photosynthesis, the living system absorbs carbon dioxide
                and produces oxygen, in real time, indoors.
              </p>
            </div>
          </div>

          <div className="reveal prod-closing" style={{ marginTop: 64 }}>
            <p className="h3" style={{ fontWeight: 600 }}>
              Engineered for your space. Inspired by nature.
            </p>
            <Link to="/product" className="btn btn-secondary">
              Explore the Product <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FLOWLINE ═══════════ */}
      <svg className="flowline" viewBox="0 0 1280 64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="flowGradHome" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#8BDDD1" stopOpacity="0" />
            <stop offset="50%"  stopColor="#0E5B46" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8BDDD1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path style={{ stroke: 'url(#flowGradHome)' }}
          d="M0,32 C 220,8 340,56 640,32 C 940,8 1060,56 1280,32" />
        <circle className="pulse" r="3"
          style={{ offsetPath: "path('M0,32 C 220,8 340,56 640,32 C 940,8 1060,56 1280,32')" }} />
      </svg>

      {/* ═══════════ 3D TEASER ═══════════ */}
      <section className="section section-dark three-d-section">
        <div className="inner">
          <div className="three-d-grid">
            <div className="reveal three-d-text">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-label">Living Core</span>
              </div>
              <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>
                Precision on the outside.<br />
                <span style={{ color: 'var(--mint)' }}>Life on the inside.</span>
              </h2>
              <p className="body-lg on-dark" style={{ marginTop: 24, maxWidth: '44ch' }}>
                At the heart of UDRAH sits a cultured microalgae system, visible through a
                semi-transparent chamber wall. Not simulated — genuinely alive,
                continuously working inside the machine.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                <span className="chip on-dark">Live Microalgae</span>
                <span className="chip on-dark">Photosynthesis</span>
                <span className="chip on-dark">Real-time O₂</span>
              </div>
              <Link to="/product" className="btn btn-secondary-on-dark" style={{ marginTop: 40 }}>
                See the Product <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="three-d-canvas reveal reveal-delay-1">
              <AlgaeSphere />
              <div className="three-d-label">
                <span className="tech-index">Interactive — Move mouse over sphere</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ KEY BENEFITS ═══════════ */}
      <section className="section section-stone">
        <div className="inner">
          <div className="eyebrow reveal" style={{ justifyContent: 'center', marginBottom: 16 }}>
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">Why UDRAH</span>
          </div>
          <h2 className="h2 reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
            Built at the intersection of<br />engineering and biology.
          </h2>

          <div className="benefits-grid">
            {[
              {
                num: '01',
                title: 'Biological Purification',
                body: 'Living microalgae actively absorbs CO₂ and pollutants — not just capturing them, but biologically processing them in real time.',
              },
              {
                num: '02',
                title: 'Oxygen Enrichment',
                body: 'Through natural photosynthesis, UDRAH produces oxygen indoors — enriching the air quality of your space continuously.',
              },
              {
                num: '03',
                title: 'Smart Air Intelligence',
                body: 'Integrated sensors monitor particulate matter, CO₂, humidity and temperature, adapting the system to your environment automatically.',
              },
              {
                num: '04',
                title: 'Precision Engineered',
                body: 'Every mechanical component exists to keep the living core in its ideal condition — hardware in service of biology.',
              },
            ].map((b, i) => (
              <div key={b.num} className={`benefit-card reveal reveal-delay-${i % 2}`}>
                <span className="tech-index" style={{ color: 'var(--algae)', fontSize: '0.9rem' }}>{b.num}</span>
                <h3 className="h3" style={{ margin: '20px 0 14px', fontSize: '1.35rem' }}>{b.title}</h3>
                <p className="body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SMART AIR TEASER ═══════════ */}
      <section className="section section-dark">
        <div className="inner">
          <div className="grid-2 smart-teaser" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-label">Intelligence, Built In</span>
              </div>
              <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>
                Air that reports<br />on itself.
              </h2>
              <p className="body-lg on-dark" style={{ marginTop: 24, maxWidth: '44ch' }}>
                Sensors inside UDRAH continuously read particulate levels,
                CO₂, humidity and oxygen output — translating an invisible
                layer of air quality into information you can actually act on.
              </p>
              <Link to="/smart-air" className="btn btn-secondary-on-dark" style={{ marginTop: 36 }}>
                See Smart Air <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="media-frame reveal reveal-delay-1" style={{ aspectRatio: '4/5' }}>
              <div className="smart-hud">
                {[
                  { label: 'PM 2.5', value: '—', unit: 'μg/m³' },
                  { label: 'CO₂',   value: '—', unit: 'ppm' },
                  { label: 'O₂',    value: '—', unit: '%' },
                  { label: 'AQI',   value: '—', unit: 'index' },
                ].map(m => (
                  <div key={m.label} className="hud-metric">
                    <span className="hud-label">{m.label}</span>
                    <span className="hud-value">{m.value}</span>
                    <span className="hud-unit">{m.unit}</span>
                  </div>
                ))}
              </div>
              <div className="frame-label">Sensing Every Cubic Meter</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT TEASER ═══════════ */}
      <section className="section section-stone">
        <div className="inner">
          <div className="grid-2 about-teaser" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
                <span className="eyebrow-label dim">Why UDRAH</span>
              </div>
              <h2 className="h2">
                Built at the intersection of engineering and biology.
              </h2>
              <p className="body-lg" style={{ marginTop: 24 }}>
                UDRAH exists because purification alone was never the whole
                answer. We design at the meeting point of precision hardware and
                living systems — so the air in your space isn't just filtered,
                it's actively renewed.
              </p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: 36 }}>
                About Us <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="panel reveal reveal-delay-1" style={{ padding: '48px 44px' }}>
              <p className="h3" style={{ fontWeight: 500, lineHeight: 1.3 }}>
                "Precision on the outside.<br />Life on the inside."
              </p>
              <div className="divider" style={{ margin: '32px 0' }} />
              <p className="body">
                The principle behind every decision we make — from the geometry
                of the chamber to the culture of algae living inside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section section-dark cta-section">
        <div className="cta-bg" aria-hidden="true" />
        <div className="inner cta-inner reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" />
            <span className="eyebrow-label">Living Air Technology</span>
          </div>
          <h2 className="display" style={{ color: 'var(--warmwhite)', textAlign: 'center' }}>
            Breathe Differently.
          </h2>
          <p className="body-lg on-dark cta-copy">
            UDRAH brings advanced air purification and living microalgae
            technology into one beautifully engineered system.
          </p>
          <div className="cta-actions">
            <Link to="/reserve" className="btn btn-primary-on-dark">
              Be The Member <span className="btn-arrow">→</span>
            </Link>
            <Link to="/product" className="btn btn-secondary-on-dark">
              Explore UDRAH <span className="btn-arrow">→</span>
            </Link>
          </div>
          <p className="label cta-tagline">Precision engineered. Naturally alive.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
