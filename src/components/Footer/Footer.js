import React from "react";
// Importing Font Awesome core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importing specific icons from Font Awesome
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: contact@myapp.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +123 456 7890</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Main St, City, Country</p>
        </div>
        
        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer bottom text */}
      <div className="footer-bottom">
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;