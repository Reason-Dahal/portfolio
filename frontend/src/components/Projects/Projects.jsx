import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section__label">
         Projects
        </p>

        <h2 id="projects-heading" className="section__title">
          Apps I&apos;ve built
        </h2>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              name={project.name}
              tagline={project.tagline}
              detail={project.detail}
              image={project.image}
              tech={project.tech}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;