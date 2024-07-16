import React from "react";
import Welcome from "./Welcome";
import Service from "./Service";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  const data = {
    name: "online emporium",
  };

  return (
    <>
      <div id="home">
        <Welcome data={data} />
      </div>
      <div id="service">
        <Service />
      </div>

      <div id="fproduct">
        <FeatureProduct />
      </div>
    </>
  );
};

export default Home;
