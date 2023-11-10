import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Page Links */}
        <div className="page-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/admissions">Admissions</a>
          <a href="/courses">Courses</a>
          <a href="/courses">Faculties</a>
          {/* Add more page links as needed */}
        </div>

        {/* Copyright Information */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} Your University Name. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="#" class="social-link">
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
    </footer>
  );
};

export default Footer;
