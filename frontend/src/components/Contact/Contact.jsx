import { useState } from 'react';
import { site, contact } from '@/data/site';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section__label">
          <span>04</span> contact
        </p>

        <h2 id="contact-heading" className="section__title">
          Let&apos;s work together
        </h2>

        <p className="contact__intro">
          Looking for a software engineering internship where I can contribute and grow.
          Happy to talk about your team or walk through any of my projects.
        </p>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <input
                className="contact__input"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__input"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="contact__status" role="status">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="contact__status contact__status--error" role="status">
                Something went wrong. Please email me directly at {contact.email}.
              </p>
            )}
          </form>

          <aside className="contact__aside">
            <div className="contact__panel">
              <h3 className="contact__panel-title">Or reach me directly</h3>
              <ul className="contact__links">
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </li>
                <li>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={contact.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <a className="contact__cv" href={site.cv} download="Reason-Dahal-CV.pdf">
              <span className="contact__cv-title">Download CV (PDF)</span>
              <span className="contact__cv-note">Full experience and education</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;