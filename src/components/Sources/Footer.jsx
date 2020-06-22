import React from "react";
import "./foldEffect.scss";

const Footer = ({ resources, sources, lastUpdated }) => {
  return (
    <div className="footer">
      {resources ? <SourcesResources links={resources} heading="Other Resources" /> : null}
      {sources ? <SourcesResources links={sources} heading="Sources" /> : null}
      {lastUpdated ? <small>{lastUpdated}</small> : null}
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
