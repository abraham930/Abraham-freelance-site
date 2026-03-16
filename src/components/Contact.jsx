import { useState } from 'react'
import '../styles/contact.css'
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

/* ------------------------------------------------------------------ */
/*  CONFIG — Update this email to change where form submissions go     */
/* ------------------------------------------------------------------ */
const CONTACT_EMAIL = 'santiagoabraham513@gmail.com'

/* ------------------------------------------------------------------ */
/*  CONTACT DETAILS — Edit your info here                              */
/* ------------------------------------------------------------------ */
const CONTACT_DETAILS = [
  {
    id:    'email',
    label: 'Email',
    value: contactEmail,
    href:  `mailto:${contactEmail}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8L10.89 13.26C11.22 13.48 11.6 13.6 12 13.6C12.4 13.6 12.78 13.48 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" />
      </svg>
    ),
  },
  {
    id:    'phone',
    label: 'Phone',
    value: `0${phoneNumber}`,
    href:  `tel:+6${phoneNumber}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
      </svg>
    ),
  },
]

const PROJECT_TYPES = [
  'New Business Website',
  'Website Redesign',
  'Lead Generation Setup',
  'Services / Products Page',
  'General Inquiry',
]

/* ------------------------------------------------------------------ */
/*  Form validation                                                     */
/* ------------------------------------------------------------------ */
const INIT_FORM   = { name: '', email: '', projectType: '', message: '' }
const INIT_ERRORS = { name: '', email: '', message: '' }

function validate(values) {
  const errors = { ...INIT_ERRORS }
  let valid = true

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
    valid = false
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email.'
    valid = false
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.'
    valid = false
  }

  return { errors, valid }
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */
function Contact() {
  const [form,         setForm]         = useState(INIT_FORM)
  const [errors,       setErrors]       = useState(INIT_ERRORS)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess,    setIsSuccess]    = useState(false)
  const [submitError,  setSubmitError]  = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name])   setErrors((prev) => ({ ...prev, [name]: '' }))
    if (submitError)    setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { errors: errs, valid } = validate(form)
    if (!valid) { setErrors(errs); return }

    setIsSubmitting(true)
    setSubmitError('')

    /*
      FormSubmit.co — free no-backend email relay.
      First submission triggers a one-time activation email to your inbox.
      Confirm it, and all future submissions arrive as plain email.
    */
    try {
      const payload = new FormData()
      payload.append('name',        form.name)
      payload.append('email',       form.email)
      payload.append('projectType', form.projectType || 'Not specified')
      payload.append('message',     form.message)
      payload.append('_subject',    `New inquiry from ${form.name} — Abraham Santiago Portfolio`)
      payload.append('_captcha',    'false')
      payload.append('_template',   'table')

      const res = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method:  'POST',
        headers: { Accept: 'application/json' },
        body:    payload,
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        setSubmitError('Submission failed. Please email me directly at ' + CONTACT_EMAIL)
      }
    } catch {
      setSubmitError('Network error. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setForm(INIT_FORM)
    setErrors(INIT_ERRORS)
    setIsSuccess(false)
    setSubmitError('')
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">

          {/* ---- LEFT ---- */}
          <div className="contact__info">
            <header className="section-header">
              <p className="section-eyebrow">Get in Touch</p>
              <h2 className="section-title" id="contact-heading">
                Let's Build<br />Something Together
              </h2>
            </header>
            <p className="contact__tagline">
              Have a business that could use a better online presence?
              Tell me about it — I'll come back to you within 24 hours
              with a straight answer and a fair quote.
            </p>

            <address className="contact__details" style={{ fontStyle: 'normal' }}>
              {CONTACT_DETAILS.map((d) => (
                <div key={d.id} className="contact__detail">
                  <div className="contact__detail-icon" aria-hidden="true">{d.icon}</div>
                  <div>
                    <p className="contact__detail-label">{d.label}</p>
                    <p className="contact__detail-value">
                      <a href={d.href}>{d.value}</a>
                    </p>
                  </div>
                </div>
              ))}
            </address>

            <div className="contact__availability" aria-label="Current availability status">
              <span className="contact__avail-dot" aria-hidden="true" />
              Currently available for new projects
            </div>
          </div>

          {/* ---- RIGHT: form ---- */}
          <div className="contact__form-wrapper">
            {isSuccess ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="contact__success-title">Message Received</h3>
                <p className="contact__success-body">
                  Thanks for reaching out. I'll review your message and
                  get back to you within 24 hours.
                </p>
                <button type="button" className="contact__success-reset" onClick={handleReset}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Tell Me About Your Project</h3>
                <p className="contact__form-subtitle">
                  A few details is all I need to get started.
                </p>

                <form
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="contact__form-row">
                    {/* Name */}
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="name">
                        Your Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                        placeholder="Juan dela Cruz"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-required="true"
                      />
                      {errors.name && (
                        <span className="contact__error-msg" role="alert">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="email">
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                        placeholder="you@yourbusiness.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-required="true"
                      />
                      {errors.email && (
                        <span className="contact__error-msg" role="alert">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Project type */}
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="projectType">
                      Project Type
                    </label>
                    <select
                      id="projectType" name="projectType"
                      className="contact__select"
                      value={form.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a project type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="message">
                      Tell Me About Your Business <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      className={`contact__textarea${errors.message ? ' contact__textarea--error' : ''}`}
                      placeholder="What does your business do? What do you need from a website?"
                      value={form.message}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.message && (
                      <span className="contact__error-msg" role="alert">{errors.message}</span>
                    )}
                  </div>

                  {submitError && (
                    <p className="contact__submit-error" role="alert">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    className="contact__submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          style={{ animation: 'spin 0.8s linear infinite' }} aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="contact__form-note">
                    Your message goes directly to my inbox. I respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default Contact
