import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './PageHero.css'

export default function SmartAir() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    reveals.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  const metrics = [
    { id: 'PM 2.5', name: 'Particulate matter', body: 'Fine airborne particles tracked in real time as they\'re filtered from your space.' },
    { id: 'CO₂',   name: 'Carbon dioxide',    body: 'The exact input the algae chamber is drawing down as it works.' },
    { id: 'O₂',    name: 'Oxygen output',     body: 'Live measurement of the oxygen your living system is producing.' },
    { id: 'RH',    name: 'Humidity',          body: 'Ambient moisture, monitored to keep the biological core in its optimal range.' },
    { id: 'TEMP',  name: 'Chamber temperature',body: 'The internal condition the culture depends on to stay healthy.' },
    { id: 'FLOW',  name: 'Airflow rate',      body: 'How much air is moving through the system, adjusted automatically to your room.' },
  ]

  return (
    <main className="page-enter">

      <section className="page-hero section-dark">
        <div className="page-hero-bg"><div className="page-hero-glow" /></div>
        <div className="inner page-hero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />
            <span className="eyebrow-label">Smart Air</span>
          </div>
          <h1 className="display reveal" style={{ color: 'var(--warmwhite)', maxWidth: '18ch' }}>
            Air that reports on itself, in real time.
          </h1>
          <p className="body-lg on-dark reveal reveal-delay-1" style={{ maxWidth: '52ch', marginTop: 28 }}>
            A network of sensors runs continuously inside every UDRAH unit — reading the air,
            tracking the biological core, and turning both into information you can understand and act on.
          </p>
        </div>
      </section>

      {/* Dashboard placeholder */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="inner">
          <div className="media-frame reveal" style={{ aspectRatio: '16/9', marginTop: -80, zIndex: 2, position: 'relative' }}>
            <div className="video-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="3" width="20" height="18" rx="3"/>
                <line x1="8" y1="10" x2="8" y2="17"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="16" y1="13" x2="16" y2="17"/>
              </svg>
              <span>Dashboard Preview — Coming Soon</span>
            </div>
            <div className="frame-label">Dashboard — Live Reading</div>
          </div>
        </div>
      </section>

      {/* Metrics grid */}
      <section className="section">
        <div className="inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">What It Reads</span>
          </div>
          <h2 className="h2 reveal" style={{ maxWidth: '22ch', marginBottom: 64 }}>Six signals, continuously monitored.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line-soft-dark)', border: '1px solid var(--line-soft-dark)', borderRadius: 16, overflow: 'hidden' }}>
            {metrics.map((m, i) => (
              <div key={m.id} className={`reveal reveal-delay-${i % 3}`}
                style={{ background: 'var(--warmwhite)', padding: '44px 36px' }}>
                <span className="tech-index" style={{ fontSize: '1.1rem', fontWeight: 700 }}>{m.id}</span>
                <h3 className="h3" style={{ margin: '18px 0 12px', fontSize: '1.25rem' }}>{m.name}</h3>
                <p className="body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowline */}
      <svg className="flowline" viewBox="0 0 1280 64" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="flowS" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8BDDD1" stopOpacity="0" />
            <stop offset="50%" stopColor="#73E6C0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8BDDD1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path style={{ stroke: 'url(#flowS)' }} d="M0,32 C 220,10 340,54 640,32 C 940,10 1060,54 1280,32" />
        <circle className="pulse" r="3" style={{ offsetPath: "path('M0,32 C 220,10 340,54 640,32 C 940,10 1060,54 1280,32')" }} />
      </svg>

      {/* Adaptive intelligence */}
      <section className="section section-charcoal">
        <div className="inner grid-2" style={{ alignItems: 'center' }}>
          <div className="media-frame reveal" style={{ aspectRatio: '4/5', order: 2 }}>
            <div className="frame-label">Adaptive Response</div>
          </div>
          <div className="reveal" style={{ order: 1 }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span className="eyebrow-label">Adaptive Intelligence</span>
            </div>
            <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>It doesn't just measure. It adjusts.</h2>
            <p className="body-lg on-dark" style={{ marginTop: 24, maxWidth: '46ch' }}>
              When particulate levels rise, UDRAH increases airflow. When the chamber's conditions drift,
              it self-corrects to protect the living core. Sensing and response run as one continuous loop —
              no manual tuning required.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 36 }}>
              {['Automatic airflow adjustment','Chamber self-regulation','Companion app alerts'].map(t => (
                <span key={t} className="chip on-dark">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companion app teaser */}
      <section className="section">
        <div className="inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" style={{ background: 'var(--algae)' }} />
            <span className="eyebrow-label dim">From Your Pocket</span>
          </div>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <h2 className="h2 reveal" style={{ maxWidth: '18ch' }}>Your room's air, on your screen.</h2>
            <p className="body-lg reveal reveal-delay-1">
              The UDRAH companion app shows live readings from every unit in your space, sends care reminders
              for the biological core, and gives you a clear history of how your air has changed over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="inner reveal" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="h2" style={{ color: 'var(--warmwhite)' }}>See the intelligence in your own space.</h2>
          <p className="body-lg on-dark" style={{ marginTop: 18 }}>Reserve UDRAH and get early access to the companion app.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 40 }}>
            <Link to="/reserve"  className="btn btn-primary-on-dark">Be The Member <span className="btn-arrow">→</span></Link>
            <Link to="/product"  className="btn btn-secondary-on-dark">Explore the Product <span className="btn-arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
