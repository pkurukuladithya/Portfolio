import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">What I've <span>Built</span></h2>
          <p className="section-subtitle">
            Real engineering projects — from IIoT architectures to low-level embedded control.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div className="card project-card fade-in visible" key={p.id}>
              <div className="project-img">
                <img src={p.image} alt={p.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    <a href="#case-studies"><FiExternalLink /></a>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.shortDescription}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
