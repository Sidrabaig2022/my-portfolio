
// 🎀 Stunning Navbar Component with Glassmorphism & Animated Hover Effects
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="glass-navbar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills & Services</Link></li>
          <li><Link to="/contact">Let's Connect</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;