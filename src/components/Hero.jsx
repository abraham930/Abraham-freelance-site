import '../styles/hero.css'

/* ------------------------------------------------------------------ */
/*  EDIT YOUR HERO CONTENT HERE                                         */
/* ------------------------------------------------------------------ */
const HERO_CONTENT = {
  name:    { first: 'Abraham', last: 'Santiago' },
  tagline: (
    <>
      I build <strong>fast, professional websites</strong> for local businesses —
      designed to generate leads, simplify your sales process,
      and help you grow online.
    </>
  ),
  ctaLabel:   'See My Work',
  ctaHref:    '#portfolio',
  ctaSecLabel: 'Get in Touch',
  ctaSecHref:  '#contact',
  badge:      'Available for Projects',
}

function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__number" aria-hidden="true">01</div>

      <div className="container hero__content">
        {/* Availability badge */}
        <p className="hero__badge fade-up delay-1">
          <span className="hero__badge-dot" aria-hidden="true" />
          {HERO_CONTENT.badge}
        </p>

        {/* Name */}
        <h1 className="hero__name fade-up delay-2" aria-label={`${HERO_CONTENT.name.first} ${HERO_CONTENT.name.last}`}>
          <span className="hero__name-first">{HERO_CONTENT.name.first}</span>
          <span className="hero__name-last">{HERO_CONTENT.name.last}</span>
        </h1>

        {/* Tagline */}
        <p className="hero__tagline fade-up delay-3">
          {HERO_CONTENT.tagline}
        </p>

        {/* CTA buttons */}
        <div className="hero__actions fade-up delay-4">
          <a
            href={HERO_CONTENT.ctaHref}
            className="btn-cta"
            onClick={(e) => handleScroll(e, HERO_CONTENT.ctaHref)}
          >
            {HERO_CONTENT.ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={HERO_CONTENT.ctaSecHref}
            className="btn-ghost btn-ghost--light"
            onClick={(e) => handleScroll(e, HERO_CONTENT.ctaSecHref)}
          >
            {HERO_CONTENT.ctaSecLabel}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
