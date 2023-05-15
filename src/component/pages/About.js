import React from 'react';
import './About.css';
  
export default function About() {
return (
  <div className="About">
    <section id="about" className="section-about">
        <div className="container">
          <h2 className="section-title">About Our Company</h2>
          <p className="section-description">
            We are a company specializing in providing high-quality food products. Our mission is to provide our customers with healthy and fresh products while adhering to the principles of sustainable development and environmental responsibility.
          </p>
          <div className="company-values">
            <h3 className="values-title">Our Values:</h3>
            <ul className="values-list">
              <li className="value-item">Quality of Products - We guarantee that our products meet the highest standards of quality and safety.</li>
              <li className="value-item">Customer Care - We prioritize the interests of our customers and strive to offer them the best service and meet their needs.</li>
              <li className="value-item">Environmental Responsibility - We follow the principles of sustainable production, minimizing our impact on the environment and supporting environmental initiatives.</li>
            </ul>
          </div>
        </div>
      </section>
  </div>
);
}