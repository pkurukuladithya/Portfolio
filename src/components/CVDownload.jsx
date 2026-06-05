import { FiDownload } from 'react-icons/fi';

export default function CVDownload() {
  return (
    <section className="cv-section" id="cv">
      <div className="container">
        <h2>Download My CV</h2>
        <p>
          For internship opportunities in Embedded Systems, IoT, Robotics, or Industrial Automation,
          you can download my latest CV below.
        </p>
        <a
          href="/Praveena_Kurukuladithya_CV.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload /> Download CV
        </a>
      </div>
    </section>
  );
}
