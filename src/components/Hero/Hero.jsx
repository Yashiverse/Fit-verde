import "./Hero.css";
import series1 from "../../assets/series1.png";

function Hero() {
  return (
    <section id="hero" className="hero">

      <img
        src={series1}
        alt="Fitverde Hero"
        className="hero-image"
      />

      <div className="hero-overlay">

        <div className="hero-top">
          <p className="hero-subtitle">
            SCULPT YOUR CONFIDENCE.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              START TODAY
            </button>

            <button className="secondary-btn">
              BOOK FREE
            </button>
          </div>
        </div>

        <h1 className="hero-title">
          TRANSFORM
          <br />
          YOUR BODY
          <br />
          AND SOUL.
        </h1>

      </div>

    </section>
  );
}

export default Hero;