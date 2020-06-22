import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
// import Fade from "react-reveal/Fade";
import FoldEffect from "../FoldEffect/FoldEffect.jsx";
import siteData from "../../data/siteData";
// import { NavLink } from "react-router-dom";
// import "./App.scss";

// import About from "../../pages/About.jsx";
// import PetitionsYouCanSign from "../../pages/PetitionsYouCanSign.jsx";
// import ProtestTips from "../../pages/ProtestTips.jsx";
// import WhatToBringToProtest from "../../pages/WhatToBringToProtest.jsx";
// import WhereToDonate from "../../pages/WhereToDonate.jsx";
// import Home from "../Home/Home.jsx";

// const routes = [
//   { path: "/", name: "Home", Component: Home },
//   { path: "/petitions", name: "PetitionsYouCanSign ", Component: PetitionsYouCanSign },
//   { path: "/protesttips", name: "ProtestTips", Component: ProtestTips },
//   { path: "/whattobring", name: "WhatToBringToProtest", Component: WhatToBringToProtest },
//   { path: "/wheretodonate", name: "WhereToDonate", Component: WhereToDonate },
//   { path: "/about", name: "About", Component: About },
// ];

const PagesRoutersTransitions = () => {
  const routes = siteData.map((data, index) => {
    let { link: path, component: Component, title } = data[Object.keys(data)[0]];
    console.log(path);
    return (
      <Route key={index} exact path={`/${path}`}>
        <div className="page">
          <div>
            <FoldEffect>
              <Component title={title} />
            </FoldEffect>
          </div>
        </div>
      </Route>
    );
  });
  return (
    <>
      <div className="page-content">
        <Switch>{routes}</Switch>
      </div>
    </>
  );
};

export default withRouter(PagesRoutersTransitions);
