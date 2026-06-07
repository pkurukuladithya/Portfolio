import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiSun, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';

export default function Contact() {
  const getColomboTime = () => {
    const options = {
      timeZone: 'Asia/Colombo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date());
  };

  const [time, setTime] = useState(getColomboTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getColomboTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am open to internship opportunities in Embedded Systems, IoT, Robotics, Industrial
            Automation, and Computer Systems Engineering.
          </p>
        </div>

        <div className="modern-contact-container">
          {/* Left Column: Location Map */}
          <div className="contact-col location-col">
            <h3 className="contact-col-title">Currently Based In 📍</h3>
            <a 
              href="https://maps.app.goo.gl/65FwW3Ev69wsE7qY7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-card-link"
            >
              <div className="map-card">
                <div className="map-image-wrapper">
                  <img src="/images/kalutara_map.png" alt="Kalutara, Sri Lanka Map" className="map-image" />
                </div>
                <div className="map-info">
                  <span className="map-location-name">KALUTARA, LK</span>
                  <span className="map-time">
                    <span className="time-sun-icon"><FiSun className="sun-pulse" /></span>
                    {time}
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Connect Links */}
          <div className="contact-col connect-col">
            <h3 className="contact-col-title">Connect</h3>
            <div className="connect-grid">
              <a href="mailto:kurukuladithyapraveena@gmail.com" className="connect-link email-link">
                <span className="connect-icon"><FiMail /></span>
                <span className="connect-label">EMAIL</span>
              </a>
              <a href="https://instagram.com/praveena__hdk" target="_blank" rel="noopener noreferrer" className="connect-link instagram-link">
                <span className="connect-icon"><SiInstagram /></span>
                <span className="connect-label">INSTAGRAM</span>
              </a>
              <a href="https://github.com/pkurukuladithya" target="_blank" rel="noopener noreferrer" className="connect-link github-link">
                <span className="connect-icon"><FiGithub /></span>
                <span className="connect-label">GITHUB</span>
              </a>
              <a href="https://www.linkedin.com/in/praveena-kurukuladithya-75b41b187" target="_blank" rel="noopener noreferrer" className="connect-link linkedin-link">
                <span className="connect-icon"><FiLinkedin /></span>
                <span className="connect-label">LINKEDIN</span>
              </a>
              <a href="tel:+94763521561" className="connect-link phone-link">
                <span className="connect-icon"><FiPhone /></span>
                <span className="connect-label">PHONE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
