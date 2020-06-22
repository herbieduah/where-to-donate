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
      lastUpdated: "",
      component: Home,
    },
  },
  {
    about: {
      title: "About this site",
      link: "about",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: About,
    },
  },
  {
    protestTips: {
      title: "While you're at a protest",
      link: "protesttips",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: ProtestTips,
    },
  },
  {
    whatToBringToProtest: {
      title: "What to bring (or not to bring) to a protest",
      link: "whattobringtoprotest",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: WhatToBringToProtest,
    },
  },
  {
    whereToDonate: {
      title: "Bail funds you can donate to",
      link: "wheretodonate",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: WhereToDonate,
    },
  },
  {
    petitionsYouCanSign: {
      title: "Petitions you can sign",
      link: "petitionsyoucansign",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: PetitionsYouCanSign,
    },
  },
  {
    educatingYourself: {
      title: "Educating yourself about all of this",
      link: "educatingyourself",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: EducatingYourself,
    },
  },
  {
    mentalHealth: {
      title: "Taking care of your mental health",
      link: "mentalhealth",
      sources: [],
      otherResources: [],
      lastUpdated: "",
      component: MentalHealth,
    },
  },
];
export default siteData;
