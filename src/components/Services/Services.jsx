import "./Services.css";

function Services() {
  const services = [
    {
      title: "1-on-1 Counseling",
      description:
        "Personal guidance tailored to your goals, ensuring progress and motivation."
    },
    {
      title: "Personalized Meal Plans",
      description:
        "Custom nutrition plans crafted for your needs to stay healthy and energized."
    },
    {
      title: "Monthly Challenges",
      description:
        "Exciting challenges to keep you engaged and push your limits every month."
    },
    {
      title: "Team Rewards",
      description:
        "Earn rewards from our team for consistency and hitting your milestones."
    },
    {
      title: "Varied Workouts",
      description:
        "Aerobics, Yoga, Zumba, Bollywood Dance, Cardio, and Strength sessions."
    },
    {
      title: "Online 24/7 Monitoring",
      description:
        "Track your meals and progress anytime with our continuous support."
    }
  ];

  return (
    <section id="services" className="services-section">

      <div className="services-grid">

        <div className="intro-card">
          <h2>WHY FITVERDE?</h2>

          <p>
            More than workouts. Personalized nutrition,
            expert guidance, daily accountability, and
            a wellness community designed to help you
            transform your lifestyle.
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card card-${index + 1}`}
          >
            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;