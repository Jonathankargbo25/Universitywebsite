import React from 'react';
import './Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* University Logo */}
        <div className="logo">
          <img src="/path/to/university-logo.png" alt="University Logo" />
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>Phone: +232 76612060</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Email: info@mmtu.edu.sl</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="#" class="https://www.facebook.com/groups/230508397282743">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
