import "./Plans.css";
import { useState } from "react";

import plan1 from "../../assets/plan1.png";
import plan2 from "../../assets/plan2.png";
import plan3 from "../../assets/plan3.png";

function Plans() {
  const plans = {
    move: {
      image: plan1,
      title: "READY TO BUILD CONSISTENCY?",
      heading: "MOVE PLAN",
      description:
        "Perfect for anyone starting their fitness journey and looking for structured daily workouts from home.",

      features: [
        "Morning Live Workouts",
        "Evening Live Workouts",
        "Yoga Sessions",
        "Zumba Sessions",
        "Aerobics Classes",
        "Bollywood Dance Classes",
        "Cardio & Strength Training",
        "1-on-1 Counseling"
      ]
    },

    transform: {
      image: plan2,
      title: "READY FOR REAL TRANSFORMATION?",
      heading: "TRANSFORM PLAN",
      description:
        "Combine fitness, nutrition, and expert guidance to create sustainable lifestyle changes.",

      features: [
        "Everything in Move Plan",
        "Personalized Meal Plans",
        "Nutrition Guidance",
        "Dedicated 1-on-1 Counseling",
        "Progress Tracking",
        "Accountability Support"
      ]
    },

    elite: {
      image: plan3,
      title: "READY TO GO ALL IN?",
      heading: "ELITE PLAN",
      description:
        "Our complete wellness experience with premium support, tracking, rewards, and exclusive benefits.",

      features: [
        "Everything in Transform Plan",
        "24/7 Meal Monitoring",
        "Monthly Challenges",
        "Exclusive Rewards",
        "Priority Support",
        "VIP Wellness Community"
      ]
    }
  };

  const [activePlan, setActivePlan] = useState("move");

  return (
    <section id="plans" className="plans-section">

      <div className="plans-header">
        <h2>YOUR JOURNEY STARTS HERE</h2>

        <p>
          Choose the level of guidance, accountability,
          and support that fits your goals.
        </p>
      </div>

      <div className="plan-tabs">

        <button
          className={activePlan === "move" ? "active" : ""}
          onClick={() => setActivePlan("move")}
        >
          MOVE
        </button>

        <button
          className={activePlan === "transform" ? "active" : ""}
          onClick={() => setActivePlan("transform")}
        >
          TRANSFORM
        </button>

        <button
          className={activePlan === "elite" ? "active" : ""}
          onClick={() => setActivePlan("elite")}
        >
          ELITE
        </button>

      </div>

      <div className="plan-content">

        <div className="plan-image">
          <img
            src={plans[activePlan].image}
            alt={plans[activePlan].heading}
          />
        </div>

        <div className="plan-info">

          <span className="small-heading">
            {plans[activePlan].title}
          </span>

          <h3>
            {plans[activePlan].heading}
          </h3>

          <p className="plan-description">
            {plans[activePlan].description}
          </p>

          <ul>
            {plans[activePlan].features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>

          <button className="plan-btn">
            START TODAY
          </button>

        </div>

      </div>

    </section>
  );
}

export default Plans;