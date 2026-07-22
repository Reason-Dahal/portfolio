import { site } from '@/data/site';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            {site.eyebrow}
          </p>

          <h1 id="hero-heading" className="hero__headline">
            {site.headlineLead}{' '}
            <span className="hero__headline-accent">{site.headlineAccent}</span>
          </h1>

          <p className="hero__sub">{site.subheadline}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
                Get in touch
            </a>
            <a href={site.cv} className="btn btn-secondary" target="_blank" rel="noreferrer">
                Preview CV
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

      <div className="hero__stats">
        <div className="container hero__stats-grid">
          {site.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <p className="hero__stat-value">{stat.value}</p>
              <p className="hero__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;