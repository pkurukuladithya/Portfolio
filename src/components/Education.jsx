import { FiMapPin } from 'react-icons/fi';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="timeline fade-in">
          <div className="timeline-item">
            <div className="card timeline-card">
              <h3 className="timeline-institution">Sri Lanka Institute of Information Technology (SLIIT)</h3>
              <p className="timeline-degree">BSc (Hons) in Computer Systems Engineering</p>
              <p className="timeline-period">Nov. 2023 – Present</p>
              <p className="timeline-location"><FiMapPin style={{ marginRight: 4, verticalAlign: 'middle' }} /> Malabe, Sri Lanka</p>
              <p className="timeline-details">
                <strong>Relevant Areas:</strong> Embedded Systems, Control Systems, Digital Systems, DSP, Electronics, IoT, Robotics, Programming
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card timeline-card">
              <h3 className="timeline-institution">Kalutara Vidyalaya</h3>
              <p className="timeline-degree">GCE Advanced Level — Physical Science Stream</p>
              <p className="timeline-period">2008 – 2022</p>
              <p className="timeline-location"><FiMapPin style={{ marginRight: 4, verticalAlign: 'middle' }} /> Kalutara, Sri Lanka</p>
              <p className="timeline-details">
                <strong>Z-Score:</strong> 0.6896
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
