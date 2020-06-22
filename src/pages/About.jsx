import React from "react";

const About = ({ title, pageClass }) => {
  return (
    <div className={pageClass}>
      <h1>{title}</h1>
      <div className="container">
        <p>Wanted to create simple yet slick site to help out the movemenet</p>
        <p>Still in the works.</p>
      </div>
    </div>
  );
};

export default About;
