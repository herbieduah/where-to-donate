import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import Fade from "react-reveal/Fade";
import { gsap } from "gsap";
import FoldEffect from "../FoldEffect/FoldEffect.jsx";
// import { NavLink } from "react-router-dom";
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
    <>
      <div className="page-content">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  onExit={onExit}
                  onEntering={onEnter}
                  unmountOnExit>
                  <div className="page">
                    <div>
                      <FoldEffect>
                        <Component />
                      </FoldEffect>
                    </div>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Switch>
      </div>
    </>
  );
};

export default withRouter(PagesRoutersTransitions);
