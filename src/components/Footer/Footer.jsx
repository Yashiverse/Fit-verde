import "./Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-newsletter">

          <h3>JOIN THE FITVERDE FAMILY</h3>
          <p>
            Get fitness tips, wellness insights,
            healthy recipes, and updates directly
            in your inbox.
          </p>

          <input
            type="email"
            placeholder="Email Address"
          />
          <button>
            SIGN UP
          </button>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
          </div>

        </div>

        <div className="footer-links">

          <h3>EXPLORE</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>CONTACT</h3>

          <p>Online Wellness Coaching</p>
          <p>Morning & Evening Sessions</p>
          <p>+91 8218592357, +91 7017333420, <br/> +91 9359154245</p>
          <p>luxmi0054@gmail.com</p>

        </div>

      </div>

      <div className="footer-brand">
        FITVERDE
      </div>

      <div className="footer-bottom">
        © 2026 Fitverde. Transform Your Body & Soul.
      </div>

    </footer>
  );
}

export default Footer;