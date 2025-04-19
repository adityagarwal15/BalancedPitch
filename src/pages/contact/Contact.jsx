import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Contact.css";

import { ReactLenis, useLenis } from "lenis/react";

const Contact = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page contact">
        <section className="contact-hero">
          <div className="contact-hero-img">
            <ParallaxImage src="/contact/hero.jpg" alt="" />
          </div>

          <div className="contact-hero-header">
            <h1>Get in touch</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>

          <div className="contact-form">
            <div className="form-col">
              <div className="form-header">
                <p className="primary">
                  Take a Stand for Fair AI in Music. Together, We Can Make a
                  Difference.
                </p>
                <p>Make Your Voice Count</p>

                <button>
                  <Link to="/contact">Sign Up</Link>
                </button>
              </div>
              <div className="form-details">
                <div className="join-our-team">
                  <p className="primary">Be Part of Our Mission</p>
                  <p>
                  Ready to drive real change? <br />
                  Explore open positions and opportunities to contribute your skills and ideas.
                  </p>
                </div>
                <div className="divider"></div>
                <div className="careers-cta">
                  <p className="primary">
                    <Link to="/">View Positions</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="form-col">
              <div className="form">
                <div className="form-row">
                  <div className="form-item">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-item">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Where are you located?" />
                </div>
                <div className="form-item">
                  <textarea
                    name=""
                    id=""
                    rows={8}
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <p className="primary">
                    <Link to="/">Submit</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Innovating the <br />
                Future of Music
              </h2>
              <p className="primary">
                Let’s connect and redefine creativity in the AI era.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Contact@balancedpitch.com</p>
              <p>Established 2024</p>
            </div>
            <div className="banner-info">
              <p>
              At <b>Balanced Pitch</b>, we deliver ethical, AI-ready datasets crafted to empower artists, developers, and innovators. Our solutions prioritize transparency, protect creative ownership, and set new standards for responsible, forward-thinking innovation in the music industry.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/contact/banner.jpg"
                alt="Innovating the Future of Music"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Contact);
