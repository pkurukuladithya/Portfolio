export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <span className="footer-name">Praveena Kurukuladithya</span>
          <span className="footer-divider">|</span>
          <span className="footer-dept">CSE @ SLIIT</span>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
