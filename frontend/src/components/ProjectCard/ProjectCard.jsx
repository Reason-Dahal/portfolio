import './ProjectCard.css';

function ProjectCard({ name, tagline, detail, image, tech, repo }) {
  return (
    <article className="project-card">
    <img className="project-card__image" src={image} alt={`${name} app screenshot`} />

      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__tagline">{tagline}</p>
        <p className="project-card__detail">{detail}</p>

        <ul className="project-card__tech">
          {tech.map((item) => (
            <li key={item} className="project-card__tech-item">
              {item}
            </li>
          ))}
        </ul>

        <a
          className="project-card__link"
          href={repo}
          target="_blank"
          rel="noreferrer"
        >
          View code on GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;