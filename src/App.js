import React from "react";
import "./app.scss";
// import FoldEffect from "./components/FoldEffect/FoldEffect";
// import TestContent from "./components/TestContent/TestContent";
import PagesRoutersTransitions from "./components/PagesRoutersTransitions/PagesRoutersTransitions.jsx";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <FoldEffect> */}
      <NavLink to="/" className="title">
        08:46
      </NavLink>
      <PagesRoutersTransitions />
      {/* </FoldEffect> */}
    </div>
  );
};

export default App;
