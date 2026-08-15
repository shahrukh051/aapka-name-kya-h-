import React, { useState, useRef } from 'react'
import './ReelCarousel.css'

const REELS = [
  { id: 'DblUDh3BpYs', label: 'UDRAH Reel 1' },
  { id: 'DbcbmQrJ-pm', label: 'UDRAH Reel 2' },
  { id: 'DbS45LuBHyH', label: 'UDRAH Reel 3' },
  { id: 'DbKrknDo5mb', label: 'UDRAH Reel 4' },
  { id: 'DbDrSAsSNlb', label: 'UDRAH Reel 5' },
  { id: 'DZIWj1uMFeo', label: 'UDRAH Reel 6' },
]

export default function ReelCarousel() {
  const [active, setActive] = useState(0)
  const [animDir, setAnimDir] = useState(null)
  const dragStart = useRef(null)
  const n = REELS.length

  const go = (dir) => {
    setAnimDir(dir)
    setActive(i => (i + dir + n) % n)
    setTimeout(() => setAnimDir(null), 600)
  }

  const getPos = (index) => {
    let diff = index - active
    if (diff > n / 2) diff -= n
    if (diff < -n / 2) diff += n
    return diff
  }

  const onMouseDown = e => { dragStart.current = e.clientX }
  const onMouseUp   = e => {
    if (dragStart.current === null) return
    const dx = e.clientX - dragStart.current
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1)
    dragStart.current = null
  }
  const onTouchStart = e => { dragStart.current = e.touches[0].clientX }
  const onTouchEnd   = e => {
    if (dragStart.current === null) return
    const dx = e.changedTouches[0].clientX - dragStart.current
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1)
    dragStart.current = null
  }

  return (
    <div
      className="rc-carousel"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="rc-scene">
        {REELS.map((reel, i) => {
          const pos = getPos(i)
          if (Math.abs(pos) > 1) return null

          const cls = pos === 0 ? 'rc-center' : pos < 0 ? 'rc-left' : 'rc-right'

          return (
            <div
              key={reel.id}
              className={`rc-card ${cls}`}
              onClick={() => pos !== 0 && go(pos)}
            >
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={reel.label}
                loading="lazy"
              />
              {/* overlay on side cards — prevents iframe interaction + dims */}
              {pos !== 0 && (
                <div className="rc-side-overlay">
                  <span className="rc-side-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" opacity="0.7">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Nav buttons */}
      <button className="rc-nav rc-nav-prev" onClick={() => go(-1)} aria-label="Previous reel">
        ‹
      </button>
      <button className="rc-nav rc-nav-next" onClick={() => go(1)} aria-label="Next reel">
        ›
      </button>

      {/* Dot indicators */}
      <div className="rc-dots">
        {REELS.map((_, i) => (
          <button
            key={i}
            className={`rc-dot ${i === active ? 'rc-dot-on' : ''}`}
            onClick={() => go(i - active)}
            aria-label={`Reel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
