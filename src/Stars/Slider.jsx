import "./Slider.css";
import { useEffect } from "react";
import { sliderAnimation } from "../animations/sliderAnimation";

function Slider() {

  useEffect(() => {
    sliderAnimation();
  }, []);

  return (
    <section className="slider-section">

      <div className="slider-track">
        <h1>NOURISH • MOVE • GROW •</h1>
      </div>

    </section>
  );
}

export default Slider;