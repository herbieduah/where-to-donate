import React from "react";
import { homeLinks } from "../utils/constants";

const About = () => {
  return (
    <div>
      <h1>{homeLinks.about}</h1>
      <div className="container about">
        <p>Wanted to create simple yet slick site to help out the movemenet</p>
        <p>Stillin the works.</p>
      </div>
    </div>
  );
};

export default About;
