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

          <div className="whatsapp-buttons">

            <a
              href="https://wa.me/918218592357?text=Hello%20Fitverde!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20fitness%20and%20wellness%20programs.%0A%0ACould%20you%20please%20guide%20me%20regarding%20workout%20plans,%20nutrition%20support,%20and%20the%20best%20option%20for%20my%20goals?%0A%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              CONNECT WITH COACH
            </a>

            <a
              href="https://wa.me/917017333420?text=Hello%20Fitverde!%20%F0%9F%91%8B%0A%0AI%20came%20across%20your%20website%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20fitness%20and%20wellness%20programs.%0A%0ACould%20you%20please%20guide%20me%20regarding%20workout%20plans,%20nutrition%20support,%20and%20the%20best%20option%20for%20my%20goals?%0A%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              CONNECT WITH AST. COACH
            </a>

          </div>

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

          <button className="contact-btn" onClick={() =>
             window.open("https://forms.gle/QZYEJVxD1wctmQdg9","_blank" )}>
            BOOK FREE CONSULTATION
          </button>

        </div>

        <div className="contact-bottom-image">
          <img src={contact2} alt="Get Started" />
        </div>

      </div>

    </section>
  );
}

export default Contact;