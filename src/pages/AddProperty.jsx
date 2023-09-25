import React, { useRef, useState } from "react";
import "./AddProperty.scss";
import { db, storage } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import preview from "../assets/preview.jpeg";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    price: "",
    type: "house", // Default value
    livingRooms: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    image: null,
    imageURL: "",
  });

  const [submitMessage, setSubmitMessage] = useState(""); // Message to show after submission
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const propertiesCollectionRef = collection(db, "properties");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const uploadImage = async () => {
    if (formData.image) {
      const storageRef = ref(storage, `images/${formData.image.name}`);
      try {
        // Upload the image and get the download URL
        const uploadTask = uploadBytes(storageRef, formData.image);
        const snapshot = await uploadTask;
        const url = await getDownloadURL(snapshot.ref);

        // Update the imageURL in the state
        setFormData({
          ...formData,
          imageURL: url,
        });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true); // Start processing
    await uploadImage();
    try {
      // Check if the imageURL is empty (indicating a failed upload)
      if (!formData.imageURL) {
        console.error("Image upload failed. Data will not be saved.");
        setIsSubmitSuccess(false); // Submission failed
        setSubmitMessage("Image upload failed. Data will not be saved.");
        setIsProcessing(false); // Reset processing flag
        return; // Exit early and don't save the data
      }

      // Instead of passing formData directly, pass an object with the imageURL
      const propertyData = {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        price: formData.price,
        type: formData.type,
        livingRooms: formData.livingRooms,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        area: formData.area,
        description: formData.description,
        imageURL: formData.imageURL, // Store the imageURL, not the File object
      };

      await addDoc(propertiesCollectionRef, propertyData);
      setIsSubmitSuccess(true); // Submission was successful
      setSubmitMessage("Data submitted successfully!");
    } catch (err) {
      console.error(err);
      setIsSubmitSuccess(false); // Submission failed
      setSubmitMessage("Data submission failed.");
    } finally {
      setIsProcessing(false); // Reset processing flag
    }
  };

  return (
    <div className="add-property">
      <div className="add-property-container">
        <div className="add-property-heading">
          <h1>List A Property</h1>
        </div>
        <div className="add-property-form">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <div className="form-group">
                <label htmlFor="address">
                  Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address"
                  onChange={handleChange}
                  value={formData.address}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  onChange={handleChange}
                  value={formData.city}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">
                  State <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  onChange={handleChange}
                  value={formData.state}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Price per annum <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Enter price"
                  onChange={handleChange}
                  value={formData.price}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">
                  Type <span className="required">*</span>
                </label>
                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  value={formData.type}
                  required
                >
                  <option value="house">House</option>
                  <option value="duplex">Duplex</option>
                  <option value="apartment">Apartment</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="living-rooms">
                  Living rooms <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="livingRooms"
                  id="livingRooms"
                  placeholder="Enter number of living rooms"
                  onChange={handleChange}
                  value={formData.livingRooms}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bedrooms">
                  Bedrooms <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  placeholder="Enter number of bedrooms"
                  onChange={handleChange}
                  value={formData.bedrooms}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathrooms">
                  Bathrooms <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  id="bathrooms"
                  placeholder="Enter number of bathrooms"
                  onChange={handleChange}
                  value={formData.bathrooms}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="area">
                  Area <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  onChange={handleChange}
                  value={formData.area}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">
                Description <span className="required">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="Enter description"
                onChange={handleChange}
                value={formData.description}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">
                Images <span className="required">*</span>
              </label>
              <input
                className="file-input"
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
                accept="image/*"
                required
              />
            </div>
            <div className="form-group">
              <button className="button-primary" type="submit">
                {isProcessing ? "Processing..." : "Submit"}
              </button>
            </div>
          </form>
          {submitMessage && (
            <div
              className={`submit-message ${
                isSubmitSuccess ? "success" : "error"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
