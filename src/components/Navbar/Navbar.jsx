import "./Navbar.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="logo">
        <h2>FITVERDE</h2>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link
            to="hero"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="gallery"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            to="services"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="plans"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Plans
          </Link>
        </li>

        <li>
          <Link
            to="reviews"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

      </ul>

      <button className="join-btn">
        Join Now
      </button>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;