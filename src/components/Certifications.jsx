import { FiAward } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Professional Training</h2>
        </div>
        <div className="card cert-card fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="about-highlight-icon"><FiAward /></div>
            <div>
              <h3 className="cert-title">
                Designing, Maintaining and Troubleshooting Automated Engineering Systems Based on PLC
              </h3>
            </div>
          </div>
          <p className="cert-issuer">
            Robotics and Control Systems Laboratory, Department of Mechanical Engineering — University of Moratuwa, Sri Lanka
          </p>
          <p className="cert-period">Nov. 2025 – Feb. 2026</p>
          <p className="cert-desc">
            Completed hands-on training in PLC programming, PLC wiring, industrial automation troubleshooting,
            and automated system maintenance. Practiced Siemens S7-200 and S7-1200 PLC programming with real
            industrial automation wiring and control scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}
