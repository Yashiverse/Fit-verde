import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>FITVERDE</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="hero" smooth={true} duration={800}>
            Home
          </Link>
        </li>

        <li>
          <Link to="gallery" smooth={true} duration={800}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="services" smooth={true} duration={800}>
            Services
          </Link>
        </li>

        <li>
          <Link to="plans" smooth={true} duration={800}>
            Plans
          </Link>
        </li>

        <li>
          <Link to="reviews" smooth={true} duration={800}>
            Reviews
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>

      <button className="join-btn">Join Now</button>
    </nav>
  );
}

export default Navbar;