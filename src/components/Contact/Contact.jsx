import "./Contact.css";

import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";

function Contact() {
  return (
    <section id="contact">

      {/* TOP SECTION */}

      <div className="contact-top">

        <div className="contact-top-image">
          <img src={contact1} alt="Fitverde Contact" />
        </div>

        <div className="contact-top-content">

          <h2>
            LET'S GET
            <span> in </span>
            TOUCH
          </h2>

          <p>
            Questions, bookings, or simply taking the first step
            towards a healthier lifestyle — we'd love to hear from you.
          </p>

          <p>
            Whether you're interested in personalized meal plans,
            wellness coaching, yoga sessions, or workout programs,
            our team is here to guide you.
          </p>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="contact-bottom">

        <div className="contact-form-section">

          <h2>
            READY TO
            <span> get </span>
            STARTED?
          </h2>

          <p>
            Tell us about your goals and we'll help you find the right
            workout, nutrition, and wellness plan for your lifestyle.
          </p>

          <form className="contact-form">

            <p className="consultation-tag">
              Free Consultation • Personalized Guidance
            </p>

            <div className="input-row">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-row">

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <select>
                <option>Select Plan</option>
                <option>Move Plan</option>
                <option>Transform Plan</option>
                <option>Elite Plan</option>
              </select>

            </div>

            <textarea
              placeholder="Tell us about your fitness goals..."
            ></textarea>

            <button type="submit">
              BOOK FREE CONSULTATION
            </button>

          </form>

        </div>

        <div className="contact-bottom-image">
          <img src={contact2} alt="Get Started" />
        </div>

      </div>

    </section>
  );
}

export default Contact;