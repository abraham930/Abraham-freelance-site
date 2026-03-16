import '../styles/footer.css'
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

/* ------------------------------------------------------------------ */
/*  EDIT FOOTER LINKS AND SOCIAL URLS HERE                             */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: 'Work',      href: '#portfolio'  },
  { label: 'How I Help', href: '#how-i-help' },
  { label: 'Services',  href: '#services'   },
  { label: 'Contact',   href: '#contact'    },
]

/* Social icons — update hrefs when you have real profiles */
const SOCIALS = [
  {
    id:    'email',
    label: 'Email Abraham',
    href:  `mailto:${contactEmail}`,
    icon:  (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8L10.89 13.26C11.22 13.48 11.6 13.6 12 13.6C12.4 13.6 12.78 13.48 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" />
      </svg>
    ),
  },
  {
    id:    'facebook',
    label: 'Facebook',
    href:  'https://facebook.com', // Replace with your Facebook URL
    icon:  (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" />
      </svg>
    ),
  },
  {
    id:    'github',
    label: 'GitHub',
    href:  'https://github.com', // Replace with your GitHub URL
    icon:  (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <p className="footer__name">Abraham<span>.</span></p>
            <p className="footer__tagline">Freelance Web Developer</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="footer__links" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="footer__link"
                    onClick={(e) => handleClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="footer__socials" role="list" aria-label="Social links">
            {SOCIALS.map(({ id, label, href, icon }) => (
              <a
                key={id}
                href={href}
                className="footer__social"
                target={id !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} <span>Abraham Santiago</span>. All rights reserved.
          </p>
          <p className="footer__made-with">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
