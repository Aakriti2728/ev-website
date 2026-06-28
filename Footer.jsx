import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <p>Model Lineup</p>
        <p>Company Vision</p>
        <h3>Store Locator</h3>
        <p>Find a showroom</p>
      </div>
      <div className="footer-map">
        <iframe
  title="location-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112084.68384626888!2d77.15561090257353!3d28.612912089878634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e59e86c489%3A0x6432b73d01a5c0df!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1721276226765!5m2!1sen!2sin"
  width="300"
  height="200"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </div>
    </footer>
  );
};

export default Footer;
