import React from "react";
import "./app.scss";
// import FoldEffect from "./components/FoldEffect/FoldEffect";
// import TestContent from "./components/TestContent/TestContent";
import PagesRoutersTransitions from "./components/PagesRoutersTransitions/PagesRoutersTransitions.jsx";

const App = () => {
  return (
    <div className="App">
      <a href="/" className="title">
        08:46
      </a>
      <PagesRoutersTransitions />
    </div>
  );
};

export default App;
