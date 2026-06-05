import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

const contacts = [
  { icon: <FiMail />, label: 'Email', value: 'kurukuladithyapraveena@gmail.com', href: 'mailto:kurukuladithyapraveena@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+94 76 352 1561', href: 'tel:+94763521561' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/pkurukuladithya', href: 'https://github.com/pkurukuladithya' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Praveena Kurukuladithya', href: 'https://www.linkedin.com/in/praveena-kurukuladithya-75b41b187' },
  { icon: <FiMapPin />, label: 'Location', value: 'Kalutara, Sri Lanka', href: null },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="contact-heading">Let's Build Practical Engineering Systems</h2>
        <p className="contact-subtext">
          I am open to internship opportunities in Embedded Systems, IoT, Robotics, Industrial
          Automation, and Computer Systems Engineering.
        </p>
        <div className="contact-grid">
          {contacts.map((c, i) => (
            <div className="contact-card fade-in" key={i}>
              <div className="contact-card-icon">{c.icon}</div>
              <div className="contact-card-info">
                <h4>{c.label}</h4>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {c.value}
                  </a>
                ) : (
                  <p>{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
