import './SkillTag.css';

function SkillTag({ label, status = 'confident' }) {
  return <li className={`skill-tag skill-tag--${status}`}>{label}</li>;
}

export default SkillTag;
