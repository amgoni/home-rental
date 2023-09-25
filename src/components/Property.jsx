import React from "react";
import "./Property.scss";
import { FaStar } from "react-icons/fa6";

const Property = ({ bedroom, address, type, price, imageUrl }) => {
  return (
    <div className="property">
      <img src={imageUrl} alt="" />
      <h3>
        {bedroom} Bedroom at {address}
      </h3>
      <p>{type}</p>
      <h4>₦{price} / Annum</h4>
    </div>
  );
};

export default Property;
