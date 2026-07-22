import { about } from '@/data/site';
import './About.css';

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <p className="section__label">About</p>
        <h2 id="about-heading" className="section__title">
          A bit about me
        </h2>

        <div className="about__grid">
          <div className="about__bio">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="about__facts">
            <h3 className="about__facts-title">Quick facts</h3>
            <dl className="about__facts-list">
              {about.facts.map((fact) => (
                <div key={fact.label} className="about__fact">
                  <dt className="about__fact-label">{fact.label}</dt>
                  <dd className="about__fact-value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;