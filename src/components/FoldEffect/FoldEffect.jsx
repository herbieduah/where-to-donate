import React, { useEffect } from "react";
import foldEffect from "../../utils/foldEffect";
import "./foldEffect.scss";

const FoldEffect = ({ children }) => {
  useEffect(() => {
    foldEffect();
  }, []);
  return (
    <div className="content">
      <div className="fold-content" id="base-content">
        {children}
      </div>
      <div className="screen">
        <div className="wrapper-3d">
          <div className="fold fold-before"></div>
          <div className="fold fold-center"></div>
          <div className="fold fold-after"></div>
        </div>
      </div>
    </div>
  );
};

export default FoldEffect;
