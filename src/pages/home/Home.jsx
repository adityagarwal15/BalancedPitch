import React, { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

const Home = () => {
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".mix-tape",
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(".strip", {
          x: self.progress * 300,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <ParallaxImage src="/home/hero.jpg" alt="" />
          </div>

          <div className="hero-header">
            <h1>
              Balanced <br /> Pitch
            </h1>
            <p>Shaping the Future of Music with AI</p>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
           
          </div>

          {/* <div className="news-article">
            <div className="news-article-title">
              <p className="primary">
                AI Disputes Ignite: Harmony <br /> or Discord Ahead?
              </p>
            </div>
            <div className="news-article-info">
              <p>7.1.2024</p>
              <p>News</p>
            </div>
          </div> */}
        </section>

        <section className="site-intro">
          <div className="intro-col">
            <p className="primary">Empowering Creativity. Redefining Sound.</p>
            <p>Shaping the Future of Music with AI</p>

            <MusicPlayer />
          </div>
          <div className="intro-col">
            <p>The music industry stands at a pivotal crossroads.</p>
            <h2>
              A New <br /> Gold Tech
            </h2>
            <h3>Innovation thrives, but artists are left behind.</h3>
            <p>
            AI is reshaping the creative landscape, drawing from the art we’ve poured our souls into — frequently without recognition or consent. At <b>Balanced Pitch</b>, we believe in embracing AI’s possibilities while fiercely protecting the artists at its core. Through partnerships with educators, legal advocates, and industry pioneers, we’re shaping a future where creativity is honored, and artists’ rights are safeguarded.
            </p>
            <div className="intro-img">
              <div className="intro-img-wrapper">
                <ParallaxImage src="/home/site-intro.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="cover">
          <div className="cover-img">
            <ParallaxImage src="/home/cover.jpg" alt="" />
          </div>

          <div className="cover-copy">
            <h3>Committed For</h3>
            <h2>Creative AI</h2>
            <p>
            <b>Balanced Pitch</b> is a voice for artists, ensuring their creative legacy is valued, respected, and protected in an AI-driven world. Our mission is to establish fair, transparent, and ethical integration of artificial intelligence within the music industry, honoring the work, voices, and rights of creators at every turn.
            </p>
            <br />
            <br />
            <p>
            By collaborating with educators, legal experts, industry leaders, and policymakers, we’re actively shaping ethical standards and championing policies that safeguard the future of artistry in the age of AI.
            </p>

            <div className="cover-cta">
              <button>
                <Link to="/">Our Mission</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="mix-tape">
          <p className="primary">Responsible AI in Academia</p>
          <p>Balanced Pitch</p>

          <h1>
            From Innovation <br />
            To Iconic
          </h1>

          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="" />
            </div>
          </div>

          <div className="tape-info">
            <p>
            The next generation of data scientists, musicians, and creators is shaping the AI technologies that will define the future of music.
            </p>
            <br />
            <br />
            <p>
            At <b>Balanced Pitch</b>, we actively collaborate with universities and music programs to raise awareness about ethical AI and empower future innovators. Through workshops, partnerships, and mentorship programs, we help aspiring artists, data engineers, and technologists thrive in an evolving, AI-driven music industry — ensuring creativity and ethics remain at the heart of innovation.
            </p>

            <div className="sticker">
              <img src="/stickers-dark.png" alt="" />
            </div>
          </div>
        </section>

        <section className="latest-updates">
          <h1>Latest Updates</h1>
          <p className="lp-tagline">
           Explore comprehensive guidelines, industry developments, and the ongoing conversations shaping the future of ethical AI in music.
          </p>

          <div className="updates-page-link">
            <Link to="/">View All Updates</Link>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/updates/article1.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  The Fight for Authenticity: Tackling the rise of Unauthorized AI-Generated
                  Voices
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/updates/article2.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  Protecting Iconic Voices: The Ongoing Struggle Against AI Imitation
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Read More</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
