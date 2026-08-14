import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 48)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="wordmark">
            <img
              src="/logo.png"
              alt="UDRAH Industries"
              className="nav-logo"
            />
          </NavLink>

          <div className="nav-links">
            <NavLink to="/smart-air" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Smart Air
            </NavLink>
            <NavLink to="/product" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Product
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
          </div>

          <NavLink to="/reserve" className="nav-cta btn btn-primary-on-dark">
            Be The Member
          </NavLink>

          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <NavLink to="/" className="mobile-logo-link" onClick={toggleMenu}>
            <img src="/logo.png" alt="UDRAH" className="mobile-nav-logo" />
          </NavLink>
          <NavLink to="/smart-air" className="mobile-link">Smart Air</NavLink>
          <NavLink to="/product"   className="mobile-link">Product</NavLink>
          <NavLink to="/about"     className="mobile-link">About Us</NavLink>
          <NavLink to="/reserve"   className="mobile-link mobile-cta">Be The Member →</NavLink>
        </div>
      </div>
    </>
  )
}
