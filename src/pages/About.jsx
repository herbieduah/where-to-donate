import React from "react";
import { homeLinks } from "../utils/constants";

const About = () => {
  return (
    <div>
      <h1>{homeLinks.about}</h1>
      <div className="container about">
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Nullam
          id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu
          leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>

        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </div>
    </div>
  );
};

export default About;
