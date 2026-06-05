import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

const badges = ['ESP32', 'Raspberry Pi', 'Arduino', 'PLC', 'IIoT', 'Robotics', 'PCB Design'];

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting">Hello, World</span>
          <h1 className="hero-name">
            Hi, I'm <span className="highlight">Praveena Kurukuladithya</span>
          </h1>
          <p className="hero-subtitle">
            Computer Systems Engineering undergraduate focused on{' '}
            <strong>Embedded Systems</strong>, <strong>Industrial IoT</strong>,{' '}
            <strong>Robotics</strong>, and <strong>Industrial Automation</strong>.
          </p>
          <p className="hero-description">
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
