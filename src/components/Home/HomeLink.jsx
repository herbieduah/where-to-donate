import React from "react";
import { NavLink } from "react-router-dom";

const HomeLink = ({ link, text, outer }) => {
  return (
    <>
      {outer ? (
        <a href={link} target="__blank">
          {text}&nbsp;↗
        </a>
      ) : (
        <NavLink to={`/${link}`} exact>
          {text}&nbsp;→
        </NavLink>
      )}
    </>
  );
};

export default HomeLink;
