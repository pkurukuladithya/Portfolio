import { FiCpu, FiWifi, FiServer, FiTool, FiLayers } from 'react-icons/fi';

const highlights = [
  { icon: <FiCpu />, text: 'Practical hardware-software integration' },
  { icon: <FiWifi />, text: 'Embedded and IoT system development' },
  { icon: <FiServer />, text: 'Raspberry Pi and Linux-based control' },
  { icon: <FiTool />, text: 'PLC automation and industrial troubleshooting' },
  { icon: <FiLayers />, text: 'PCB design, soldering, and circuit debugging' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Engineering with Purpose</h2>
        </div>
        <div className="about-content fade-in">
          <div className="about-details">
            <div className="about-text">
              <p>
                I am a Computer Systems Engineering undergraduate at SLIIT with hands-on experience in
                embedded systems, Industrial IoT, robotics, PLC automation, PCB design, and Linux-based
                development. I enjoy building real-world systems that connect hardware, software, sensors,
                control algorithms, and web dashboards.
              </p>
              <p>
                My work includes predictive maintenance systems, PID motor control with IIoT SCADA
                dashboards, autonomous robot cars, and analog electronics projects. I focus on writing
                clean, efficient code that interfaces directly with real hardware — from low-level AVR
                Assembly on ATmega328P to Python-based control loops on Raspberry Pi.
              </p>
            </div>
            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="about-highlight-card" key={i}>
                  <div className="about-highlight-icon">{h.icon}</div>
                  <h4>{h.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

