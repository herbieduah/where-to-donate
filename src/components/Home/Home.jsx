import React from "react";
import HomeLink from "./HomeLink.jsx";
import siteData from "../../data/siteData";
import "./home.scss";

const Home = () => {
  // const {
  //   about,
  //   protestTips,
  //   whatToBringToProtest,
  //   whereToDonate,
  //   petitionsYouCanSign,
  //   educatingYourself,
  //   mentalHealth
  // } = siteData;

  const linkInfo = siteData.map((data, index) => {
    return (
      <li key={index}>
        <HomeLink linkInfo={data} />
      </li>
    );
  });

  return (
    <div className="home">
      <ul>{linkInfo}</ul>
    </div>
  );
};

export default Home;
