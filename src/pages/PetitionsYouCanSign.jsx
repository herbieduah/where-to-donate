import React from "react";
import { homeLinks, changeOrgLinks } from "../utils/constants";
import { linksHelper } from "../utils/helpers";

const PetitionsYouCanSign = () => {
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
    <div>
      <h1>{homeLinks.petitionsYouCanSign}</h1>
      <div className="container petitions">
        <ul>{allChangeOrgPetitions}</ul>
      </div>
    </div>
  );
};

export default PetitionsYouCanSign;
