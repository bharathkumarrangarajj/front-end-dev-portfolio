import React from "react";
import { Link } from "react-router-dom";
import "./Aboutcontentstyling.css";
import prof3 from "../assets/profkeyboard.jpg";

import profreact from "../assets/prof3.jpg";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am i ?</h1>
        <p>Im a react fornt-end developer and create responsive websites</p>
        <Link to="/Contact">
          <button className="btnsss">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="top">
            <img src={profreact} className="img" alt="true" />
          </div>
          <div className="bottom">
            <img src={prof3} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
