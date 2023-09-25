import React from "react";
import { Link } from "react-router-dom";
import "./ListProperty.scss";
import forRent from "../assets/forRent.jpg";

const ListPropertySection = () => {
  return (
    <section id="list-property">
      <div className="list-property-container">
        <div className="list-property-image">
          <img src={forRent} alt="" />
        </div>
        <div className="list-property-main">
          <div className="list-property-heading">
            <h2>List Your Property With Us</h2>
          </div>
          <div className="list-property-details">
            <p>
              We connect you with the best tenants. We also help you manage your
              property and get the best value for your property. Do you have a
              property you would like to list with us? We would love to hear
              from you.
            </p>
          </div>
          <div className="">
            <Link to="/add-property">
              <button className="button-primary">List with us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPropertySection;
