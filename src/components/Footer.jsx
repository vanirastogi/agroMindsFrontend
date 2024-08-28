import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Water Baganig</h3>
        <p>Website template image</p>
        <h3>Growing plants</h3>
        <p>Website template image</p>
        <h3>Snow removal</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
      </div>
      <div className="footer-section">
        <h3>Find us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <address>
          9878/25 sec 9 rohini 35<br />
          +91-9999878398<br />
          <a href="mailto:info@example.com">info@example.com</a>
        </address>
      </div>
      <div className="footer-section">
        <h3>Follow us</h3>
        <ul>
          <li><a href="https://www.domain.com/">Lorem Ipsum is simply dummy printing...</a></li>
          <li><a href="https://www.domain.com/">Lorem Ipsum is simply dummy printing...</a></li>
          <li><a href="https://www.domain.com/">Lorem Ipsum is simply dummy printing...</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick links</h3>
        <ul>
          <li>Default Version</li>
          <li>Boxed Version</li>
          <li>Our Team</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Get In Touch</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Recent posts</h3>
        <p>Website template image</p>
        <p>How to find best dog food?</p>
        <p>22 Sep 2045</p>
        <p>Website template image</p>
        <p>How to find best dog food?</p>
        <p>34 Sep 2045</p>
        <p>Website template image</p>
        <p>How to find best dog food?</p>
        <p>30 Sep 2045</p>
      </div>
      <div className="footer-section">
        <p>All Rights Reserved. © 2045 N & LW Lawn Care</p>
        <p>Design By: HTML Design</p>
      </div>
    </footer>
  );
};

export default Footer;
