import React from "react";
import "./footer.scss";

const Footer = ({ resources, sources, lastUpdated }) => {
  return (
    <div className="footer container">
      {resources.length !== 0 ? <SourcesResources links={resources} heading="Other Resources" /> : null}
      {sources.length !== 0 ? <SourcesResources links={sources} heading="Sources" /> : null}
      {lastUpdated ? (
        <div className="lastUpdated">
          {" "}
          <strong>Last Updated: </strong>
          <span>{lastUpdated}</span>
        </div>
      ) : null}
    </div>
  );
};

const SourcesResources = ({ links, heading }) => {
  const sourcesResourcesLinks = links.map((data, index) => {
    return (
      <li key={index}>
        <a href={data} target="_blank" rel="noopener noreferrer">
          {data}
        </a>
      </li>
    );
  });

  return (
    <div>
      <h2>{heading}</h2>
      <ul>{sourcesResourcesLinks}</ul>
    </div>
  );
};

export default Footer;
