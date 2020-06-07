import React from "react";
import "./app.scss";
import FoldEffect from "./components/FoldEffect/FoldEffect";
// import TestContent from "./components/TestContent/TestContent";
import PagesRoutersTransitions from "./components/PagesRoutersTransitions/PagesRoutersTransitions.jsx";

const App = () => {
  return (
    <div className="App">
      <FoldEffect>
        <PagesRoutersTransitions />
      </FoldEffect>
    </div>
  );
};

export default App;
