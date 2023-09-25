import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-desktop">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/home" className="link">
          <li>Available Properties</li>
        </Link>
        <Link to="/" className="link">
          <li>About Us</li>
        </Link>
        <Link to="/add-property" className="link-button">
          <button className="button-primary">
            <li>List A Property</li>
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
