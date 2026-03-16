import '../styles/portfolio.css'

/* ------------------------------------------------------------------ */
/*  EDIT YOUR PORTFOLIO PROJECTS HERE                                   */
/*  Replace `imageSrc` with a real screenshot path when ready:         */
/*    imageSrc: '/images/aquashine-screenshot.png'                     */
/* ------------------------------------------------------------------ */
const PROJECTS = [
  {
    id:          'aquashine',
    number:      '01',
    title:       'AquaShine Car Wash',
    industry:    'Auto Care',
    url:         'abraham930.github.io/AquaShine_Car_Wash',
    liveUrl:     'https://abraham930.github.io/AquaShine_Car_Wash/',
    description: 'A premium car wash business site built to convert visitors into booked appointments. Customers can browse services, explore products, and send inquiries directly to the owner\'s inbox — no phone tag required.',
    features: [
      'Dedicated services page with booking CTA',
      'Product catalog — each item links to a contact form',
      'Inquiry form connected to Gmail via FormSubmit',
      'Mobile-first responsive design',
    ],
    imageSrc:    null, // Replace with: '/images/aquashine-screenshot.png'
    accentColor: '#0096b7',
  },
  {
    id:          'ironclad',
    number:      '02',
    title:       'IronClad Construction',
    industry:    'Construction',
    url:         'abraham930.github.io/IronClad-Contruction',
    liveUrl:     'https://abraham930.github.io/IronClad-Contruction/',
    description: 'A serious, no-nonsense contractor website that builds trust on first impression. Detailed service pages, a materials catalog, and a quote request form ensure every visitor has a clear path to becoming a lead.',
    features: [
      'Quote request form sent directly to the business email',
      'Service catalogue with scope details and pricing',
      'Materials catalog with inquiry per product',
      'Strong professional branding that converts',
    ],
    imageSrc:    null, // Replace with: '/images/ironclad-screenshot.png'
    accentColor: '#F59E0B',
  },
]

/* SVG placeholder browser mockup — replace with real <img> when ready */
function BrowserMockup({ project }) {
  const accent = project.accentColor

  return (
    <div className="portfolio__browser">
      {/* Browser chrome */}
      <div className="portfolio__browser-bar">
        <span className="portfolio__browser-dot" />
        <span className="portfolio__browser-dot" />
        <span className="portfolio__browser-dot" />
        <span className="portfolio__browser-url">{project.url}</span>
      </div>

      {/* Page skeleton */}
      <div className="portfolio__browser-body">
        {/* Fake hero */}
        <div
          style={{
            background: project.id === 'aquashine'
              ? 'linear-gradient(135deg, #0B1221 0%, #0d1a30 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '2px',
            padding: '14px',
            marginBottom: '12px',
          }}
        >
          <div style={{ height: '6px', width: '30%', background: accent, borderRadius: '2px', opacity: 0.7, marginBottom: '6px' }} />
          <div style={{ height: '14px', width: '65%', background: 'rgba(255,255,255,0.85)', borderRadius: '2px', marginBottom: '5px' }} />
          <div style={{ height: '10px', width: '55%', background: 'rgba(255,255,255,0.35)', borderRadius: '2px', marginBottom: '10px' }} />
          <div style={{ height: '28px', width: '34%', background: accent, borderRadius: '2px', opacity: 0.9 }} />
        </div>

        {/* Section label */}
        <div className="portfolio__skeleton-bar portfolio__skeleton-bar--dark" style={{ width: '22%' }} />
        <div className="portfolio__skeleton-bar" style={{ width: '48%' }} />
        <div className="portfolio__skeleton-bar" style={{ width: '38%' }} />

        {/* Card grid */}
        <div className="portfolio__skeleton-grid">
          {[0,1,2].map((i) => (
            <div key={i} className="portfolio__skeleton-card" style={{ borderTop: `3px solid ${accent}` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PortfolioItem({ project, reversed }) {
  return (
    <article
      className={`portfolio__item ${reversed ? 'portfolio__item--reversed' : ''}`}
      aria-label={project.title}
    >
      {/* Image / Placeholder — wrapped in link to live demo */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__image portfolio__image--link"
        aria-label={`View ${project.title} live demo`}
      >
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
          />
        ) : (
          <div className="portfolio__image-placeholder" aria-hidden="true">
            <div className="portfolio__placeholder-inner">
              <BrowserMockup project={project} />
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="portfolio__image-overlay" aria-hidden="true">
          <span className="portfolio__image-overlay-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Live Demo
          </span>
        </div>
      </a>

      {/* Info */}
      <div className="portfolio__info">
        <p className="portfolio__number">{project.number}</p>
        <h3 className="portfolio__title">{project.title}</h3>
        <span className="portfolio__industry">{project.industry}</span>
        <p className="portfolio__description">{project.description}</p>

        <ul className="portfolio__features" role="list">
          {project.features.map((feat) => (
            <li key={feat} className="portfolio__feature">
              <span className="portfolio__feature-dot" aria-hidden="true" />
              {feat}
            </li>
          ))}
        </ul>

        {/* Live demo CTA */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__live-link"
          aria-label={`Open ${project.title} live demo in new tab`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Live Demo
        </a>
      </div>
    </article>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section" aria-labelledby="portfolio-heading">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">My Work</p>
          <h2 className="section-title" id="portfolio-heading">
            Sample Websites
          </h2>
          <p className="section-subtitle">
            Two fully functional demo sites showing exactly what your business
            could have — built to generate leads and simplify your sales process.
          </p>
        </header>
      </div>

      {/* Full-width project rows — intentionally outside .container */}
      <div role="list">
        {PROJECTS.map((project, i) => (
          <div key={project.id} role="listitem">
            <div className="container" style={{ padding: 0 }}>
              <PortfolioItem project={project} reversed={i % 2 !== 0} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
