import "./Services.css";

function Services() {
  const services = [
    {
      title: "1-on-1 Counseling",
      description: "Personal guidance tailored to your goals, ensuring progress and motivation."
    },
    {
      title: "Personalized Meal Plans",
      description: "Custom nutrition plans crafted for your needs to stay healthy and energized."
    },
    {
      title: "Monthly Challenges",
      description: "Exciting challenges to keep you engaged and push your limits every month."
    },
    {
      title: "Team Rewards",
      description: "Earn rewards from our team for consistency and hitting your milestones."
    },
    {
      title: "Varied Workouts",
      description: "Aerobics, Yoga, Zumba, Bollywood Dance, Cardio, and Strength sessions."
    },
    {
      title: "Online 24/7 Monitoring",
      description: "Track your meals and progress anytime with our continuous support."
    },
  ];

  return (
    <section id="services" className="services-section">
      <div id="header1">
        <h2>Our Services</h2>
        <h4>Discover the comprehensive offerings that help transform your body and mind.</h4>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;