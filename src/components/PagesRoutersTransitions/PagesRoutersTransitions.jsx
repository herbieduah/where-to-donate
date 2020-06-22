import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import FoldEffect from "../FoldEffect/FoldEffect.jsx";
import siteData from "../../data/siteData";
import Footer from "../Footer/Footer.jsx";

const PagesRoutersTransitions = () => {
  const routes = siteData.map((data, index) => {
    let { link: path, component: Component, title, otherResources, sources, lastUpdated } = data[Object.keys(data)[0]];
    console.log(path);
    return (
      <Route key={index} exact path={`/${path}`}>
        <div className="page">
          <div>
            <FoldEffect>
              <Component title={title} pageClass={path} />
              <Footer resources={otherResources} sources={sources} lastUpdated={lastUpdated} />
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
