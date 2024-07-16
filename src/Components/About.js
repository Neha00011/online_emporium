import React from "react";
import Welcome from "./Welcome";

const About = () => {
  const data = {
    name: "Online Emporium",
  };

  return (
    <div id="about">
      <Welcome data={data} />
    </div>
  );
};

export default About;
