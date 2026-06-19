import "./Reviews.css";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      name: "Priya",
      review:
        "The personalized meal plans helped me stay consistent and focused on my goals. I lost 5 kg in just one month, and the Zumba classes quickly became my favorite part of the day."
    },
    {
      name: "Anuradha",
      review:
        "I lost 7 kg in 2 months and feel more energetic than ever. My skin is glowing, my confidence has improved, and the supportive community keeps me motivated every day."
    },
    {
      name: "Sunita",
      review:
        "Losing 12 kg in 3 months felt impossible before Fitverde. The meal tracking support is excellent, and I always felt cared for throughout the journey. Yoga sessions are my absolute favorite."
    },
    {
      name: "Shruti",
      review:
        "The variety of workouts keeps every week exciting. From aerobics to dance fitness, I never felt bored. The guidance and encouragement helped me become stronger and more disciplined."
    },
    {
      name: "Meera",
      review:
        "Fitverde helped me build healthier habits and stay accountable. The daily support, nutrition guidance, and positive environment made my wellness journey much easier and more enjoyable."
    }
  ];

  return (
    <section id="reviews" className="reviews-section">

      <div className="reviews-grid">

        <div className="review-intro">
          <h2>
            REAL STORIES.
            <br />
            REAL RESULTS.
          </h2>
        </div>

        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card review-${index + 1}`}
          >
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review-text">
              "{review.review}"
            </p>

            <div className="review-user">
              <div className="user-avatar">
                {review.name.charAt(0)}
              </div>

              <span>{review.name}</span>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;