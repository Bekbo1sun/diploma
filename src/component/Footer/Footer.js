import { NavLink } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-description">
              We are your reliable online store for quality products. Our goal
              is to meet your needs and offer you the best selection of
              products.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Menus</h4>
            <ul className="footer-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/technical-support">Technical Support</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">Phone: +1 123 456 789</li>
              <li className="footer-contact-item">Email: info@example.com</li>
              <li className="footer-contact-item">
                Address: 123 Example Street, City
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-social-list">
              <li className="footer-social-item">
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="https://www.twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-bottom-text">
            All rights reserved &copy; 2023 Online Store
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
