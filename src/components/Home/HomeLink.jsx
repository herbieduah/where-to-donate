import React from "react";
import { NavLink } from "react-router-dom";

const HomeLink = ({ linkInfo }) => {
  const { link, title } = linkInfo[Object.keys(linkInfo)[0]];
  return (
    <>
      {link ? (
        <NavLink to={`/${link}`} exact>
          {title}
        </NavLink>
      ) : null}
    </>
  );
};

export default HomeLink;
