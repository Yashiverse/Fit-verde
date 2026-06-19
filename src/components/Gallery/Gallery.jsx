import { useEffect } from "react";
import "./Gallery.css";
import { galleryAnimation } from "../../animations/galleryAnimation";

function Gallery() {

  useEffect(() =>{
    galleryAnimation();
  }, []);

  return (
    <section className="gallery-section">

      <div className="gallery-heading-top">
        <h2>FITVERDE ISN'T JUST<br /> A WORKOUT PROGRAM.</h2>
      </div>

      <div className="gallery-content">

        <div className="gallery-card gallery-card-1">
          <h3> DAILY <br />ACCOUNTABILITY</h3>
          <p> Stay consistent with expert guidance,
            daily support and a community that
            keeps you motivated.
          </p>
        </div>

        <div className="gallery-card gallery-card-2">
          <h3> PERSONALIZED <br /> NUTRITION</h3>
          <p>
            Meal plans designed around your goals,
            lifestyle and long-term health.
          </p>
        </div>

        <div className="gallery-card gallery-card-3">
          <h3>RESULTS <br /> THAT LAST</h3>
          <p>
            Build sustainable habits that create
            lasting change instead of temporary
            transformations.
          </p>
        </div>

      </div>

      <div className="gallery-heading-bottom">
        <h2>
          WE BUILD
          <br />
          HEALTHY HABITS.
        </h2>
      </div>

    </section>
  );
}

export default Gallery;