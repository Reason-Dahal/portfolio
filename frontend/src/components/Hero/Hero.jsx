import { site } from '@/data/site';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{site.eyebrow}</p>

          <h1 id="hero-heading" className="hero__headline">
            {site.headline}
          </h1>

          <p className="hero__sub">{site.subheadline}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={site.cv} className="btn btn-secondary" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img
            className="hero__photo"
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width="320"
            height="400"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;