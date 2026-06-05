import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Real engineering projects — from IIoT architectures to low-level embedded control.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="card project-card fade-in" key={p.id}>
              {/* Replace placeholder images with actual project screenshots */}
              <img
                src={p.image}
                alt={`${p.title} project screenshot`}
                className="project-card-image"
              />
              <div className="project-card-body">
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.shortDescription}</p>
                <div className="badge-group" style={{ marginBottom: 14 }}>
                  {p.tech.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
                <ul className="project-card-highlights">
                  {p.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-card-actions">
                  <a href={p.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> GitHub
                  </a>
                  <a href="#case-studies" className="btn btn-ghost">
                    <FiExternalLink /> Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
