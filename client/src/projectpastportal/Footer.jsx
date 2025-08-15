import React from 'react';
import './Footer.css'; // Make sure to create a separate CSS file for the footer

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 PastPortals. All rights reserved.</p>
        <p>Follow us on
          <a href="#" aria-label="Facebook"> Facebook</a>,
          <a href="#" aria-label="Twitter"> Twitter</a>,
          <a href="#" aria-label="Instagram"> Instagram</a>
           <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;