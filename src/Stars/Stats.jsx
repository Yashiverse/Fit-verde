import "./Stats.css";
import { useEffect } from "react";
import { statsAnimation } from "../animations/statsAnimation";

function Stats() {

    useEffect(() => {
        statsAnimation();
    }, []);

  return (
    <section className="stats-section">

      <div className="stat">
        <h2 className="counter" data-target="100">0</h2>
        <p>Lives Transformed</p>
      </div>

      <div className="stat">
        <h2 className="counter" data-target="1000">0</h2>
        <p>Workout Sessions</p>
      </div>

      <div className="stat">
        <h2 className="counter" data-target="98">0</h2>
        <p>Client Satisfaction</p>
      </div>

      <div className="stat">
        <h2>24/7</h2>
        <p>Support & Monitoring</p>
      </div>

    </section>
  );
}

export default Stats;