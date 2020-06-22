import About from "../pages/About.jsx";
import PetitionsYouCanSign from "../pages/PetitionsYouCanSign.jsx";
import ProtestTips from "../pages/ProtestTips.jsx";
import WhatToBringToProtest from "../pages/WhatToBringToProtest.jsx";
import WhereToDonate from "../pages/WhereToDonate.jsx";
import MentalHealth from "../pages/MentalHealth";
import EducatingYourself from "../pages/EducatingYourself";
import Home from "../components/Home/Home.jsx";

const siteData = [
  {
    home: {
      title: "",
      link: "",
      sources: [],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: Home,
    },
  },
  {
    about: {
      title: "About this site",
      link: "about",
      sources: [
        "https://blacklivesmatters.carrd.co/",
        "https://www.wired.com/story/how-to-protest-safely-gear-tips/",
        "https://www.wired.com/story/how-to-protest-safely-gear-tips/",
        "https://docs.google.com/document/d/1-He4uzB2k0oBybIfQZ_B9uulDYlmfv3GzRkILdSUQNw",
        "https://bailfunds.github.io/",
      ],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: About,
    },
  },
  {
    protestTips: {
      title: "While you're at a protest",
      link: "protesttips",
      sources: ["https://www.wired.com/story/how-to-protest-safely-gear-tips/"],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: ProtestTips,
    },
  },
  {
    whatToBringToProtest: {
      title: "What to bring (or not to bring) to a protest",
      link: "whattobringtoprotest",
      sources: ["https://www.wired.com/story/how-to-protest-safely-gear-tips/"],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: WhatToBringToProtest,
    },
  },
  {
    whereToDonate: {
      title: "Bail funds you can donate to",
      link: "wheretodonate",
      sources: ["https://bailfunds.github.io/"],
      otherResources: ["https://www.communityjusticeexchange.org/national-bail-fund-network"],
      lastUpdated: "6/11/2020",
      component: WhereToDonate,
    },
  },
  {
    petitionsYouCanSign: {
      title: "Petitions you can sign",
      link: "petitionsyoucansign",
      sources: ["https://docs.google.com/document/d/1-He4uzB2k0oBybIfQZ_B9uulDYlmfv3GzRkILdSUQNw"],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: PetitionsYouCanSign,
    },
  },
  {
    educatingYourself: {
      title: "Educating yourself about all of this",
      link: "educatingyourself",
      sources: [],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: EducatingYourself,
    },
  },
  {
    mentalHealth: {
      title: "Taking care of your mental health",
      link: "mentalhealth",
      sources: [],
      otherResources: [],
      lastUpdated: "6/11/2020",
      component: MentalHealth,
    },
  },
];
export default siteData;
