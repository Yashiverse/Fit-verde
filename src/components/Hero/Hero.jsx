import "./Hero.css";

import HeroDesktop from "../../assets/series1.png";
import HeroMobile from "../../assets/mobile.png";

function Hero() {
  return (
    <section id="hero" className="hero">

      <picture>
        <source
          media="(max-width:1024px)"
          srcSet={HeroMobile}
        />

        <img
          src={HeroDesktop}
          alt="Fitverde Hero"
          className="hero-image"
        />
      </picture>

      <div className="hero-overlay">

        <div className="hero-top">

          <p className="hero-subtitle">
            SCULPT YOUR CONFIDENCE.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              START TODAY
            </button>

            <a
              href="https://forms.gle/QZYEJVxD1wctmQdg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary-btn">
                BOOK FREE
              </button>
            </a>

          </div>

        </div>

        <h1 className="hero-title">
          TRANSFORM
          <br />
          <span>your</span> BODY
          <br />
          AND SOUL.
        </h1>

      </div>

    </section>
  );
}

export default Hero;