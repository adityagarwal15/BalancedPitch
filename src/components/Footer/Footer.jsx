import React from "react";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <ParallaxImage src="/footer/footer.jpg" alt="" />
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Solutions</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Updates</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>Have Questions?</p>
          <h3>Get in Touch</h3>
          <p className="primary">
  Info@balancedpitch.com <br />
  <a
    href="https://www.linkedin.com/in/adityagarwal15"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: 'var(--color-accent)',
      textDecoration: 'none',
      fontSize: '30px',
      marginBottom: '2em',
      textTransform: 'uppercase',
      fontFamily: '"FK Screamer"',
      fontWeight: 300,
      lineHeight: 1,
      margin: '0 10px 0 0',
      display: 'inline-block'
    }}
  >
    LinkedIn
  </a>
  /
  <a
    href="https://adityagarwal.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: 'var(--color-accent)',
      textDecoration: 'none',
      fontSize: '30px',
      marginBottom: '2em',
      textTransform: 'uppercase',
      fontFamily: '"FK Screamer"',
      fontWeight: 300,
      lineHeight: 1,
      margin: '0 0 0 10px',
      display: 'inline-block'
    }}
  >
    Careers
  </a>
</p>


          <p>© 2024 Balanced Pitch</p>
        </div>
        <div className="footer-col">
          <p>Planning a Visit?</p>
          <h3>Our Location</h3>
          <p className="primary">
            123 Bandra Lane <br />
            India
          </p>
          <p>Designed by Aditya</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Make Your Voice Heard!</p>
        <p>Stand for Ethical AI in Music</p>

        <span>Join our movement to protect and empower music creators.</span>

        <div className="footer-ws"></div>

        <div className="footer-input">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="footer-submit">
          <Link to="/">Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
