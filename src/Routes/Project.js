import React from "react";
import Navbar from "./Components/Navbar";
import Heroimage2 from "./Components/Heroimage2";
import Footer from "./Components/Footer";
import Pricingcard from "./Components/Pricingcard";
import Workcard from "./Components/Workcard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS" para="Some of my most recent works" />
      <Workcard />
      <Pricingcard />

      <Footer />
    </div>
  );
};

export default Project;
