import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProperty from "./pages/AddProperty";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
