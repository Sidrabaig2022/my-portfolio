// 🎀 Stunning Responsive Navbar with Glassmorphism & Animated Hover Effects
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-navbar">
      <nav className="navbar-container">
        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Desktop & Mobile Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills & Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Let's Connect</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
