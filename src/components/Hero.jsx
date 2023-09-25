import React from "react";
import "./Hero.scss";
import hero from "../assets/hero.png";
import dots from "../assets/dots.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-heading">
            <h1>Modern living for everyone</h1>
          </div>
          <div className="hero-details">
            <p>
              We provide a complete service for the rental of real estate. We
              have been operating in Nigeria for more than 15 years.
            </p>
          </div>
          {/* <div className="hero-search">
            <select className="hero-dropdown" type="dropdown">
              <option className="hero-options" value="null">
                Property type
              </option>
            </select>
            <button className="button-primary">Search</button>
          </div> */}
        </div>
        <div className="hero-image">
          <img src={hero} alt="" />
          <img className="dots1" src={dots} alt="" />
          <img className="dots2" src={dots} alt="" />
          <img className="dots3" src={dots} alt="" />
          <img className="dots4" src={dots} alt="" />
          <img className="dots5" src={dots} alt="" />
          <img className="dots6" src={dots} alt="" />
          <img className="dots-1" src={dots} alt="" />
          <img className="dots-2" src={dots} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
