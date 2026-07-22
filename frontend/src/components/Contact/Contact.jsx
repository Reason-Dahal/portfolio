import { useState } from 'react';
import { site, contact } from '@/data/site';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section__eyebrow">Contact</p>
        <h2 id="contact-heading" className="section__title">
          Let's work together
        </h2>
        <p className="contact__intro">
          Open to internship opportunities and freelance projects. Tell me what you're
          building.
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

            <button className="btn btn-primary" type="submit">
              Send message
            </button>
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

            <a className="contact__cv" href={site.cv} download>
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