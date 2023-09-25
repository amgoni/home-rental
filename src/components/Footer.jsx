import React from "react";
import "./Footer.scss";
import footerLogo from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <img src={footerLogo} alt="" />
        <h2>Home Rental Service, 2023.</h2>
      </div>
    </footer>
  );
};

export default Footer;
