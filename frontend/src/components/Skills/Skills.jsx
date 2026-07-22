import { skillGroups, learningSkills } from '@/data/skills';
import SkillTag from '@/components/SkillTag';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section__label">Skills</p>
        <h2 id="skills-heading" className="section__title">
          What I work with
        </h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.group} className="skills__card">
              <h3 className="skills__card-title">{group.group}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__learning">
          <h3 className="skills__card-title">Currently learning</h3>
          <p className="skills__learning-note">
            Being built with these right now — this site is the practice project.
          </p>
          <ul className="skills__tags">
            {learningSkills.map((item) => (
              <SkillTag key={item} label={item} status="learning" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;