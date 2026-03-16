import '../styles/services.css'

/* ------------------------------------------------------------------ */
/*  EDIT YOUR SERVICES HERE                                             */
/* ------------------------------------------------------------------ */
const SERVICES = [
  {
    id:    'local-business-sites',
    title: 'Local Business Websites',
    body:  'Clean, professional websites for service businesses, retail shops, restaurants, and tradespeople. Built to load fast, look great on mobile, and convert visitors into customers.',
    tag:   'From concept to launch',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V9.5Z" />
      </svg>
    ),
  },
  {
    id:    'lead-gen',
    title: 'Lead Generation Setup',
    body:  'Inquiry forms, service pages, and product catalogs designed so that every visitor has a direct path to contacting you — all connected to your Gmail inbox.',
    tag:   'Inquiries sent directly to your email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8L10.89 13.26C11.22 13.48 11.6 13.6 12 13.6C12.4 13.6 12.78 13.48 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" />
      </svg>
    ),
  },
  {
    id:    'responsive-design',
    title: 'Mobile-First Design',
    body:  'Every website I build looks and functions perfectly on phones, tablets, and desktops. Over 60% of visitors browse on mobile — your site needs to be ready.',
    tag:   'Tested across all screen sizes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id:    'services-products-pages',
    title: 'Services & Products Pages',
    body:  'Dedicated, well-structured pages for your services and products — each with descriptions, pricing, and a clear inquiry CTA — so customers know exactly what you offer.',
    tag:   'Built for browsing & converting',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 5H7C5.9 5 5 5.9 5 7V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V7C19 5.9 18.1 5 17 5H15" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12H15M9 16H13" />
      </svg>
    ),
  },
  {
    id:    'fast-delivery',
    title: 'Fast Turnaround',
    body:  'Most projects are scoped, designed, and delivered within 1–2 weeks. I work efficiently, communicate clearly, and don\'t disappear mid-project.',
    tag:   'Typical delivery: 1–2 weeks',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
  },
  {
    id: 'ownership',
    title: 'Fully Yours — I Handle Updates for You',
    body: 'You get the source code, but I’ll manage updates, text changes, prices, and services for you. Your website runs on Vite + React — fast, modern, and deployable anywhere, while you stay worry-free.',
    tag: 'Maintenance & updates included',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

function Services() {
  const handleContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="services section" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">What I Offer</p>
          <h2 className="section-title" id="services-heading">
            Services
          </h2>
          <p className="section-subtitle">
            Everything a local business needs to establish a
            professional online presence and start generating leads.
          </p>
        </header>

        <div className="services__grid" role="list">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card" role="listitem">
              <div className="service-card__icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__body">{service.body}</p>
              <span className="service-card__tag">{service.tag}</span>
            </div>
          ))}
        </div>

        <div className="services__cta-strip">
          <p>
            Not sure which services you need? Tell me about your business and
            I'll recommend what makes the most sense.
          </p>
          <a href="#contact" className="btn-cta" onClick={handleContact}>
            Discuss My Project
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services
