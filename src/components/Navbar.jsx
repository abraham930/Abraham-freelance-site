import { useState, useEffect } from 'react'
import '../styles/navbar.css'

/* ------------------------------------------------------------------ */
/*  Edit nav links here                                                 */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: 'Work',    href: '#portfolio' },
  { label: 'How I Help', href: '#how-i-help' },
  { label: 'Services', href: '#services'  },
  { label: 'Contact', href: '#contact'   },
]

function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 700) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header role="banner">
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => handleClick(e, '#home')}
            aria-label="Abraham Santiago — Home"
          >
            Abraham<span>.</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar__link"
                  onClick={(e) => handleClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar__link navbar__link--cta"
                onClick={(e) => handleClick(e, '#contact')}
              >
                Get in Touch →
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="navbar__mobile navbar__mobile--open" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="navbar__mobile-link"
                onClick={(e) => handleClick(e, href)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar__mobile-link navbar__mobile-link--cta"
              onClick={(e) => handleClick(e, '#contact')}
            >
              Get in Touch →
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
