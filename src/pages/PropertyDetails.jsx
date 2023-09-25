import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.scss";
import Contact from "../components/Contact";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import preview from "../assets/preview.jpeg";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const propertyDoc = doc(db, "properties", id);
        const propertySnapshot = await getDoc(propertyDoc);
        if (propertySnapshot.exists()) {
          setProperty({ ...propertySnapshot.data(), id: propertySnapshot.id });
          console.log(property);
        } else {
          console.log("Property not found");
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div id="property-details">
      <div className="property-details-container">
        <div className="property-details-heading">
          <h1>
            {property?.bedrooms} Bedroom at {property?.address}
          </h1>
        </div>
        <div className="property-details">
          <div className="property-details-main">
            <div className="property-details-image">
              <img src={property?.imageURL || preview} alt="" />
            </div>
            <div className="property-details-booking">
              <h2>
                ₦{property?.price} / <span>Annum</span>
              </h2>
              <button className="button-primary" onClick={toggleModal}>
                Rent
              </button>
            </div>
            {isModalVisible && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={toggleModal}>
                    &times;
                  </span>
                  <p>Rented Successfully</p>
                </div>
              </div>
            )}
            <div className="property-details-description">
              <h2>Property Description:</h2>
              <h4>Property type: {property?.type}</h4>
              <h4>
                Location: {property?.address}, {property?.city},{" "}
                {property?.state}{" "}
              </h4>
              <h4>Price: {property?.price}</h4>
              <h4>Living rooms: {property?.livingRooms}</h4>
              <h4>Bedrooms: {property?.bedrooms}</h4>
              <h4>Bathrooms: {property?.bathrooms}</h4>
              <h4>Area /m²: {property?.area}</h4>
              <p>\{property?.description}</p>
            </div>
          </div>
          <aside className="property-details-info">
            <Contact />
            <div className="property-details-info-profile">
              <h4>Landlord:</h4>
              <div className="property-details-info-profile-details">
                <img src={preview} alt="Landlord" />
                <div className="property-details-info-profile-details-text">
                  <h5>John Doe</h5>
                  <p>08012345678</p>
                  <p>johndoe@example.com</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
