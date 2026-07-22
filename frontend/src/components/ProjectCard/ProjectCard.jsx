import './ProjectCard.css';

function ProjectCard({ name, tagline, image, tech }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img className="project-card__image" src={image} alt={`${name} app screenshot`} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__tagline">{tagline}</p>

        <ul className="project-card__tech">
          {tech.map((item) => (
            <li key={item} className="project-card__tech-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;