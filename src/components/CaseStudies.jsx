import { projects } from '../data/projects';

const caseStudies = projects.filter((p) => p.caseStudy);

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Deep Dives</span>
          <h2 className="section-title">Project Case Studies</h2>
          <p className="section-subtitle">
            Detailed breakdowns of my strongest engineering projects.
          </p>
        </div>
        <div className="case-studies-list">
          {caseStudies.map((p) => (
            <div className="card case-study fade-in" key={p.id}>
              <h3 className="case-study-title">{p.title}</h3>
              <div className="case-study-grid">
                <div className="case-study-block">
                  <h4>Problem</h4>
                  <p>{p.caseStudy.problem}</p>
                </div>
                <div className="case-study-block">
                  <h4>Solution</h4>
                  <p>{p.caseStudy.solution}</p>
                </div>
              </div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-cyan)', marginBottom: 12 }}>
                Architecture Flow
              </h4>
              <div className="case-study-arch">
                {p.caseStudy.architecture.map((step, i) => (
                  <span key={i}>
                    <span className="case-study-arch-step">{step}</span>
                    {i < p.caseStudy.architecture.length - 1 && (
                      <span className="case-study-arch-arrow"> → </span>
                    )}
                  </span>
                ))}
              </div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-cyan)', marginBottom: 12 }}>
                Skills Demonstrated
              </h4>
              <div className="case-study-skills badge-group">
                {p.caseStudy.skills.map((s) => (
                  <span className="badge" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
