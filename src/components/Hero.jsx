import { useState, useEffect } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiDownload, 
  FiArrowRight, 
  FiCpu, 
  FiWifi, 
  FiActivity, 
  FiSettings 
} from 'react-icons/fi';
import { 
  SiArduino, 
  SiRaspberrypi, 
  SiSiemens 
} from 'react-icons/si';

const badges = ['ESP32', 'Raspberry Pi', 'Arduino', 'PLC', 'IIoT', 'Robotics', 'PCB Design'];

const focusAreas = [
  { icon: <FiCpu />, title: 'Embedded Systems' },
  { icon: <FiWifi />, title: 'Industrial IoT' },
  { icon: <FiActivity />, title: 'Robotics' },
  { icon: <FiSettings />, title: 'Industrial Automation' }
];

export default function Hero() {
  const nameText = 'Praveena Kurukuladithya';
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < nameText.length) {
        currentText += nameText.charAt(index);
        setDisplayName(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="home">
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'flex-start',
          textAlign: 'center',
          gap: '16px',
          paddingTop: '10px',
          paddingBottom: '20px'
        }}
      >
        {/* Layered Visual Container: Typing name behind centered silhouette */}
        <div className="hero-visual-container">
          <h1 className="hero-name-behind">
            <span className="highlight">{displayName}</span><span className="typing-caret">|</span>
          </h1>

          <div className="hero-photo-container">
            {/* Unique floating logos on the left side of the silhouette */}
            <div className="floating-logo logo-left-1" style={{ '--color': '#00979D' }} title="Arduino">
              <SiArduino />
            </div>
            <div className="floating-logo logo-left-2" style={{ '--color': '#FF5722' }} title="ESP32">
              <FiCpu />
            </div>

            <div className="hero-image-frame">
              <img 
                src="/images/profile_pic.png" 
                alt="Praveena Kurukuladithya" 
                className="hero-image" 
              />
            </div>
            <div className="hero-photo-glow"></div>

            {/* Unique floating logos on the right side of the silhouette */}
            <div className="floating-logo logo-right-1" style={{ '--color': '#C51A4A' }} title="Raspberry Pi">
              <SiRaspberrypi />
            </div>
            <div className="floating-logo logo-right-2" style={{ '--color': '#005F60' }} title="Siemens PLC">
              <SiSiemens />
            </div>
          </div>
        </div>

        {/* Tagline and affiliation below the photo */}
        <div className="hero-tagline-container">
          <p className="hero-tagline">
            Computer Systems Engineering Undergraduate
          </p>
          <p className="hero-subtagline">
            Sri Lanka Institute of Information Technology
          </p>
        </div>

        <div className="hero-content" style={{ width: '100%', maxWidth: '950px' }}>
          <div className="hero-focus-grid">
            {focusAreas.map((area, idx) => (
              <div className="focus-card" key={idx}>
                <span className="focus-icon">{area.icon}</span>
                <span className="focus-text">{area.title}</span>
              </div>
            ))}
          </div>

          <p className="hero-description" style={{ margin: '0 auto 24px' }}>
            I build practical hardware-software systems using ESP32, Arduino, Raspberry Pi, sensors,
            motor drivers, PLCs, Linux, MQTT, Flask/FastAPI dashboards, and control algorithms.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FiArrowRight /> View Projects
            </a>
            <a href="/Praveena_Kurukuladithya_CV.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/pkurukuladithya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/praveena-kurukuladithya-75b41b187" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:kurukuladithyapraveena@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <div className="hero-badges">
            {badges.map((b) => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
