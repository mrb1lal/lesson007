import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar_container">
      <div className="navbar-wrapper">
        <img className="logo" src={logo} alt="Positivus logo" />
        <h1>Positivus</h1>
      </div>
      
      <nav className="navbar">
        <ul>
          <li>
            <a className="nav_link" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Use Cases
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Blog
            </a>
          </li>
          <li>
            <button className="quote_btn">Request a quote</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}