import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Solutions.css";

import { ReactLenis, useLenis } from "lenis/react";

const Solutions = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
       <Helmet>
        <title>Solutions | Balanced Pitch</title>
        <meta
          name="description"
          content="Explore Balanced Pitch's ethical AI solutions for the music industry—empowering creators, ensuring fair attribution, and setting new standards for creative rights and data innovation."
        />
        <meta property="og:title" content="Solutions | Balanced Pitch" />
        <meta property="og:description" content="Discover ethical AI, artist attribution, secure datasets, and innovation-driven solutions at Balanced Pitch—pioneering a fair and transparent music industry." />
        <meta property="og:image" content="https://res.cloudinary.com/dcf0cpuqf/image/upload/v1745087100/og-banner_fcrx9j.png" />
        <meta property="og:url" content="https://balancedpitch.vercel.app/solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://balancedpitch.vercel.app/solutions" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Solutions | Balanced Pitch",
              "description": "Explore Balanced Pitch's ethical AI solutions for the music industry—empowering creators, ensuring fair attribution, and setting new standards for creative rights and data innovation.",
              "url": "https://balancedpitch.vercel.app/solutions",
              "image": "https://res.cloudinary.com/dcf0cpuqf/image/upload/v1745087100/og-banner_fcrx9j.png",
              "publisher": {
                "@type": "Organization",
                "name": "Balanced Pitch",
                "url": "https://balancedpitch.vercel.app"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="page solutions">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage src="/solutions/hero.jpg" alt="" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Solutions</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
          <div className="solutions-hero-info">
            <p className="primary">Balanced Pitch Data</p>
            <p className="primary">•</p>
            <p className="primary">Academia & Innovation</p>
            <p className="primary">•</p>
            <p className="primary">AI Ethics</p>
            <p className="primary">•</p>
            <p className="primary">Harmony API</p>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Empowering <br />
                Through Innovation
              </h2>
              <p className="primary">
                Shaping the future of music with ethical AI solutions.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Support@balancedpitch.com</p>
              <p>Established 2024</p>
            </div>
            <div className="banner-info">
              <p>
              We believe in striking a harmonious balance between creativity and technology. By advocating for artists’ rights and fostering ethical AI practices, we’re paving the way for a responsible, innovative new era in the music industry.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner.jpg"
                alt="Empowering Creators Through Innovation"
              />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <div className="features-col">
              <img
                src="/solutions/text-bg.png"
                alt="Machine Learning Training Data"
              />
              <h3>
                Ethical AI <br /> Training Data
              </h3>
            </div>
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="Artist Attribution" />
              <h3>
                Creative Rights <br />
                Attribution
              </h3>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>01.</p>
              <p>Artist Recognition</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Detailed metadata ensures every creator and rights holder is accurately credited for their contributions.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>02.</p>
              <p>Data Optimization</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Our advanced tools extract intricate details from audio files, empowering data scientists to work with rich, high-quality datasets for cutting-edge AI applications.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>03.</p>
              <p>Access Control</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Strict permissions and legal safeguards guarantee that sensitive data is only accessible to authorized parties, ensuring ethical and lawful use.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>04.</p>
              <p>Insights & Reporting</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Comprehensive, transparent reporting on dataset usage fosters accountability and clarity for all stakeholders involved.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>05.</p>
              <p>Standards & Integrity</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              We uphold rigorous ethical and compliance benchmarks through our reporting frameworks and transparent data sourcing protocols.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-callout">
          <div className="callout-bg">
            <ParallaxImage
              src="/solutions/callout-bg.jpg"
              alt="Ethical AI Callout Background"
            />
          </div>

          <div className="callout-copy">
            <h2>
              Responsible <br /> for Creativity <br /> and Beyond
            </h2>
            <p>
            Join a movement that values creativity, honors artistic contributions, and pioneers ethical AI practices within the music industry and beyond.
            </p>
            <br />
            <p>
            In today’s rapidly evolving digital landscape, unchecked AI usage of creative works raises serious ethical concerns. Without transparency or consent, artists’ rights are jeopardized and legal risks emerge. Balanced Pitch is actively addressing these issues.
            </p>
          </div>
        </section>

        <section className="rights">
          <h1>AI Rights</h1>
          <h3>Advocating for Justice</h3>

          <p className="tagline">Enabling artists to safeguard, thrive, and lead.</p>
          <p>
            By partnering with legal pioneers and industry leaders, we deliver
            innovative solutions to reclaim lost revenue, prevent unauthorized
            use, and actively protect your music and intellectual property in an
            evolving digital landscape.
          </p>
        </section>

        <section className="rights-list">
          <div className="right">
            <div className="right-index">
              <p>(01)</p>
            </div>
            <div className="right-title">
              <h3>Define Your Rules</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Control your music</p>
              </div>
              <div className="right-desc-line">
                <p>Protect your voice</p>
              </div>
              <div className="right-desc-line">
                <p>Secure your image</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(02)</p>
            </div>
            <div className="right-title">
              <h3>Protect Your Rights</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Track misuse</p>
              </div>
              <div className="right-desc-line">
                <p>Enforce compliance</p>
              </div>
              <div className="right-desc-line">
                <p>Prevent exploitation</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(03)</p>
            </div>
            <div className="right-title">
              <h3>Shape Your Legacy</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Monetize ethically</p>
              </div>
              <div className="right-desc-line">
                <p>Leverage AI responsibly</p>
              </div>
              <div className="right-desc-line">
                <p>Build your creative future</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Shaping <br />
                Tomorrow’s Sound
              </h2>
              <p className="primary">
              Empowering creativity through ethical AI innovation.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Contact@balancedpitch.com</p>
              <p>Established 2024</p>
            </div>
            <div className="banner-info">
              <p>
              Balanced Pitch delivers ethically curated datasets with comprehensive attribution metadata and AI-ready features — supporting next-generation innovation while safeguarding creative rights.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner2.jpg"
                alt="Balanced Pitch Innovation"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Solutions);
