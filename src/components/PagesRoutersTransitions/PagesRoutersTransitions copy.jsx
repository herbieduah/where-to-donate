import React from "react";
import { Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import Fade from "react-reveal/Fade";
// import "./App.scss";

import About from "../../pages/About.jsx";
import PetitionsYouCanSign from "../../pages/PetitionsYouCanSign.jsx";
import ProtestTips from "../../pages/ProtestTips.jsx";
import WhatToBringToProtest from "../../pages/WhatToBringToProtest.jsx";
import WhereToDonate from "../../pages/WhereToDonate.jsx";
import Home from "../Home/Home.jsx";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/petitions", name: "PetitionsYouCanSign ", Component: PetitionsYouCanSign },
  { path: "/protesttips", name: "ProtestTips", Component: ProtestTips },
  { path: "/whattobring", name: "WhatToBringToProtest", Component: WhatToBringToProtest },
  { path: "/wheretodonate", name: "WhereToDonate", Component: WhereToDonate },
  { path: "/about", name: "About", Component: About },
];

const PagesRoutersTransitions = () => {
  const onEnter = (node) => {
    gsap.from([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
      y: 30,
      delay: 0.6,
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
  };

  const onExit = (node) => {
    gsap.to([node.children[0].firstElementChild, node.children[0].lastElementChild], 0.6, {
      y: -30,
      ease: "power3.InOut",
      stagger: {
        amount: 0.2,
      },
    });
  };

  return (
    <div className="page-content">
      <div className="title">
        <NavLink to="/" exact className="title__link">
          08:46
        </NavLink>
      </div>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => <Component />}
        </Route>
      ))}
    </div>
  );
};

export default PagesRoutersTransitions;
