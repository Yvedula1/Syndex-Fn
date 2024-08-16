import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Syndex</h1>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#for-creators">For Creators</a></li>
              <li><a href="#for-brands">For Brands</a></li>
              <li><a href="#jobs">Jobs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy & Consent</a></li>
              <li><a href="#cookie-policy">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our World Together</h3>
            <ul className="social-links">
              <li><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#youtube"><i className="fab fa-youtube"></i></a></li>
              <li><a href="#facebook"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#linkedin"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-apps">
          <a href="#app-store"><img src="app-store.png" alt="Download on the App Store" /></a>
          <a href="#google-play"><img src="google-play.png" alt="Get it on Google Play" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Syndex</p>
      </div>
    </footer>
  );
};

export default Footer;