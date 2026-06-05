import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning embedded hardware, control systems, and full-stack software.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div className="card skill-card fade-in" key={cat.id}>
                <div className="skill-card-header">
                  <div
                    className="skill-card-icon"
                    style={{ background: `${cat.color}18`, color: cat.color }}
                  >
                    <Icon />
                  </div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((s) => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
