import React from "react";
import { changeOrgLinks } from "../utils/constants";
import { linksHelper } from "../utils/helpers";

const PetitionsYouCanSign = ({ title, pageClass }) => {
  const allChangeOrgPetitions = changeOrgLinks.map((data, index) => {
    return (
      <li key={index}>
        <a href={data} target="_blank" rel="noopener noreferrer">
          {linksHelper(data)}
        </a>
      </li>
    );
  });

  return (
    <div className={pageClass}>
      <h1>{title}</h1>
      <div className="container">
        <ul>{allChangeOrgPetitions}</ul>
      </div>
    </div>
  );
};

export default PetitionsYouCanSign;
