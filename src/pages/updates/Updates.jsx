import React from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Updates.css";

import { ReactLenis, useLenis } from "lenis/react";

const Updates = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page updates">
        <section className="updates-hero">
          <h1>Latest Updates</h1>
        </section>

        <section className="filters" style={{ display: "none" }}>
          <div className="filter active">
            <p>All</p>
          </div>
          <div className="filter">
            <p>Resources</p>
          </div>
          <div className="filter">
            <p>Standards</p>
          </div>
          <div className="filter">
            <p>News</p>
          </div>
        </section>

        <section className="articles">
          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article1.jpg" alt="AI Voices Battle" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>AI vs. Creativity: The Fight for Authentic Voices</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/updates/article2.jpg" alt="AI Ethics Discussion" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Shaping AI Ethics: A Collaborative Approach</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article3.jpg" alt="Artists' Rights" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Protecting Artists' Rights in the Age of AI</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/updates/article4.jpg" alt="AI and Music" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Reimagining Music Creation with Ethical AI</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article5.jpg" alt="Policy Reforms" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>Policy Reforms: Ensuring Fairness in AI Practices</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <img src="/updates/article6.jpg" alt="AI and Creative Rights" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>AI Meets Creative Rights: Striking the Balance</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <img src="/updates/article7.jpg" alt="Future of AI" />
                <div className="article-date">
                  <p>6.19.2024 &nbsp; News</p>
                </div>
              </div>
              <div className="article-title">
                <h3>The Future of AI in Music: Challenges and Opportunities</h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>

            <div className="article"></div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Driving Innovation <br />
                with Integrity
              </h2>
              <p className="primary">
                Reach out to collaborate or learn more about our mission.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Support@balancedpitch.com</p>
              <p>Since 2024</p>
            </div>
            <div className="banner-info">
              <p>
              Balanced Pitch creates innovative, ethically-driven datasets and AI solutions, offering unmatched transparency and advanced tools to empower creators and developers worldwide.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/updates/banner.jpg"
                alt="Driving Innovation with Integrity"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Updates);
