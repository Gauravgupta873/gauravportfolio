import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="nav-logo">
          Gaurav Gupta
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

          {/* ABOUT */}
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/experience">About</Link>
          </li>

          {/* PROJECTS */}
          <li onClick={() => setMenuOpen(false)}>
            {location.pathname === "/" ? (
              <a href="#projects">Projects</a>
            ) : (
              <Link to="/#projects">Projects</Link>
            )}
          </li>

          {/* RESUME ✅ FIXED */}
          <li onClick={() => setMenuOpen(false)}>
            <a
              href="/Resume-GG-SE.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;