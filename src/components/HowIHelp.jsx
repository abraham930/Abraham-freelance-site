import '../styles/howIHelp.css'

/* ------------------------------------------------------------------ */
/*  EDIT YOUR BENEFITS / VALUE PROPS HERE                              */
/* ------------------------------------------------------------------ */
const BENEFITS = [
  {
    id:    '01',
    title: 'Your Customers Can Browse & Inquire Online — 24/7',
    body:  'Instead of relying solely on phone calls or word of mouth, your website works around the clock. Visitors can browse your services and products, then submit an inquiry directly to your inbox — even at midnight on a Sunday.',
  },
  {
    id:    '02',
    title: 'Every Page is Designed to Generate Leads',
    body:  'Dedicated services and products pages are built with a single purpose: turning visitors into contacts. Each page ends with a clear call-to-action that sends an inquiry directly to your Gmail — no third-party tools required.',
  },
  {
    id:    '03',
    title: 'Simplifies Your Sales Process Immediately',
    body:  'When a customer submits a form, you receive a structured email with their name, contact details, and what they\'re looking for. No more unclear voicemails. Just qualified leads ready for a callback.',
  },
  {
    id:    '04',
    title: 'Builds Trust Before You Even Pick Up the Phone',
    body:  'A clean, professional website signals credibility. Customers who find your site feel confident about reaching out — meaning you spend less time convincing and more time closing.',
  },
]

function HowIHelp() {
  const handleContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-i-help" className="how-i-help section" aria-labelledby="howIHelp-heading">
      <div className="container">
        <div className="how-i-help__inner">

          {/* Left: intro */}
          <div className="how-i-help__lead">
            <header className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Why It Works
              </p>
              <h2 className="section-title section-title--light" id="howIHelp-heading">
                How a Website<br />Grows Your Business
              </h2>
              <p className="section-subtitle section-subtitle--light" style={{ marginTop: 'var(--space-sm)' }}>
                Every site I build is purpose-built for one thing:
                turning online visitors into real customers for your business.
              </p>
            </header>

            <p className="how-i-help__cta-note">
              Ready to get your business online?
            </p>
            <a
              href="#contact"
              className="btn-cta"
              onClick={handleContact}
              style={{ marginTop: 'var(--space-sm)', display: 'inline-flex' }}
            >
              Let's Talk
            </a>
          </div>

          {/* Right: benefit list */}
          <div className="how-i-help__benefits" role="list">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="benefit-card" role="listitem">
                <span className="benefit-card__number" aria-hidden="true">
                  {benefit.id}
                </span>
                <div>
                  <h3 className="benefit-card__title">{benefit.title}</h3>
                  <p className="benefit-card__body">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowIHelp
