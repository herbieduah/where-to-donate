import React from "react";
import HomeLink from "./HomeLink.jsx";
import { homeLinks } from "../../utils/constants";
import "./home.scss";

const Home = () => {
  const {
    about,
    protestTips,
    whatToBringToProtest,
    whereToDonate,
    petitionsYouCanSign,
    whereProtests,
    knowYourRights,
  } = homeLinks;

  return (
    <div className="home">
      <ul>
        <li>
          <HomeLink text={protestTips} link="protesttips" />
        </li>
        <li>
          <HomeLink text={whatToBringToProtest} link="whattobring" />
        </li>
        <li>
          <HomeLink text={whereToDonate} link="wheretodonate" />
        </li>
        <li>
          <HomeLink text={petitionsYouCanSign} link="petitions" />
        </li>
        <li>
          <HomeLink
            text={whereProtests}
            link="https://www.google.com/maps/d/edit?mid=1W3fsF5-Mz3_KaBgVt2pU8BDY5GkawUN_&ll=9.101946528762198%2C-54.848781100000004&z=2"
            outer
          />
        </li>
        <li>
          <HomeLink text={knowYourRights} link="https://www.aclu.org/know-your-rights/protesters-rights/" outer />
        </li>
        <li>
          <HomeLink text={about} link="about" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
