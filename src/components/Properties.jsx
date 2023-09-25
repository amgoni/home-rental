import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Properties.scss";
import Property from "./Property";
import { db, storage } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageRef = ref(storage, "hero.png");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getDocs(collection(db, "properties"));
        setProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  console.log(properties.imageUrl);

  return (
    <section id="properties">
      <div className="properties-container">
        <h2>Available Properties</h2>
        {loading ? (
          <h3>Loading properties...</h3>
        ) : error ? (
          <h3>Error fetching properties. Please try again.</h3>
        ) : properties.length > 0 ? (
          <div className="properties-grid">
            {properties.map((property) => (
              <Link to={`/property-details/${property.id}`} key={property.id}>
                <Property
                  key={property.id}
                  bedroom={property.bedrooms}
                  address={property.address}
                  type={property.type}
                  price={property.price}
                  imageUrl={property.imageURL}
                />
              </Link>
            ))}
          </div>
        ) : (
          <h3>Listed Properties Will Appear Here...</h3>
        )}
        <div className="pagination"></div>
      </div>
    </section>
  );
};

export default Properties;
