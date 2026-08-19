import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar_container">
      <div className="navbar-wrapper">
        <img className="logo" src={logo} alt="Positivus logo" />
        <h1>Positivus</h1>
      </div>
      
      <button 
        className="burger_menu" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle navigation"
      >
        <span className={`burger_bar ${isOpen ? "open" : ""}`}></span>
        <span className={`burger_bar ${isOpen ? "open" : ""}`}></span>
        <span className={`burger_bar ${isOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a className="nav_link" href="#" onClick={() => setIsOpen(false)}>
              About us
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={() => setIsOpen(false)}>
              Use Cases
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a className="nav_link" href="#" onClick={() => setIsOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <button className="quote_btn" onClick={() => setIsOpen(false)}>
              Request a quote
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}