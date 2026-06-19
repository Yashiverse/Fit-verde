import "./HeatSlider.css";

import { useEffect } from "react";
import { heatSliderAnimation } from "../animations/heatSliderAnimation";

function HeatSlider() {

  useEffect(() => {
    heatSliderAnimation();
  }, []);

  return (
    <section className="heat-slider-section">

      <div className="heat-slider-track">

        <h1>TURN UP THE HEAT •</h1>

      </div>

    </section>
  );
}

export default HeatSlider;