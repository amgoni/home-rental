import React from "react";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import ListProperty from "../components/ListProperty";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Properties />
      <ListProperty />
      <Contact />
    </div>
  );
};

export default Home;
